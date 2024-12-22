import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useQuery } from "react-query";

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

function JobItem({ job }: { job: Job }) {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="service-widget servicecontent">
        <div className="service-img">
          <img
            className="img-fluid serv-img"
            alt="Service Image"
            src="assets/img/services/service-04.jpg"
          />
          <div className="item-info">
            <span className="item-img">
              <img
                src="assets/img/profiles/avatar-01.jpg"
                className="avatar"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="service-content">
          <h3 className="title">{job.title}</h3>
          <p>
            <i className="feather-users"></i>
            {job.company.name}
          </p>
          <div className="serv-info flex-row-reverse">
            <Link to={`/jobs/${job.id}`} className="btn btn-book">
              Lihat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobContent({ jobs }: { jobs: Job[] | undefined }) {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-12 theiaStickySidebar">
        <div className="filter-div">
          <div className="filter-head">
            <h5>Filter</h5>
            <a href="#" className="reset-link">
              Reset
            </a>
          </div>
          <div className="filter-content">
            <h2>Kata kunci</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Apa yang ingin Anda cari?"
            />
          </div>
          <div className="filter-content">
            <h2>
              Kategori{" "}
              <span>
                <i className="feather-chevron-down"></i>
              </span>
            </h2>
            <div className="filter-checkbox" id="fill-more">
              <ul>
                <li>
                  <label className="checkboxs">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                    <b className="check-content">Semua Kategori</b>
                  </label>
                </li>
                <li>
                  <label className="checkboxs">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                    <b className="check-content">Konstruksi</b>
                  </label>
                </li>
                <li>
                  <label className="checkboxs">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                    <b className="check-content">Admin & Perbankan</b>
                  </label>
                </li>
                <li>
                  <label className="checkboxs">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                    <b className="check-content">Multimedia</b>
                  </label>
                </li>
                <li>
                  <label className="checkboxs">
                    <input type="checkbox" />
                    <span>
                      <i></i>
                    </span>
                    <b className="check-content">Engineering</b>
                  </label>
                </li>
              </ul>
            </div>
            <a href="javascript:void(0);" id="more" className="more-view">
              Lihat selengkapnya{" "}
              <i className="feather-arrow-down-circle ms-1"></i>
            </a>
          </div>
          <div className="filter-content">
            <h2>Sub Kategori</h2>
            <select className="form-control select">
              <option>Semua Sub Kategori</option>
              <option>Computer</option>
              <option>Construction</option>
            </select>
          </div>
          <div className="filter-content">
            <h2>Lokasi</h2>
            <div className="group-img">
              <input
                type="text"
                className="form-control"
                placeholder="Pilih lokasi"
              />
              <i className="feather-map-pin"></i>
            </div>
          </div>
          <div className="filter-content">
            <h2 className="mb-4">Rentang Gaji</h2>
            <div className="filter-range">
              <input type="text" id="range_03" />
            </div>
            <div className="filter-range-amount">
              <h5>
                Gaji: <span>IDR 1,500,000 - IDR 4,000,000</span>
              </h5>
            </div>
          </div>
          <button className="btn btn-primary">Cari</button>
        </div>
      </div>
      <div className="col-lg-9 col-sm-12">
        <div className="row sorting-div">
          <div className="col-lg-4 col-sm-12 ">
            <div className="count-search">
              <h6>Ditemukan {jobs?.length} Loker dari Pencarian</h6>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
            <div className="sortbyset">
              <div className="sorting-select">
                <select className="form-control select">
                  {" "}
                  n<option>Terbaru</option>
                  <option>Terlama</option>
                </select>
              </div>
            </div>
            <div className="grid-listview">
              <ul>
                <li>
                  <a href="search.html" className="active">
                    <i className="feather-grid"></i>
                  </a>
                </li>
                <li>
                  <a href="search-list.html">
                    <i className="feather-list"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {jobs?.map((job) => (
            <JobItem job={job} />
          ))}
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="blog-pagination rev-page">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link page-prev" href="#">
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
                      NEXT <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Jobs() {
  const { isLoading, error, data } = useQuery("jobs", () =>
    fetch(`http://localhost:3000/all-jobs`).then(
      (res) => res.json() as Promise<Job[]>
    )
  );

  console.log(data);

  return (
    <div className="main-wrapper">
      <Navbar />

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
              <h2 className="breadcrumb-title">Cari Lowongan Pekerjaan</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cari loker
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          {isLoading ? (
            <div className="d-flex w-full justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {error ? (
                <p>Terjadi kesalahan harap coba lagi</p>
              ) : (
                <JobContent jobs={data} />
              )}
            </>
          )}
        </div>
      </div>

      <Footer />

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
