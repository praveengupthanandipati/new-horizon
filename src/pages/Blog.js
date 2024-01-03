import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const pageTitle = "Blogs";
  const pageIntro =
    "Insights, Ideas, and Stories: Explore Our Diverse Blog Collection Today.";
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
            <div className="pageContainer"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
