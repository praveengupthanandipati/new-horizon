import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import phytochemicals from "../data/Phytochemicals_data";
import PhytochemicalsPdf from "../assets/files/Listofphytochemicalswithstructuresandactivity.pdf";
import FurutreProductsPdf from "../assets/files/future-products.pdf";
import scrollToTop from "../includes/scrollToTop";

function Products() {
  const pageTitle = "Biologically Active Phytochemicals";
  const pageIntro = "Our Popular Products";
  const navigate = useNavigate();
  scrollToTop();

  //on click on product redirecting to poroduct detail  based on ID ID
  const handleTabClick = (id, type) => {
    localStorage.setItem("id", id);
    scrollToTop(0, 0);
    navigate(`/Product-Detail?q=${id}&type=${type}`);
  };

  const leadItems = phytochemicals.filter(
    (item) => item.type === "lead" || item.type === "Not Available"
  );
  const analogsItems = phytochemicals.filter(
    (item) => item.type === "analogs" || item.type === "Available"
  );

  return (
    <div>
      <section className="subPage">
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-2 pt-md-5">
              <div className="col-lg-6 col-md-10">
                <h1 className="h1 font-bold">{pageTitle}</h1>
                <p className="d-none d-md-block">{pageIntro}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subPageMain">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb my-2">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>

          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6 text-end">
                <NavLink
                  className="green-btn"
                  to={PhytochemicalsPdf}
                  target="_blank"
                >
                  List of Phytochemicals with structure activities
                </NavLink>
              </div>
            </div>
            <div className="pageContainer">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-Phytochemical-Reference-Standards-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Phytochemical-Reference-Standards"
                    type="button"
                    role="tab"
                    aria-controls="pills-Phytochemical-Reference-Standards"
                    aria-selected="true"
                  >
                    In Stock
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Lead-Phytochemicals-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Lead-Phytochemicals"
                    type="button"
                    role="tab"
                    aria-controls="pills-Lead-Phytochemicals"
                    aria-selected="false"
                  >
                    Future Products
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-Phytochemical-Reference-Standards"
                  role="tabpanel"
                  aria-labelledby="pills-Phytochemical-Reference-Standards-tab"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Name of the Phytochemical</th>
                          <th scope="col">Botanical Source</th>
                          <th scope="col">CAS Number</th>
                          <th scope="col">Functional Activity</th>
                          <th scope="col">Analogues</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phytochemicals.map((item, index) => (
                          <tr key={index}>
                            <td width="30%">
                              <a
                                href=""
                                onClick={() => handleTabClick(item.id, "all")}
                              >
                                {item.Product}
                              </a>
                            </td>
                            <td width="15%">{item.BotanicalSource}</td>
                            <td width="15%">{item.CASNumber}</td>
                            <td width="15%">{""}</td>
                            <td width="15%">{item.Analogues}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Lead-Phytochemicals"
                  role="tabpanel"
                  aria-labelledby="pills-Lead-Phytochemicals-tab"
                >
                  <NavLink
                    className="green-btn"
                    to={FurutreProductsPdf}
                    target="_blank"
                  >
                    Download Future Products
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
