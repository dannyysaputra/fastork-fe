import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { format } from "date-fns";

export default function Candidates() {
  const { jobId } = useParams();
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const [loadingCandidates, setLoadingCandidates] = useState(true);

  useEffect(() => {
    if (!jobId) return;

    const fetchCandidates = async () => {
      try {
        const response = await axios.get<Candidate[]>(
          `http://localhost:3000/job-candidate/${jobId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      } finally {
        setLoadingCandidates(false);
      }
    };

    fetchCandidates();
  }, [jobId]);

  console.log(candidates);

  interface Candidate {
    id: number;
    applicant_id: number;
    job_id: number;
    similarity_score: number;
    applicant_name: string;
  }

  if (loadingCandidates) return <div>Loading...</div>;
  return (
    <div className="main-wrapper">
      <Navbar></Navbar>

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
              <div className="row">
                <div className="d-flex flex-column">
                  <div className="flex justify-between">
                    <h6 className="user-title">Candidates</h6>
                  </div>
                  <div className="table-responsive recent-booking flex-fill m-0">
                    <table className="table mb-0">
                      <tbody>
                        {candidates.length > 0 ? (
                          candidates.map((candidate) => (
                            <tr key={candidate.id}>
                              <td>
                                <h2 className="table-avatar ps-3">
                                  <a href="#" className="avatar avatar-m me-2">
                                    <img
                                      className="avatar-img rounded"
                                      src="/assets/img/services/service-06.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <a href="#">
                                    <div className="flex gap-3">
                                      {candidate.applicant_name}
                                    </div>
                                    <div className="flex gap-3">
                                      <span>
                                        <i className="feather-percent"></i>{" "}
                                        {candidate.similarity_score}
                                      </span>
                                    </div>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <div className="flex justify-end">
                                  <Link
                                    to={`/candidates/${candidate.id}`}
                                    className="btn btn-primary"
                                  >
                                    View Applications
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="text-center">
                              No candidates applied for yet.
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
