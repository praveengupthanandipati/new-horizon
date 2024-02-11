import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Product01 from "../assets/img/products/product01.png";
import Product02 from "../assets/img/products/product02.png";
import Product03 from "../assets/img/products/product03.png";
import Product04 from "../assets/img/products/product04.png";
import { NavLink, useNavigate } from "react-router-dom";
import phytochemicals from "../data/Phytochemicals_data";

const HomeProducts = () => {
  const navigate = useNavigate();
  const handleTabClick = (id, type) => {
    scrollToTop()
    localStorage.setItem("id", id);
    navigate(`/Product-Detail?q=${id}&type=${type}`);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const homeProducts = phytochemicals.slice(0, 20);
  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper px-3"
        >
          {homeProducts.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="HomePorudctitem shadow"
                onClick={() => handleTabClick(item.id, "all")}
              >
                <figure>
                  <NavLink>
                    <img
                      src={item.Image}
                      alt={item.Product}
                      className="img-fluid w-100"
                    />
                  </NavLink>
                </figure>
                <article>
                  <NavLink>
                    <h6 className="text-center">CAS No:{item.CASNumber}</h6>
                    <p className="text-center p-0 m-0">{item.Product}</p>
                  </NavLink>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProducts;
