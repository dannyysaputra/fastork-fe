import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { format } from "date-fns";

export default function CompanyDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [loading, setLoading] = useState(true);

  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get<Job[]>(
          `http://localhost:3000/jobs?token=${user.token}`,
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

  const calculateDaysRemaining = (expirationDate: string): string => {
    const today = new Date().getTime(); // Waktu sekarang dalam milidetik
    const targetDate = new Date(expirationDate).getTime(); // Waktu kedaluwarsa dalam milidetik

    const timeDifference = targetDate - today; // Selisih waktu dalam milidetik
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Konversi ke hari

    return daysRemaining > 0 ? `${daysRemaining} days remaining` : "Expired";
  };

  type Company = {
    id: number;
    name: string;
    email: string;
    phone_number: string;
  };

  interface Job {
    id: number;
    company_id: number;
    title: string;
    employment_type: string;
    status: string;
    total_applications: number;
    expiration_date: string;
    company: Company;
  }

  if (loading) return;
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
                  <i className="fa-regular fa-circle-user me-2"></i>Pt Maju Bersama
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
                      <Link to={"/company"} className="active">
                        <i className="feather-grid"></i> <span>Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <a href="customer-booking.html">
                        <i className="feather-user"></i>{" "}
                        <span>Company Profile</span>
                      </a>
                    </li>
                    <li>
                      <Link to={"/company/create-job"}>
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
                        <i className="feather-log-out"></i> <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-9">
              <div className="widget-title">
                <h4>Hai, PT Maju Bersama</h4>
              </div>
              <div>
                <p className="text-neutral-400 mb-3">
                  Here is your daily activities and applications
                </p>
              </div>

              <div className="row">
                <div className="w-1/3">
                  <div className="dash-widget h-28 bg-sky-200 bg-opacity-50">
                    <div className="grid grid-cols-4">
                      <div className="col-start-1 col-end-3 content-center">
                        <h2 className="font-semibold text-2xl">589</h2>
                        <p>Open Jobs</p>
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
                        <p>Candidates</p>
                      </div>
                      <div className="col-start-4">
                        <img src="assets/img/icons/icon-card-user.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="d-flex flex-column">
                  <div className="flex justify-between">
                    <h6 className="user-title">Recently Posted Jobs</h6>
                    <p>
                      View all <i className="feather-arrow-right"></i>
                    </p>
                  </div>
                  <div className="table-responsive recent-booking flex-fill m-0">
                    <table className="table mb-0">
                      <thead className="bg-gray-200 font-semibold">
                        <tr>
                          <td className="ps-3">Jobs</td>
                          <td>Status</td>
                          <td>Applications</td>
                          <td>Actions</td>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.length > 0 ? (
                          jobs.map((job) => (
                            <tr key={job.id}>
                              <td>
                                <h2 className="table-avatar ps-3">
                                  <a href="#">
                                    <div className="flex gap-3">
                                      {job.title}
                                    </div>
                                    <div className="flex gap-3">
                                      <span>{job.employment_type}</span>
                                      <span>&#x2022;</span>
                                      <span>
                                        {calculateDaysRemaining(
                                          job.expiration_date
                                        )}
                                      </span>
                                    </div>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h2
                                  className={
                                    job.status === "Pending"
                                      ? "text-yellow-700"
                                      : job.status === "Active"
                                      ? "text-green-700"
                                      : "text-red-700"
                                  }
                                >
                                  {job.status}
                                </h2>
                              </td>
                              <td>
                                <i className="feather-users me-2"></i>
                                <span>
                                  {job.total_applications} Application
                                </span>
                              </td>
                              <td>
                                <Link
                                  to={`/company/candidates/${job.id}`}
                                  className="btn btn-primary"
                                >
                                  View Applications
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
