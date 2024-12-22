import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

export default function CustomerDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [loading, setLoading] = useState(true);

  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get<Job[]>(
          `http://localhost:3000/job-applied?token=${user.token}`,
          {
            headers: { accept: "applications/json" },
          }
        );
        setJobs(response.data); // Assuming response data contains the array directly
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  interface Job {
    id: number;
    applicant_id: number;
    job_id: number;
    application_date: string;
    application_status: string;
    similarity_score: number;
    company_id: number;
    category_id: number | null;
    title: string;
    name: string;
    description: string;
    experience_level: string;
    education_level: string;
    career_level: string;
    employment_type: string;
    required_skills: string;
  }

  if (loading) return <p>Loading...</p>;
  return (
    <div className="main-wrapper">
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link className="navbar-brand logo" to={"/"}>
                <div className="d-inline-flex gap-2">
                  <img
                    src="/assets/img/logo-fastwork.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <p>FASTWORK</p>
                </div>
              </Link>
              <Link className="navbar-brand logo-small" to={"/"}>
                <img
                  src="assets/img/logo-small.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="index.html" className="menu-logo">
                  <img
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu">
                  <Link to={"/"}>Beranda</Link>
                </li>
                <li>
                  <Link to={"/jobs"}>Jobs</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login" to={"/login"}>
                  <i className="fa-regular fa-circle-user me-2"></i>John
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="content pb-10">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 theiaStickySidebar">
              <div className="settings-widget">
                <div className="settings-menu">
                  <ul>
                    <li>
                      <Link to={"/applicant"} className="active">
                        <i className="feather-grid"></i> <span>Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <a href="customer-booking.html">
                        <i className="feather-briefcase"></i>{" "}
                        <span>Riwayat Lamaran</span>
                      </a>
                    </li>
                    <li>
                      <a href="customer-favourite.html">
                        <i className="feather-bookmark"></i>{" "}
                        <span>Lowongan Disukai</span>
                      </a>
                    </li>
                    <li>
                      <a href="customer-wallet.html">
                        <i className="feather-bell"></i>{" "}
                        <span>Rekomendasi Lowongan</span>
                      </a>
                    </li>
                    <li>
                      <Link to={"/applicant/settings"}>
                        <i className="feather-settings"></i>{" "}
                        <span>Settings</span>
                      </Link>
                    </li>
                    <li>
                      <a href="index.html">
                        <i className="feather-log-out"></i> <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-9">
              <div className="widget-title">
                <h4>Hai, John</h4>
              </div>
              <div>
                <p className="text-neutral-400 mb-3">
                  Berikut adalah pekerjaan dan aktivitas harian Anda
                </p>
              </div>

              <div className="row">
                <div className="w-1/3">
                  <div className="dash-widget h-28 bg-sky-200 bg-opacity-50">
                    <div className="grid grid-cols-4">
                      <div className="col-start-1 col-end-3 content-center">
                        <h2 className="font-semibold text-2xl">589</h2>
                        <p>Riwayat Lamaran</p>
                      </div>
                      <div className="col-start-4">
                        <img src="assets/img/icons/icon-koper.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* col-md-6 col-lg-3 */}
                <div className="w-1/3">
                  <div className="dash-widget h-28 bg-yellow-200 bg-opacity-50">
                    <div className="grid grid-cols-4">
                      <div className="col-start-1 col-end-3 content-center">
                        <h2 className="font-semibold text-2xl">238</h2>
                        <p>Lowongan Disukai</p>
                      </div>
                      <div className="col-start-4">
                        <img src="assets/img/icons/icon-clipboard.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="dash-widget h-28 bg-green-200 bg-opacity-50">
                    <div className="grid grid-cols-4">
                      <div className="col-start-1 col-end-3 content-center">
                        <h2 className="font-semibold text-2xl">574</h2>
                        <p>Rekomendasi Lowongan</p>
                      </div>
                      <div className="col-start-4">
                        <img src="assets/img/icons/icon-bell.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md h-32 w-full bg-red-600 bg-opacity-75 mb-3 flex justify-between">
                <div className="flex my-auto mx-3">
                  <div className="bg-[url('assets/img/banner1.jpg')] bg-cover bg-center h-16 w-16 rounded-full mx-2"></div>
                  <div className="text-white mx-2">
                    <div className="mt-2">Profil Anda Belum Lengkap</div>
                    <div className="text-sm">Segera lengkapi profilmu!</div>
                  </div>
                </div>
                <div className="my-auto">
                  <button className="bg-white text-red-600 w-48 h-12 rounded-md mx-4">
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="d-flex flex-column">
                  <div className="flex justify-between">
                    <h6 className="user-title">Recently Applied</h6>
                    <p>
                      View all <i className="feather-arrow-right"></i>
                    </p>
                  </div>
                  <div className="table-responsive recent-booking flex-fill m-0">
                    <table className="table mb-0">
                      <thead className="bg-gray-200 font-semibold">
                        <tr>
                          <td className="ps-3">Job</td>
                          <td>Date Applied</td>
                          <td>Status</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.length > 0 ? (
                          jobs.map((job) => (
                            <tr key={job.id}>
                              <td>
                                <h2 className="table-avatar ps-3">
                                  <a href="#" className="avatar avatar-m me-2">
                                    <img
                                      className="avatar-img rounded"
                                      src="assets/img/services/service-06.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="#">
                                    <div className="flex gap-3">
                                      {job.title}
                                      <div className="bg-red-900 fw-light text-white text-xs px-2 rounded-3xl flex items-center">
                                        <p className="my-auto">
                                          {job.employment_type}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex gap-3">
                                      <span>
                                        <i className="feather-users"></i>{" "}
                                        {job.name}
                                      </span>
                                    </div>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h2>
                                  <span>
                                    {format(
                                      new Date(job.application_date),
                                      "MMM d, yyyy HH:mm"
                                    )}
                                  </span>
                                </h2>
                              </td>
                              <td>
                                <h2
                                  className={
                                    job.application_status === "Pending"
                                      ? "text-yellow-700"
                                      : job.application_status === "Accepted"
                                      ? "text-green-700"
                                      : "text-red-700"
                                  }
                                >
                                  {job.application_status}
                                </h2>
                              </td>
                              <td>
                                <Link
                                  to={`/jobs/${job.job_id}`}
                                  className="btn btn-primary"
                                >
                                  View Details
                                </Link>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="text-center">
                              No jobs applied for yet.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
