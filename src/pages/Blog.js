import React from "react";
import { NavLink } from "react-router-dom";
import story01image from "../assets/img/story/storyimg01.jpg";
import story02image from "../assets/img/story/storyimg02.jpg";
import story03image from "../assets/img/story/storyimg03.jpg";
const Blog = () => {
  const pageTitle = "Blogs";
  const pageIntro =
    "Insights, Ideas, and Stories: Explore Our Diverse Blog Collection Today.";
  const storyItems = [
    {
      Image: story01image,
      ArticleBy: "Admin",
      Date: "13st November 2023",
      Title: "Unlocking Nature's Secrets: Innovations in Bioscience Research",
    },
    {
      Image: story02image,
      ArticleBy: "Admin",
      Date: "13st November 2023",
      Title:
        "Revolutionizing Healthcare: The Impact of Bioscience Breakthroughs",
    },
    {
      Image: story03image,
      ArticleBy: "Admin",
      Date: "13st November 2023",
      Title: "Behind the Lab Doors: A Glimpse into Our Bioscience Discoveries",
    },
  ];
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
          <section className="HomeStories">
            <div className="container">
              <div className="row">
                {storyItems.map((item) => (
                  <div className="col-md-4">
                    <div className="storyItem shadow">
                      <NavLink href="">
                        <img src={item.Image} alt="" className="img-fluid" />
                        <article className="p-3">
                          <p className="small d-flex justify-content-between">
                            <small>Article by {item.ArticleBy}</small>
                            <small>
                              <i>On: {item.Date} </i>
                            </small>
                          </p>
                          <h5 className="font-bold">{item.Title}</h5>
                        </article>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Blog;
