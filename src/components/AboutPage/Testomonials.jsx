"use client";
import SectionHeading from '@/shared/SectionHeading';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import TestomonialCard from './TestomonialCard';



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
        <div className="py-16 md:py-20 ">
        <div className="max-container">
                   <SectionHeading title={"Testomonials"} subtitle={"Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust"}/>
                   <div className="mt-5 md:mt-10">
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
                  <SwiperSlide key={index} >
                    <TestomonialCard testomonial={testomonial}/>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
                 </div>
               </div>
              </div>
    );
};

export default Testomonials;