import Navbar from "../../components/navbar";

export default function CompanyApplicant() {
  return (
    <div className="main-wrapper">
      <Navbar></Navbar>

      <div className="bg-img">
        <img src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
        <img src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
        <img
          src="assets/img/bg/feature-bg-03.png"
          alt="img"
          className="bgimg3"
        />
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Applicant</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12 theiaStickySidebar">
              <div className="filter-div">
                <div className="filter-head">
                  <h5>Filter by</h5>
                  <a href="#" className="reset-link">
                    Reset Filters
                  </a>
                </div>
                <div className="filter-content">
                  <h2>Keyword</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                </div>

                <button className="btn btn-primary">Search</button>
              </div>
            </div>

            <div className="col-lg-9 col-sm-12">
              <div className="row sorting-div mb-2">
                <div className="col-lg-4 col-sm-12 ">
                  <div className="count-search">
                    <h6>Found 6 Services</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
                  <button className="btn btn-primary">Smart Filter</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="service-list">
                    <div className="service-cont">
                      <div className="service-cont-img">
                        <a href="service-details.html">
                          <img
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-04.jpg"
                          />
                        </a>
                      </div>
                      <div className="service-cont-info">
                        <span className="item-cat">67% Match</span>
                        <h3 className="title">
                          <a href="service-details.html">Muhammad David</a>
                        </h3>
                        <p>
                          <i className="feather-map-pin"></i>Bandung, Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="service-action">
                      <a href="booking.html" className="btn btn-secondary">
                        Download CV
                      </a>
                    </div>
                  </div>

                  <div className="service-list">
                    <div className="service-cont">
                      <div className="service-cont-img">
                        <a href="service-details.html">
                          <img
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-02.jpg"
                          />
                        </a>
                        <div className="fav-item">
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <span className="item-cat">Construction</span>
                        <h3 className="title">
                          <a href="service-details.html">
                            Toughened Glass Fitting Services
                          </a>
                        </h3>
                        <p>
                          <i className="feather-map-pin"></i>New Jersey, USA
                        </p>
                        <div className="service-pro-img">
                          <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                          <span>
                            <i className="fas fa-star filled"></i>4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="service-action">
                      <h6>
                        $30.00<span className="old-price">$35.00</span>
                      </h6>
                      <a href="booking.html" className="btn btn-secondary">
                        Book Now
                      </a>
                    </div>
                  </div>

                  <div className="service-list">
                    <div className="service-cont">
                      <div className="service-cont-img">
                        <a href="service-details.html">
                          <img
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-06.jpg"
                          />
                        </a>
                        <div className="fav-item">
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <span className="item-cat">Computer</span>
                        <h3 className="title">
                          <a href="service-details.html">
                            Computer & Server AMC Service
                          </a>
                        </h3>
                        <p>
                          <i className="feather-map-pin"></i>California, USA
                        </p>
                        <div className="service-pro-img">
                          <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                          <span>
                            <i className="fas fa-star filled"></i>4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="service-action">
                      <h6>
                        $30.00<span className="old-price">$35.00</span>
                      </h6>
                      <a href="booking.html" className="btn btn-secondary">
                        Book Now
                      </a>
                    </div>
                  </div>

                  <div className="service-list">
                    <div className="service-cont">
                      <div className="service-cont-img">
                        <a href="service-details.html">
                          <img
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-07.jpg"
                          />
                        </a>
                        <div className="fav-item">
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <span className="item-cat">Interior</span>
                        <h3 className="title">
                          <a href="service-details.html">Interior Designing</a>
                        </h3>
                        <p>
                          <i className="feather-map-pin"></i>Maryland, USA
                        </p>
                        <div className="service-pro-img">
                          <img src="assets/img/profiles/avatar-06.jpg" alt="" />
                          <span>
                            <i className="fas fa-star filled"></i>4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="service-action">
                      <h6>
                        $15.00<span className="old-price">$25.00</span>
                      </h6>
                      <a href="booking.html" className="btn btn-secondary">
                        Book Now
                      </a>
                    </div>
                  </div>

                  <div className="service-list">
                    <div className="service-cont">
                      <div className="service-cont-img">
                        <a href="service-details.html">
                          <img
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-09.jpg"
                          />
                        </a>
                        <div className="fav-item">
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <span className="item-cat">Cleaning</span>
                        <h3 className="title">
                          <a href="service-details.html">
                            House Cleaning Services
                          </a>
                        </h3>
                        <p>
                          <i className="feather-map-pin"></i>Georgia
                        </p>
                        <div className="service-pro-img">
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                          <span>
                            <i className="fas fa-star filled"></i>4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="service-action">
                      <h6>
                        $55.00<span className="old-price">$60.00</span>
                      </h6>
                      <a href="booking.html" className="btn btn-secondary">
                        Book Now
                      </a>
                    </div>
                  </div>

                  <div className="service-list">
                    <div className="service-cont">
                      <div className="service-cont-img">
                        <a href="service-details.html">
                          <img
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-10.jpg"
                          />
                        </a>
                        <div className="fav-item">
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <span className="item-cat">Construction</span>
                        <h3 className="title">
                          <a href="service-details.html">
                            Building Construction Services
                          </a>
                        </h3>
                        <p>
                          <i className="feather-map-pin"></i>Montana, USA
                        </p>
                        <div className="service-pro-img">
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                          <span>
                            <i className="fas fa-star filled"></i>4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="service-action">
                      <h6>
                        $45.00<span className="old-price">$50.00</span>
                      </h6>
                      <a href="booking.html" className="btn btn-secondary">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="blog-pagination rev-page">
                    <nav>
                      <ul className="pagination justify-content-center mt-0">
                        <li className="page-item disabled">
                          <a
                            className="page-link page-prev"
                            href="#"
                            tabIndex={-1}
                          >
                            <i className="fa-solid fa-arrow-left me-1"></i> PREV
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link page-next" href="#">
                            NEXT{" "}
                            <i className="fa-solid fa-arrow-right ms-1"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright &copy; 2024. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms-condition.html">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
