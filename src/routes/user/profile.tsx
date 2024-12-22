import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Profile() {
  return (
    <div className="main-wrapper">
      <Navbar></Navbar>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 theiaStickySidebar">
              <div className="settings-widget">
                <div className="settings-header">
                  <div className="settings-img">
                    <img src="assets/img/profiles/avatar-02.jpg" alt="user" />
                  </div>
                  <h6>John Smith</h6>
                  <p>Member Since Sep 2021</p>
                </div>
                <div className="settings-menu">
                  <ul>
                    <li>
                      <a href="customer-profile.html" className="active">
                        <i className="feather-settings"></i>{" "}
                        <span>Settings</span>
                      </a>
                      <ul className="setting-submenu">
                        <li>
                          <a href="customer-profile.html" className="active">
                            Account
                          </a>
                        </li>
                      </ul>
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
                <h4>Account Settings</h4>
              </div>
              <h6 className="user-title">Profile Picture</h6>
              <div className="pro-picture">
                <div className="pro-img">
                  <img src="assets/img/profiles/avatar-02.jpg" alt="user" />
                </div>
                <div className="pro-info">
                  <div className="d-flex">
                    <div className="img-upload">
                      <i className="feather-upload-cloud me-1"></i>Upload
                      <input type="file" />
                    </div>
                    <a href="#" className="btn btn-remove">
                      Remove
                    </a>
                  </div>
                  <p>
                    *image size should be at least 320px big,and less then
                    500kb. Allowed files .png and .jpg.
                  </p>
                </div>
              </div>
              <h6 className="user-title">General Information</h6>
              <div className="general-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your user name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Gender</label>
                      <select className="select">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Date of birth</label>
                      <div className="form-icon">
                        <input
                          type="text"
                          className="form-control datetimepicker"
                          placeholder="DD/MM/YYYY"
                        />
                        <span className="cus-icon">
                          <i className="feather-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="col-form-label d-block">
                        Your Bio{" "}
                        <span className="brief-bio float-end">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </span>
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Add a Short Bio....."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="acc-submit">
                <a href="#" className="btn btn-secondary">
                  Cancel
                </a>
                <a href="#" className="btn btn-primary">
                  Save Changes
                </a>
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
