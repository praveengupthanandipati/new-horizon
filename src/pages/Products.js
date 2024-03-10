import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import phytochemicals from "../data/Phytochemicals_data";
import PhytochemicalsPdf from "../assets/files/Listofphytochemicalswithstructuresandactivity.pdf";
import scrollToTop from "../includes/scrollToTop";

function Products() {
  const pageTitle = "Products";
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
    (item) => item.type === "lead" || item.type === "lead_analogs"
  );
  const analogsItems = phytochemicals.filter(
    (item) => item.type === "analogs" || item.type === "lead_analogs"
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
                    Phytochemical Reference Standards
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
                    Lead Phytochemicals
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Synthetic-analogs-of-Lead-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Synthetic-analogs-of-Lead"
                    type="button"
                    role="tab"
                    aria-controls="pills-Synthetic-analogs-of-Lead"
                    aria-selected="false"
                  >
                    Synthetic analogs of Lead
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
                  <div className="row">
                    <div className="col-md-6">
                      <NavLink
                        className="green-btn"
                        to={PhytochemicalsPdf}
                        target="_blank"
                      >
                        List of Phytochemicals with structure activities
                      </NavLink>
                    </div>
                  </div>

                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {phytochemicals.map((item, index) => (
                          <tr key={index}>
                            <td width="65%">
                              <a
                                href=""
                                onClick={() => handleTabClick(item.id, "all")}
                              >
                                {item.Product}
                              </a>
                            </td>
                            <td width="35%">{item.CASNumber}</td>
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
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leadItems.map((item, index) => (
                          <tr key={index}>
                            <td width="85%">
                              <a
                                href=""
                                onClick={() => handleTabClick(item.id, "lead")}
                              >
                                {item.Product}
                              </a>
                            </td>
                            <td width="15%">{item.CASNumber}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Synthetic-analogs-of-Lead"
                  role="tabpanel"
                  aria-labelledby="pills-Synthetic-analogs-of-Lead-tab"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analogsItems.map((item, index) => (
                          <tr key={index}>
                            <td width="85%">
                              <a
                                href=""
                                onClick={() =>
                                  handleTabClick(item.id, "analog")
                                }
                              >
                                {item.Product}
                              </a>
                            </td>
                            <td width="15%">{item.CASNumber}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
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
