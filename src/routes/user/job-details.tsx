/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "axios";

export default function JobDetails() {
  const { jobId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [job, setJob] = useState<Job | null>(null);

  const [message, setMessage] = useState("");

  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;

  useEffect(() => {
    // Fetch job details from the API
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setJob(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:3000/apply-jobs/${jobId}?token=${user.token}`,
        {
          headers: {
            accept: `application/json`,
          },
        }
      );
      setMessage(`Application submitted!`);
    } catch (error: any) {
      setMessage(
        `Error: ${error.response?.data?.detail || "Something went wrong"}`
      );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  const {
    title,
    description,
    experience_level,
    education_level,
    career_level,
    employment_type,
  } = job;

  type Company = {
    id: number;
    name: string;
    email: string;
    phone_number: string;
  };

  type Job = {
    id: number;
    company_id: number;
    category_id: number;
    title: string;
    description: string;
    experience_level: string;
    education_level: string;
    career_level: string;
    employment_type: string;
    company: Company;
  };

  return (
    <div className="main-wrapper">
      <Navbar></Navbar>

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="breadcrumb-title mb-0">{title}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="provider-info">
                <h2>{title}</h2>
                <h5>{job.company.name}</h5>
                <p>{description}</p>
                <div className="row">
                  <h4>Persyaratan</h4>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-mail"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Experience Level</h6>
                        <p>{experience_level}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-phone"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Education Level</h6>
                        <p>{education_level}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-book-open"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Career Level</h6>
                        <p>{career_level}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="provide-box">
                      <span>
                        <i className="feather-briefcase"></i>
                      </span>
                      <div className="provide-info">
                        <h6>Employment Type</h6>
                        <p>{employment_type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="provider-details">
                <h5>Company Details</h5>
                <p>
                  <strong>Email:</strong> {job.company.email}
                  <br />
                  <strong>Phone:</strong> {job.company.phone_number}
                </p>
              </div>

              <div className="contact-queries">
                <h2>Lamar dengan mudah</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
                {message && <p>{message}</p>}
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
