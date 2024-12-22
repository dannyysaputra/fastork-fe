import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function ChooseSignup() {
  return (
    <div className="login-body">
      <div className="main-wrapper">
        <Navbar></Navbar>

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
                    <h3>Daftar Akun</h3>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="choose-signup flex-fill">
                        <h6>Perusahaan</h6>
                        <div className="choose-img">
                          <img src="assets/img/provider.png" alt="" />
                        </div>
                        <Link
                          to={"/register-company"}
                          className="btn btn-secondary w-100"
                        >
                          Daftar
                          <i className="feather-arrow-right-circle ms-1"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="choose-signup flex-fill mb-0">
                        <h6>Pelamar</h6>
                        <div className="choose-img">
                          <img src="assets/img/user.png" alt="" />
                        </div>
                        <Link
                          to={"/register-user"}
                          className="btn btn-secondary w-100"
                        >
                          Daftar
                          <i className="feather-arrow-right-circle ms-1"></i>
                        </Link>
                      </div>
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
    </div>
  );
}
