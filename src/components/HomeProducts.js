import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Product01 from "../assets/img/products/product01.png";
import Product02 from "../assets/img/products/product02.png";
import Product03 from "../assets/img/products/product03.png";
import Product04 from "../assets/img/products/product04.png";
import { NavLink } from "react-router-dom";

const HomeProducts = () => {
  const ProductsItems = [
    {
      id: 1,
      imgname: Product01,
      cas: "18836-52-7",
      title: "(2E,4E)-N-Isobutyl Decadienamide (Pellitorin)",
    },
    {
      id: 2,
      imgname: Product02,
      cas: "532-65-0",
      title: "(S)-(+)-Turmerone,Ar(Ar-Turmerone)",
    },
    {
      id: 3,
      imgname: Product03,
      cas: "17019-92-0",
      title: "11-Ketoβ boswellic acid (KBA)",
    },
    {
      id: 4,
      imgname: Product04,
      cas: "60124-17-6",
      title: "12-Deoxy withastramonolide 27-Hydroxywithanolide B)",
    },
    {
      id: 5,
      imgname: Product01,
      cas: "18836-52-7",
      title: "(2E,4E)-N-Isobutyl Decadienamide (Pellitorin)",
    },
    {
      id: 6,
      imgname: Product02,
      cas: "532-65-0",
      title: "(S)-(+)-Turmerone,Ar(Ar-Turmerone)",
    },
    {
      id: 7,
      imgname: Product03,
      cas: "17019-92-0",
      title: "11-Ketoβ boswellic acid (KBA)",
    },
    {
      id: 8,
      imgname: Product04,
      cas: "60124-17-6",
      title: "12-Deoxy withastramonolide 27-Hydroxywithanolide B)",
    },
  ];
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
          {ProductsItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="HomePorudctitem shadow">
                <figure>
                  <NavLink>
                    <img
                      src={item.imgname}
                      alt={item.title}
                      className="img-fluid w-100"
                    />
                  </NavLink>
                </figure>
                <article>
                  <NavLink>
                    <h6 className="text-center">CAS No:{item.cas}</h6>
                    <p className="text-center p-0 m-0">{item.title}</p>
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
