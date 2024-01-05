import React from "react";
import { NavLink } from "react-router-dom";
import Product02 from "../assets/img/products/product02.png";

const ProductDetail = () => {
  const pageTitle = "Pellitorine";
  return (
    <div>
      <section className="subPage">
        {/* sub page header starts */}
        <div className="subPageHeader">
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 col-md-10">
                <h1 className="h1 font-bold">{pageTitle}</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Sub page header ends */}
        {/*sub page main */}
        <div className="subPageMain">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb my-2">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  <NavLink to="/Products">Products</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div className="pageContainer">
              <div className="row">
                <div className="col-md-4">
                  <figure className="border p-3 rounded-3 text-center sticky-top">
                    <img src={Product02} className="img-fluid" />
                  </figure>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Botanical Source
                        </p>
                        <h6 className="h6">Piper longum</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          IUPAC Name
                        </p>
                        <h6 className="h6">
                          (2E,4E)-N-(2-Methylpropyl)-2,4-decadienamide
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Synonyms
                        </p>
                        <h6 className="h6">trans-Pellitorin</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          CAS Number
                        </p>
                        <h6 className="h6">
                          <strong>18836-52-7</strong>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Molecular Formula
                        </p>
                        <h6 className="h6">
                          C<sub>14</sub>H<sub>25</sub>NO
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Molecular weight
                        </p>
                        <h6 className="h6">223.35</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Appearance
                        </p>
                        <h6 className="h6">White powder</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Purity
                        </p>
                        <h6 className="h6">98%</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          HRMS(ESI)
                        </p>
                        <h6 className="h6">Not Available</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Specific Rotation [a]D 20
                        </p>
                        <h6 className="h6">Not Available</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          SMILES
                        </p>
                        <h6 className="h6">O=C(/C=C/C=C/CCCCC)NCC(C)C</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          InChI Key
                        </p>
                        <h6 className="h6">MAGQQZHFHJDIRE-BNFZFUHLSA-N</h6>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          InChI Code
                        </p>
                        <h6 className="h6">
                          InChI=1S/C14H25NO/c1-4-5-6-7-8-9-10-11-14(16)15-12-13(2)3/h8-11,13H,4-7,12H2,1-3H3,(H,15,16)/b9-8+,11-10+
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          PubChem CID
                        </p>
                        <h6 className="h6">5318516</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          MDL Number
                        </p>
                        <h6 className="h6">MFCD01735995</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-desc-item">
                        <p className="text-uppercase font-bold position-relative">
                          Inventory Status
                        </p>
                        <h6 className="h6">Available in milligrams</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*product enquiry form  */}
              <section className="ProductEnquiryform p-5 rounded-4 mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="h3 font-semibold">
                      Have a question on this product?
                    </h3>
                    <p>
                      <small className="font-gray">
                        FILL THE FORM, YOU’LL BE CONTACTED SHORTLY
                      </small>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Do not hesitate to contact our business representatives:
                      they'll be happy to get in touch with you. Just fill in
                      the following form.{" "}
                    </p>
                  </div>
                </div>
                <form className="pt-4">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Write your First name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Write your Last name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Designation</label>
                        <select className="form-select">
                          <option selected>Select Your Designation</option>
                          <option>Employee</option>
                          <option>Manager</option>
                          <option>Researcher</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Email ID</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Valid Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Valid Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Country Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 form-group">
                        <label class="form-label">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={pageTitle}
                          value={pageTitle}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3 form-group">
                        <label class="form-label">Describe your Enquiry</label>
                        <textarea
                          className="form-control"
                          placeholder="Describe  Your Enquiry"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="btn green-btn w-100">Submit</button>
                    </div>
                  </div>
                </form>
              </section>
              {/*product enquiry form ends */}
            </div>
          </div>
        </div>
        {/*sub page main ends */}
      </section>
    </div>
  );
};

export default ProductDetail;
