/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar";
import { useMutation } from "react-query";

// Definisi tipe data untuk form
interface FormData {
  company_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export default function RegisterCompany() {
  const [formData, setFormData] = useState<FormData>({
    company_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post(
        "https://accepted-ramona-dannyysaputra-b44305d8.koyeb.app/companies/register",
        null,
        {
          params: {
            email: data.email,
            password: data.password,
            company_name: data.company_name,
            phone_number: data.phone_number,
          },
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      setMessage(data.message);
      navigate("/login");
    },
    onError: (error: any) => {
      if (error.response) {
        setMessage(error.response.data.detail || "Gagal mendaftar perusahaan");
      } else {
        setMessage("Terjadi kesalahan, coba lagi.");
      }
    },
  });

  // Fungsi untuk submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Reset pesan
    console.log(formData);
    mutation.mutate(formData); // Jalankan mutasi
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
                      <h3>Daftar Akun Perusahaan</h3>
                      {/* Tampilkan pesan sukses atau error */}
                      {message && (
                        <p
                          className={`mt-3 ${
                            mutation.isError ? "text-danger" : "text-success"
                          }`}
                        >
                          {message}
                        </p>
                      )}
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="log-form">
                        <div className="form-group">
                          <label className="col-form-label">
                            Nama Perusahaan
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Contoh: PT. Maju Bersama"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">E-mail</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="example@email.com"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            Nomor Whatsapp
                          </label>
                          <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="08123456789"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label d-block">
                            Kata Sandi
                          </label>
                          <div className="pass-group">
                            <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              className="form-control pass-input"
                              placeholder="*************"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        className="btn btn-primary w-100 login-btn"
                        type="submit"
                        disabled={mutation.isLoading}
                      >
                        {mutation.isLoading ? "Mendaftarkan..." : "Daftar"}
                      </button>

                      <p className="no-acc mt-3">
                        Sudah memiliki akun? <Link to="/login">Masuk</Link>
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
