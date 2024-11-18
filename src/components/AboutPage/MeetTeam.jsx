"use client";
import SectionHeading from "@/shared/SectionHeading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const MeetTeam = () => {
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
    <div className="py-16 md:py-20 bg-gray-100">
      <div className="max-container">
        <SectionHeading
          title={"Meet our team"}
          subtitle={
            "If you want the best care possible for your real estate needs, our certified professionals are here to help"
          }
        />
        <div className="mt-5 md:mt-10">
          <Swiper
            slidesPerView={3}
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
            className="mySwiper mySwiper_2"
          >
            <div >
              {testomonialData?.map((testomonial, index) => (
                <div key={index} className="">
                  <SwiperSlide key={index} >
                    <div >
                      <div className="rounded p-2 bg-white shadow-md group ">
                        {/* <p className="text-sm md:text-base text-center font-semibold text-black ">
                        {`"${testomonial?.comment}"`}
                      </p> */}
                        <div className="overflow-hidden">
                          <Image
                            src={testomonial?.image}
                            alt="Customer"
                            className="h-[250px] rounded object-cover mx-auto w-full group-hover:scale-105 duration-500 "
                            height={700}
                            width={1000}
                          />
                        </div>
                        <div className="px-2  my-4">
                          <p className=" text-base md:text-lg font-medium text-[#222222]">
                            {testomonial?.name}
                          </p>
                          <p className=" text-xs md:text-sm mt-0.5 text-[#7a7a7a]">
                            {testomonial?.position}
                          </p>
                          <p className="text-xs md:text-sm my-2.5 text-[#7a7a7a]">
                            {testomonial?.comment?.slice(0, 80)}...
                          </p>
                          <div className="flex items-center gap-2 pt-2 text-sm text-[#7a7a7a] hover-text-primary duration-300">
                            <FaFacebook />
                            <FaInstagram />
                            <FaXTwitter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
