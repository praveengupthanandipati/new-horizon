import React from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const pageTitle = "Products";
  const pageIntro = "Our Popular Products";
  return (
    <div>
      <section className="subPage">
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 col-md-10">
                <h1 className="h1 font-bold">{pageTitle}</h1>
                <p>{pageIntro}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subPageMain">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb my-2">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div className="pageContainer">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
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
                <li class="nav-item" role="presentation">
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
                <li class="nav-item" role="presentation">
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
                  tabindex="0"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="85%">
                            <NavLink to="/Product-Detail">Pellitorine</NavLink>
                          </td>
                          <td width="15%">18836-52-7</td>
                        </tr>
                        <tr>
                          <td width="85%">
                            <NavLink to="">(S)-(+)-Turmerone,Ar</NavLink>
                          </td>
                          <td width="15%">532-65-0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-Lead-Phytochemicals"
                  role="tabpanel"
                  aria-labelledby="pills-Lead-Phytochemicals-tab"
                  tabindex="0"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="85%">
                            <NavLink to="">Pellitorine</NavLink>
                          </td>
                          <td width="15%">18836-52-7</td>
                        </tr>
                        <tr>
                          <td width="85%">
                            <NavLink to="">(S)-(+)-Turmerone,Ar</NavLink>
                          </td>
                          <td width="15%">532-65-0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* table resposive ends*/}
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-Synthetic-analogs-of-Lead"
                  role="tabpanel"
                  aria-labelledby="pills-Synthetic-analogs-of-Lead-tab"
                  tabindex="0"
                >
                  {/* table responsive starts here */}
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Chemical Name</th>
                          <th scope="col">CAS Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="85%">
                            <NavLink to="">Pellitorine</NavLink>
                          </td>
                          <td width="15%">18836-52-7</td>
                        </tr>
                        <tr>
                          <td width="85%">
                            <NavLink to="">(S)-(+)-Turmerone,Ar</NavLink>
                          </td>
                          <td width="15%">532-65-0</td>
                        </tr>
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
