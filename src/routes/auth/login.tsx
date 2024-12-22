/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import Navbar from "../../components/navbar";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Mutation to handle login API request
  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await axios.post(
        "http://localhost:3000/login", // Replace with your API endpoint
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      // On successful login, save the token (in localStorage or context)
      localStorage.setItem("token", data.token); // Save token
      localStorage.setItem("userRole", data.role); // Save user role (applicant/company)

      login(data);

      if (data.role === "company") {
        navigate("/company"); // Redirect to company dashboard
      } else {
        navigate("/applicant"); // Redirect to applicant dashboard
      }
    },
    onError: (error: any) => {
      if (error.response) {
        setMessage(error.response.data.detail || "Login failed");
      } else {
        setMessage("An error occurred, please try again.");
      }
    },
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData); // Trigger mutation
  };

  return (
    <>
      <Navbar />
      <div className="login-body">
        <div className="main-wrapper">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 mx-auto">
                  <div className="login-wrap">
                    <div className="login-header">
                      <h3>Masuk</h3>
                      {message && (
                        <div className="alert alert-info mt-3">{message}</div>
                      )}
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="log-form">
                        <div className="form-group">
                          <label className="col-form-label">E-mail</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label d-block">
                            Kata Sandi
                          </label>
                          <div className="pass-group">
                            <input
                              type="password"
                              className="form-control pass-input"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="*************"
                            />
                            <span className="toggle-password feather-eye"></span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary w-100 login-btn"
                        type="submit"
                        disabled={mutation.isLoading} // Disable the button when loading
                      >
                        {mutation.isLoading ? "Logging in..." : "Masuk"}
                      </button>
                      <p className="no-acc">
                        Belum memiliki akun?{" "}
                        <Link to="/choose-signup">Daftar</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mouse-cursor cursor-outer"></div>
          <div className="mouse-cursor cursor-inner"></div>
        </div>
      </div>
    </>
  );
}
