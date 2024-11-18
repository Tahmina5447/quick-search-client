"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import TestomonialCard from "../AboutPage/TestomonialCard";
const Testomonials = () => {
  const testomonialData = [
    {
      name: "Abdul Karim",
      id: 1,
      image: "/assets/user1.jpeg",
      position: "Fontend developer",
      company_name: "Abc Company",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
    {
      name: "Rahim Uddin",
      id: 2,
      image: "/assets/user2.jpeg",
      position: "UI Designer",
      company_name: "Def company",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
    {
      name: "Kalam khanom",
      id: 3,
      image: "/assets/user3.jpeg",
      position: "Backend developer",
      company_name: "Ghi company",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
    {
      name: "Bikash Roy",
      id: 4,
      image: "/assets/user4.jpeg",
      position: "Full stack developer",
      company_name: "Jkl company",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used",
    },
  ];
  return (
    <div className=" md:my-10 my-5">
      <div className="max-container">
        <div className=" text-center">
          <h2 className="md:text-4xl mt-3 text-4xl font-semibold text-center ">
            Customer Testomonials
          </h2>
        </div>

        <div className="">
          <p className="text-sm md:text-base text-center text-black/80 my-10 md:my-10">
            Here from some of our amazing customers who are building faster.
          </p>
          <div className="">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                "@.25": {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                "@.50": {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                "@1.00": {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                "@1.50": {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                "@1.75": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                "@2.25": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 8000 }}
              className=" px-20 mySwiper mySwiper_2"
            >
              {testomonialData?.map((testomonial, index) => (
                <div key={index} className="">
                  <SwiperSlide>
                  <TestomonialCard testomonial={testomonial}/>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonials;
