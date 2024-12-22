/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import Navbar from "../../components/navbar";

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Mutation to handle the registration API request
  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await axios.post(
        "https://accepted-ramona-dannyysaputra-b44305d8.koyeb.app/register",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      setMessage(data.message);
      navigate("/login"); // Redirect to login page after successful registration
    },
    onError: (error: any) => {
      if (error.response) {
        setMessage(error.response.data.detail || "Gagal mendaftar akun");
      } else {
        setMessage("Terjadi kesalahan, coba lagi.");
      }
    },
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData); // Trigger the mutation with form data
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
                    <div className="login-back">
                      <Link to={"/"}>
                        <div className="flex">
                          <img
                            src="assets/img/icons/undo-icon.svg"
                            className="me-2"
                            alt="icon"
                          />
                          Kembali
                        </div>
                      </Link>
                    </div>
                    <div className="login-header">
                      <h3>Daftar Akun Pelamar</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="log-form">
                        <div className="form-group">
                          <label className="col-form-label">Nama Lengkap</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John doe"
                          />
                        </div>
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
                          <label className="col-form-label">
                            Nomor Whatsapp
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            placeholder="08123456789"
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
                        <div className="row">
                          <div className="col-md-6">
                            <div className="char-length">
                              <p>Minimal 6 karakter</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary w-100 login-btn"
                        type="submit"
                        disabled={mutation.isLoading} // Disable the button when loading
                      >
                        {mutation.isLoading ? "Mendaftar..." : "Daftar"}
                      </button>
                      <p className="no-acc">
                        Sudah memiliki akun? <Link to="/login">Masuk</Link>
                      </p>
                    </form>

                    {message && (
                      <div className="alert alert-info mt-3">{message}</div>
                    )}
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
