"use client";

import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaImage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

function ImageSlyder({data}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = data?.images

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        showNextImage();
      }, 2000); // 3 seconds interval

      return () => clearInterval(interval); // Clear interval on cleanup
    }
  }, [isOpen, currentIndex]);

  return (
    <div className="relative bg-white p-5 rounded-md shadow-md">
      <div className="md:w-[92%] w-[70%] absolute top-[35px] flex items-center justify-between z-10 left-[40px]">
        <div className="flex items-center gap-3">
          <button  onClick={() => handleImageClick(0)} className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-primary">
            <FaImage className="text-white" />
          </button>
          <Link href={"#map"} className="w-[40px] h-[40px] rounded-md flex items-center justify-center bg-black/70">
            <FaLocationDot className="text-white" />
          </Link>
        </div>
        {/* <div>
          <button className="py-1 px-3 rounded-md flex items-center justify-center text-white bg-primary">
            open house
          </button>
        </div> */}
      </div>
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation,Thumbs]}
          className="mySwiper2"
        >
          {images?.map((item, index) => (
            <div key={index} className="relative bg-black/15">
              <SwiperSlide className="cursor-pointer" onClick={() => handleImageClick(index)}>
                <img
                  src={item}
                  className="cursor-pointer"
                  
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-md"></div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper3"
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ">
          
          <div className="relative h-[80vh] w-full my-auto">
          {/* <Swiper
              initialSlide={currentIndex}
              navigation={true}
              
          modules={[ Navigation]}
              // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              className="mySwiperModal"
            >
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} className="w-[80%] h-[80vh] my-auto mx-auto object-cover" />
                </SwiperSlide>
              ))}
            </Swiper> */}
          <img onClick={showPrevImage} src={images[currentIndex]} className="w-[80%] h-[80vh] my-auto mx-auto object-cover" />
            <button
              onClick={closeModal}
              className="absolute -top-[40px] right-4 text-white bg-black rounded-full px-3 py-1"
            >
              &times;
            </button>
            <button
            disabled={currentIndex===0}
              onClick={showPrevImage}
              className={`${currentIndex===0?"bg-black/30 text-white/30":"text-white bg-black"} absolute left-2 top-1/2 transform -translate-y-1/2  rounded-full p-2`}
            >
              &#8592;
            </button>
            <button
             disabled={currentIndex===images?.length-1}
              onClick={showNextImage}
              className={`${currentIndex===images?.length-1?"bg-black/30 text-white/30":"text-white bg-black"} absolute right-2 top-1/2 transform -translate-y-1/2  rounded-full p-2`}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageSlyder;
