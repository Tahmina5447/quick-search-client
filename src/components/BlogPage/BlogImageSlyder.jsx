"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const BlogImageSlyder = ({blog}) => {

    const images = ["/assets/Apartment/house1.avif","/assets/Apartment/house1.avif"]


  return (
    <div className="">
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
        {images?.map((item, index) => (
          <div key={index} className="relative bg-black/15">
            <SwiperSlide
              className="cursor-pointer w-full h-full object-cover"
            >
              <img src={item} className="cursor-pointer" />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-md"></div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper> */}

      <Image 
        src={blog?.images}
        width={1000}
        height={500}
        alt="blog"
        className=" w-full md:h-[450px] object-cover rounded-md"
      />

    </div>
  );
};

export default BlogImageSlyder;
