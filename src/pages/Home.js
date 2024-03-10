import React from "react";
import HomeBanner from "../components/HomeBanner";
import AboutImage from "../assets/img/aboutimg.png";
import PhytochemicalReferenceStandardsimage from "../assets/img/Phytochemical-Reference-Standards-image.jpg";
import LeadPhytochemicalsimage from "../assets/img/Lead-Phytochemicals-image.jpg";
import SyntheticanalogsofLeadimage from "../assets/img/Synthetic-analogs-of-Lead-image.jpg";
import HomeProducts from "../components/HomeProducts";
import Whychooseusimg from "../assets/img/whychooseusimg.jpg";
import story01image from "../assets/img/story/storyimg01.jpg";
import story02image from "../assets/img/story/storyimg02.jpg";
import story03image from "../assets/img/story/storyimg03.jpg";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/scrollToTop";

function Home() {
  scrollToTop(); //page load move top
  let categoryTitleTop = "Categories";
  let categoryTitle = "Popular Categories";

  let productTitleTop = "Popular Products";
  let productTitle = "Products";

  let whychooseusTitleTop = "Why Chooseus";
  let whychooseusTitle = "Phytochem Experts: Choose Excellence";

  let storyTitleTop = "Our Stories";
  let storyTitle = "Blogs & Articles";

  const abouthighlet = [
    {
      title: "1992",
      desc: "Year of Establishment",
    },
    {
      title: "25+",
      desc: "Qualified Team",
    },
    {
      title: "40%",
      desc: "xport Percentage",
    },
  ];
  const categoryHomeItems = [
    {
      Image: PhytochemicalReferenceStandardsimage,
      Title: "Phytochemical Reference Standards",
      Desc: "Phytochemical reference standards are compounds used as benchmarks for identifying and quantifying bioactive",
    },
    {
      Image: LeadPhytochemicalsimage,
      Title: "Lead Phytochemicals",
      Desc: "Alkaloids, flavonoids, terpenoids, polyphenols, and saponins are prominent lead phytochemicals",
    },
    {
      Image: SyntheticanalogsofLeadimage,
      Title: "Synthetic analogs of lead phytochemicals",
      Desc: "Chemical derivatives mimicking lead compounds for pharmaceutical development and research purposes.",
    },
  ];

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
      <main>
        <HomeBanner />
        {/*Home Hightlets*/}
        <section className="highlets my-2 my-md-5 w-100 d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="highlets-col background-white shadow p-3 rounded d-flex w-100">
                  <div className="icon">
                    <span class="icon-award icomoon font-secondary"></span>
                  </div>
                  <div className="ps-3">
                    <h5 className="h5 font-bold font-black">
                      Certified Laboratory
                    </h5>
                    <p className="pb-0 mb-0">
                      Reliable testing, precise analysis, strict standards,
                      trusted results for businesses' quality assurance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="highlets-col background-white shadow p-3 rounded d-flex w-100">
                  <div className="icon">
                    <span class="icon-trophy icomoon font-secondary"></span>
                  </div>
                  <div className="ps-3">
                    <h5 className="h5 font-bold font-black">Best Lab Awards</h5>
                    <p className="pb-0 mb-0">
                      Celebrating excellence in bioscience innovation, research,
                      and advancement for a brighter future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="highlets-col background-white shadow p-3 rounded d-flex w-100">
                  <div className="icon">
                    <span class="icon-observation icomoon font-secondary"></span>
                  </div>
                  <div className="ps-3">
                    <h5 className="h5 font-bold font-black">
                      20 Years Experience
                    </h5>
                    <p className="pb-0 mb-0">
                      Two decades of excellence: Pioneering bioscience
                      breakthroughs for a healthier, more sustainable world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="Homeabout py-3 py-lg-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 align-self-center">
                <div className="sectionTitle pb-3">
                  <h6>Innovative Solutions</h6>
                  <h3 class="font-bold">
                    A RELIABLE COMPANY FOR RELIABLE PRODUCTS
                  </h3>
                </div>
                <p>
                  Plant based drugs are being increasingly used in recent times
                  all over the world. However their standardization has become a
                  matter of great concern in getting a wide acceptance for them.
                  The efficacy and safety of herbal drugs depend largely on
                  their authentication and quality. Thus effective methods of
                  standardization and quality control of the plant drugs as well
                  as these extracts are necessary.
                </p>
                <p>
                  As far as the plant raw materials are concerned, the
                  biological activity is due to the bioactive compounds present
                  in them, which makes the plant drugs therapeutically
                  potential.
                </p>
                <div>
                  <NavLink to="/About" className="green-btn">
                    Read More About us
                  </NavLink>
                </div>
                <div className="row company-highletscol d-none">
                  {abouthighlet.map((item) => (
                    <div className="col-4 border-end text-center">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="font-bold">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <figure className="aboutImage">
                  <img src={AboutImage} alt="" className="img-fluid" />
                  <div className="ExpNumber shadow">
                    <div className="num font-bold">20</div>
                    <p className="font-primary font-semibold">
                      <small>Years of Experience</small>
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Home page Categories */}
        <section className="HomeCategories">
          <div className="container">
            <div className="sectionTitle pb-3">
              <h6>{categoryTitleTop}</h6>
              <h3 class="font-bold">{categoryTitle}</h3>
            </div>
            <div className="row">
              {categoryHomeItems.map((item) => (
                <div className="col-lg-4">
                  <div className="cat-col">
                    <NavLink to="/Products">
                      <img
                        src={item.Image}
                        alt=""
                        className="img-fluid w-100"
                      />
                      <article className="p-3">
                        <h4 className="font-bold">{item.Title}</h4>
                        <p>{item.Desc}</p>
                      </article>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*Popular Products*/}
        <section className="HomeProducts">
          <div className="container">
            <div className="sectionTitle">
              <h6>{productTitleTop}</h6>
              <h3 class="font-bold">{productTitle}</h3>
            </div>
          </div>
          {/*products carousel */}
          <div className="products-carousel">
            <HomeProducts />
          </div>
        </section>
        {/*why choose us section */}
        <section className="homeWhyChooseus">
          <div className="container">
            <div className="sectionTitle">
              <h6>{whychooseusTitleTop}</h6>
              <h3 class="font-bold">{whychooseusTitle}</h3>
            </div>
            <div className="row py-2 py-md-5">
            <div className="col-md-6 d-none d-md-block">
                <img
                  src={Whychooseusimg}
                  alt=""
                  className="img-fluid whychooseusimg"
                />
              </div>    
              <div className="col-md-6 align-self-center">
                <div className="whycol d-flex">
                  <div>
                    <span class="icon-research icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Cutting-Edge Research
                    </h5>
                    <p>
                      Highlight your company's commitment to pioneering research
                      and groundbreaking discoveries in the field of bioscience.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div>
                    <span class="icon-costumer icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">Expert Team</h5>
                    <p>
                      Introduce the skilled and experienced team members who
                      drive your company's success.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div>
                    <span class="icon-observation icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      State-of-the-Art Facilities
                    </h5>
                    <p>
                      Showcase your top-tier laboratories, equipment, and
                      facilities. Explain how your cutting-edge infrastructure
                      supports.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div>
                    <span class="icon-conversation icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Industry Partnerships
                    </h5>
                    <p>
                      Highlight strategic collaborations and partnerships with
                      key players in the bioscience industry.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div>
                    <span class="icon-laboratory icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Commitment to Ethical Practices
                    </h5>
                    <p>
                      Emphasize your company's commitment to ethical research
                      practices, environmental sustainability, and social
                      responsibility.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div>
                    <span class="icon-goal icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Proven Track Record
                    </h5>
                    <p>
                      Provide evidence of successful outcomes, product
                      developments, or scientific contributions resulting from
                      your company's work. Share testimonials, case studies.
                    </p>
                  </div>
                </div>
              </div>
                       
            </div>
          </div>
        </section>

        {/* stories home page */}
        <section className="HomeStories d-none">
          <div className="container">
            <div className="sectionTitle pb-3">
              <h6>{storyTitleTop}</h6>
              <h3 class="font-bold">{storyTitle}</h3>
            </div>

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
      </main>
    </div>
  );
}

export default Home;
