import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  const pageTitle = "Contact";
  const pageIntro = "Reach us";
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
              <div className="row">
                <div className="col-md-8">
                  <h2 className="h2 font-semibold font-black pb-3">
                    Send a Message
                  </h2>
                  <form className="contactForm">
                    <div className="row">
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Write Email"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone Number"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Company (Optional)"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-6 pb-3">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Subject"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-12 pb-3">
                        <textarea
                          className="form-control"
                          type="text"
                          placeholder="Subject"
                          aria-label="default input example"
                          style={{ height: "150px" }}
                        />
                      </div>
                    </div>
                    <button className="blue-btn border-0">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
