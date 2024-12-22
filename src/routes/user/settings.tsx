import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

export default function Settings() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [cv, setCv] = useState<File | null>(null);
  const [resumeFileName, setResumeFileName] = useState(null);

  const userDataString = localStorage.getItem("user");
  const user = userDataString ? JSON.parse(userDataString) : null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCv(e.target.files[0]);
    }
  };

  const fetchResume = async () => {
    try {
      const response = await fetch(`http://localhost:3000/resume/${user.id}`);
      if (response.ok) {
        const data = await response.json();
        setResumeFileName(data.file_name);
      } else {
        console.error("Resume not found");
        setResumeFileName(null);
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
    }
  };

  // Fetch resume saat komponen dimuat
  useEffect(() => {
    fetchResume();
  }, [user.id]);
  console.log(user.id);

  const uploadCvToAPI = async () => {
    if (!cv) {
      alert("Please select a CV file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", cv);

    const url = `http://localhost:3000/upload-resume?token=${encodeURIComponent(
      user.token
    )}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail}`);
        return;
      }

      const result = await response.json();
      console.log("Upload success:", result);
      alert(result.message);
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("An error occurred while uploading the CV.");
    }
  };

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
                      <Link to={"/applicant"}>
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
                      <Link to={"/applicant/settings"} className="active">
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
                <h4>Settings</h4>
              </div>
              <div className="flex">
                <div className="flex items-center gap-3 mx-4">
                  <i className="feather-user text-red-700 text-3xl"></i>
                  <h4 className="fw-semibold text-red-700">Personal</h4>
                </div>
                <div className="flex items-center gap-3 mx-4">
                  <i className="feather-users text-3xl"></i>
                  <h4 className="fw-semibold">Profile</h4>
                </div>
              </div>
              <div className="border mt-1 mb-5"></div>
              <div className="max-w-4xl mx-auto p-4 bg-white">
                {/* Basic Information */}
                <h2 className="text-lg font-semibold mb-4">
                  Basic Information
                </h2>
                <div className="grid grid-cols-3 gap-6">
                  {/* Profile Picture */}
                  <div className="col-span-1">
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6">
                      <input
                        type="file"
                        accept="image/*"
                        id="photo"
                        className="hidden"
                        onChange={handlePhotoUpload}
                      />
                      <label
                        htmlFor="photo"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        {photo ? (
                          <img
                            src={URL.createObjectURL(photo)}
                            alt="Uploaded"
                            className="w-32 h-32 rounded-full object-cover mb-2"
                          />
                        ) : (
                          <div className="text-gray-500 text-center">
                            <svg
                              className="w-12 h-12 mx-auto mb-2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3 16v4a1 1 0 001 1h16a1 1 0 001-1v-4"></path>
                              <path d="M16 11l-4-4-4 4"></path>
                              <path d="M12 3v12"></path>
                            </svg>
                            <p className="font-semibold">
                              Browse photo or drop here
                            </p>
                            <p className="text-xs text-gray-400">
                              A photo larger than 400 pixels works best. Max
                              size 5 MB.
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      placeholder="Title/headline"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Experience</option>
                      <option value="junior">Junior</option>
                      <option value="mid">Mid-Level</option>
                      <option value="senior">Senior</option>
                    </select>
                    <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                      <option value="">Educations</option>
                      <option value="highschool">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                    </select>
                    <input
                      type="url"
                      placeholder="Website url..."
                      className="w-full border col-span-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Save Changes */}
                <div className="mt-6">
                  <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
                    Save Changes
                  </button>
                </div>

                {/* Your CV/Resume */}
                <h3 className="text-lg font-semibold mt-8 mb-4">
                  Your Cv/Resume
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <input
                    type="file"
                    accept="application/pdf"
                    id="cv"
                    className="hidden"
                    onChange={handleCvUpload}
                  />
                  <label
                    htmlFor="cv"
                    className="cursor-pointer text-red-600 font-semibold flex flex-col items-center"
                  >
                    <svg
                      className="w-12 h-12 mb-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 16v4a1 1 0 001 1h16a1 1 0 001-1v-4"></path>
                      <path d="M16 11l-4-4-4 4"></path>
                      <path d="M12 3v12"></path>
                    </svg>
                    Add CV/Resume
                    <p className="text-xs text-gray-400">
                      Browse file or drop here. Only PDF
                    </p>
                  </label>
                  {/* Tampilkan nama file yang baru diupload */}
                  {cv && (
                    <p className="mt-2 text-sm text-gray-600">{cv.name}</p>
                  )}
                  {/* Tampilkan nama file dari API */}
                  {resumeFileName && (
                    <p className="mt-2 text-sm text-gray-600">
                      Uploaded: {resumeFileName}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    onClick={uploadCvToAPI}
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Upload CV
                  </button>
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
