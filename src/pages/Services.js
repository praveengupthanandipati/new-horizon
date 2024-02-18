import React from "react";
import { NavLink } from "react-router-dom";
import about02 from "../assets/img/about-bg-05.jpg";

function Services() {
  const pageTitle = "Services";
  const pageIntro =
    "Focused services tailored to meet your needs and exceed expectations.";
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
            <div className="row pt-2 pt-md-5">
              <div className="col-md-6 order-lg-last">
                <img src={about02} alt="" className="img-fluid w-100 mb-4" />
              </div>
              <div className="col-md-6 align-self-center">
                <h2 className="h2 font-semibold font-black pb-2">
                  Phytochemical libraries
                </h2>
                <p>
                  Phytochemical libraries refer to curated collections of
                  chemical compounds derived from plants. These libraries play a
                  crucial role in pharmaceutical, agricultural, and biochemical
                  research, providing a diverse range of natural compounds for
                  various applications.
                </p>
                <p>
                  Phytochemical libraries are extensive collections of naturally
                  occurring chemical compounds derived from plants. These
                  libraries serve as invaluable resources for researchers across
                  various scientific disciplines, including pharmacology,
                  agriculture, and biochemistry. The compounds found within
                  phytochemical libraries are diverse and represent the rich
                  chemical tapestry inherent in the plant kingdom.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h5 className="font-bold font-primary">Advantages:</h5>
                <ul className="list-items pt-2">
                  <li>
                    <strong>Targeted Drug Discovery:</strong> Researchers can
                    systematically screen phytochemical libraries to identify
                    compounds with specific biological activities, expediting
                    targeted drug discovery.
                  </li>
                  <li>
                    <strong>Complementary Therapies:</strong> The compounds
                    within these libraries may offer complementary therapeutic
                    options, potentially minimizing side effects associated with
                    synthetic drugs.
                  </li>
                  <li>
                    <strong>Biodiversity Conservation:</strong> By highlighting
                    the chemical diversity present in different plant species,
                    phytochemical libraries contribute to the appreciation and
                    conservation of global biodiversity.
                  </li>
                  <li>
                    <strong>Functional Genomics:</strong> Integration with
                    genomics data allows for a better understanding of the
                    biosynthetic pathways responsible for producing these
                    compounds, advancing our knowledge in functional genomics.
                  </li>
                  <li>
                    <strong>Precision Agriculture:</strong> Phytochemical
                    libraries support precision agriculture by aiding in the
                    development of plant varieties with enhanced resistance to
                    pests and diseases.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-6">
                <img src={about02} alt="" className="img-fluid w-100 mb-4" />
              </div>
              <div className="col-md-6 align-self-center">
                <h2 className="h2 font-bold font-black pb-2">
                  Technical services
                </h2>
                <p>
                  In the dynamic landscape of bioscience, technical services
                  play a pivotal role in driving innovation, fostering
                  breakthroughs, and ensuring the seamless operation of
                  companies dedicated to advancing life sciences. These services
                  encompass a wide array of specialized support that ranges from
                  laboratory assistance to cutting-edge technological solutions.
                  Let's delve into the significance of technical services in
                  bioscience companies and how they contribute to the forefront
                  of scientific discovery.
                </p>
                <p>
                  Phytochemical libraries are extensive collections of naturally
                  occurring chemical compounds derived from plants.
                  Phytochemical libraries are extensive collections of naturally
                  occurring chemical compounds derived from plants.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="list-items pt-2">
                  <li>
                    <strong>Laboratory Expertise:</strong> Technical services
                    provide essential support in laboratories, ensuring that
                    equipment is calibrated, experiments are conducted
                    efficiently, and data is accurately collected. This
                    expertise is the backbone of research endeavors, allowing
                    scientists to focus on their core work without concerns
                    about technical intricacies.
                  </li>
                  <li>
                    <strong>Instrumentation and Technology Management:</strong>{" "}
                    In the fast-evolving field of bioscience, staying at the
                    forefront of technology is imperative. Technical services
                    handle the management and maintenance of sophisticated
                    instruments, such as DNA sequencers and mass spectrometers,
                    guaranteeing that researchers have access to
                    state-of-the-art tools for their investigations.
                  </li>
                  <li>
                    <strong>Quality Assurance and Compliance:</strong> The rigor
                    of bioscience research demands strict adherence to quality
                    standards and regulatory compliance. Technical services play
                    a crucial role in implementing and monitoring these
                    standards, ensuring that experiments meet ethical guidelines
                    and industry regulations.
                  </li>
                  <li>
                    <strong> Data Management and Analysis:</strong> In the era
                    of big data, efficient management and analysis of vast
                    datasets are paramount. Technical services support
                    bioscience companies by implementing robust data management
                    systems and providing expertise in data analysis, enabling
                    scientists to derive meaningful insights from complex
                    information.
                  </li>
                  <li>
                    <strong>Troubleshooting and Support:</strong> Bioscience
                    research is inherently exploratory and, at times,
                    unpredictable. Technical services offer rapid
                    troubleshooting and support, addressing unforeseen
                    challenges in real-time. This flexibility is instrumental in
                    maintaining the momentum of research projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
