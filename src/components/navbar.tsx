import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
              <Link className="nav-link header-reg" to={"/choose-signup"}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to={"/login"}>
                <i className="fa-regular fa-circle-user me-2"></i>Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
