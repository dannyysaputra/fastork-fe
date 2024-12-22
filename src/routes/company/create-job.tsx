/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    experience_level: "",
    education_level: "",
    employment_type: "",
    tags: "",
    skills: "",
    min_salary: "",
    max_salary: "",
    salary_type: "",
    expiration_date: "",
  });

  console.log(formData);

  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/jobs?title=${formData.title}&description=${formData.description}&experience_level=${formData.experience_level}&education_level=${formData.education_level}&employment_level=${formData.employment_type}&employment_type=${formData.employment_type}&tags=${formData.tags}&skills=${formData.skills}&min_salary=${formData.min_salary}&max_salary=${formData.max_salary}&salary_type=${formData.salary_type}&expiration_date=${formData.expiration_date}&token=${user.token}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      alert(response.data.message); // Menampilkan pesan sukses
      navigate("/company");
    } catch (error: any) {
      alert(error.response?.data?.detail || "Terjadi kesalahan");
    }
  };

  return (
    <div className="main-wrapper">
      <Navbar></Navbar>
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3 theiaStickySidebar">
                <div className="settings-widget">
                  <div className="settings-menu">
                    <ul>
                      <li>
                        <Link to={"/applicant"}>
                          <i className="feather-grid"></i>{" "}
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <a href="customer-booking.html">
                          <i className="feather-user"></i>{" "}
                          <span>Company Profile</span>
                        </a>
                      </li>
                      <li>
                        <Link to={"/company/create-job"} className="active">
                          <i className="feather-plus-circle"></i>{" "}
                          <span>Post a Job</span>
                        </Link>
                      </li>
                      <li>
                        <a href="customer-wallet.html">
                          <i className="feather-briefcase"></i>{" "}
                          <span>My Jobs</span>
                        </a>
                      </li>
                      <li>
                        <Link to={"/applicant/settings"}>
                          <i className="feather-users"></i>{" "}
                          <span>Candidates</span>
                        </Link>
                      </li>
                      <li>
                        <a href="customer-wallet.html">
                          <i className="feather-settings"></i>{" "}
                          <span>Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i className="feather-log-out"></i>{" "}
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-9 mx-auto">
                <div className="login-back">
                  <Link to={"/company"}>
                    <i className="feather-arrow-left"></i> Back
                  </Link>
                </div>

                <div className="row">
                  <div className="col-lg-12 mx-auto">
                    <fieldset id="first-field">
                      <div className="row">
                        <div className="sub-title">
                          <h6>Buat Pekerjaan</h6>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label className="col-form-label">Posisi</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Masukkan posisi pekerjaan"
                              name="title"
                              value={formData.title}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">
                              Expiration Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="expiration_date"
                              value={formData.expiration_date}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Tags</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Job keyword, tags etc..."
                              name="tags"
                              value={formData.tags}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">Skills</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MERN, SDLC"
                              name="skills"
                              value={formData.skills}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="sub-title">
                          <h6>Salary</h6>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">Min. Gaji</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Minimal Gaji"
                              name="min_salary"
                              value={formData.min_salary}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">Max. Gaji</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Maximal Gaji"
                              name="max_salary"
                              value={formData.max_salary}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">Tipe Gaji</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Tipe Gaji"
                              name="salary_type"
                              value={formData.salary_type}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="sub-title">
                          <h6>Informasi Lanjutan</h6>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">Education</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="S1/D4"
                              name="education_level"
                              value={formData.education_level}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">Pengalaman</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="1 tahun pengalaman"
                              name="experience_level"
                              value={formData.experience_level}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="col-form-label">
                              Tipe Pekerjaan
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Full time"
                              name="employment_type"
                              value={formData.employment_type}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="col-form-label">
                              Deskripsi Pekerjaan
                            </label>
                            <textarea
                              className="form-control"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="field-btns">
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Buat{" "}
                              <i className="feather-arrow-right-circle"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
