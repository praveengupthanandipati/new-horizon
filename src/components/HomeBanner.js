import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Banner01 from "../assets/img/banner01.jpg";
import Banner02 from "../assets/img/banner02.jpg";
import Banner03 from "../assets/img/banner03.jpg";
import Banner04 from "../assets/img/banner04.jpg";

function HomeBanner() {
  const homeSliderItems = [
    {
      id: 1,
      imageName: Banner01,
      title: "Exploring the wonders of Phytochemicals ",
      description: "Embark on a fascinating journey into the heart of phytochemicals with our captivating exploration.",
    },
    {
      id: 2,
      imageName: Banner02,
      title: "Tiny Wonders: Microbes Explored",
      description:
        "Dive into the unseen world of microbes, shaping ecosystems, human health, and biotechnological frontiers.",
    },
    {
      id: 3,
      imageName: Banner03,
      title: "Bioengineering Frontiers",
      description:
        " Journey into bioengineering's frontier, merging science and innovation to reshape healthcare, create artificial organs, and enhance human capabilities.",
    },
    {
      id: 4,
      imageName: Banner04,
      title: "Eco Harmony: Biodiversity Explored",
      description:
        " Witness the delicate balance of ecosystems and biodiversity, shaping conservation efforts through bioscience research, safeguarding our planet's ecological harmony.",
    },
  ];
  return (
    <div>
      <div className="HomeSlider">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
        >
          {homeSliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bannerimage">
                <img
                  src={item.imageName}
                  alt=""
                  className="img-fluid bannerimg"
                />
              </div>
              <article>
                <div className="row">
                  <div className="col-md-8 col-sm-10">
                    <h2 className="font-bold font-white">{item.title}</h2>
                    <p className="font-white">{item.description}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeBanner;
