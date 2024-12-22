import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center w-100">
              <div className="col-lg-7 col-md-10 mx-auto">
                <div className="section-search aos" data-aos="fade-up">
                  <h2 className="text-center text-3xl">Mempermudah Pertemuan Perusahaan Dengan Calon Karyawan</h2>
                  <p className="text-center">Cepat, Singkat, Bermanfaat</p>
                </div>
                <div className="flex justify-center gap-3">
                  <div className="search-btn">
                        <Link to="/login">
                          <button className="btn btn-primary" type="submit">
                            <i className="feather-search me-2"></i>Mulai Mencari Calon Kandidat
                          </button>
                        </Link>
                  </div>
                  <br />
                  <br />
                  <div className="search-btn">
                        <Link to="/login">
                          <button className="btn btn-primary" type="submit">
                            <i className="feather-search me-2"></i>Mulai Mencari Lowongan Kerja
                          </button>
                        </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-imgs">
                  <div className="banner-1 shape-1">
                    <img
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/banner1.jpg"
                    />
                  </div>
                  <div className="banner-2 shape-3">
                    <img
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/banner2.jpg"
                    />
                  </div>
                  <div className="banner-3 shape-3">
                    <img
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/banner3.jpg"
                    />
                  </div>
                  <div className="banner-4 shape-2">
                    <img
                      className="img-responsive"
                      alt="banner"
                      src="assets/img/banner4.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Kategori</h2>
                <p>Cari pekerjaan sesuai dengan kategori yang Anda inginkan!</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <a href="#" className="btn btn-primary btn-view">
                  View All<i className="feather-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-01.svg" alt="img" />
                  </span>
                </div>
                <h5>Manufature</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-02.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-03.svg" alt="img" />
                  </span>
                </div>
                <h5>Electrical</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-01.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-05.svg" alt="img" />
                  </span>
                </div>
                <h5>Interior</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-07.jpg" alt="img" />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <img src="assets/img/icons/feature-icon-07.svg" alt="img" />
                  </span>
                </div>
                <h5>Computer</h5>
                <div className="feature-overlay">
                  <img src="assets/img/services/service-06.jpg" alt="img" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-heading aos" data-aos="fade-up">
                <h2>How It Works</h2>
                <p>Aliquam lorem ante, dapibus in, viverra quis</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <img src="assets/img/icons/work-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Choose What To Do</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>01</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <img src="assets/img/icons/find-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Find What You Want</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>02</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <img src="assets/img/icons/place-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Amazing Places</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>03</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div className="modal fade custom-modal" id="del-account">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 justify-content-between">
              <h5 className="modal-title">Delete Account</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x"></i>
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="write-review">
                <form action="login.html">
                  <p>
                    Are you sureyou want to delete This Account? To delete your
                    account, Type your password.
                  </p>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        placeholder="*************"
                      />
                      <span className="toggle-password feather-eye"></span>
                    </div>
                  </div>
                  <div className="modal-submit text-end">
                    <a
                      href="#"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </a>
                    <button type="submit" className="btn btn-danger">
                      Delete Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
