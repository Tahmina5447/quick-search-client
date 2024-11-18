"use client";

import React, { useRef, useState } from "react";
import { Button, Drawer } from "antd";
import banner from "../../../public/assets/building2.avif";
import banner2 from "../../../public/assets/333.avif";
import banner3 from "../../../public/assets/444.avif";
import banner5 from "../../../public/assets/555.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import {
  ArrowRightOutlined,
  CaretDownOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import HomeSearch from "@/shared/search/HomeSearch";
import HomeSearchNav from "@/shared/search/HomeSearchNav";
import { TbFilter } from "react-icons/tb";

const Banner = () => {
  const swiperRef = useRef(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative">
      <div>
        <div className="relative">

          <div className="absolute top-10 md:top-0 h-full w-full text-white z-40 flex justify-center items-center ">
            <div className="max-container w-full">
              <h1 className="text-center xl:text-[45px] sm:text-[35px] text-[28px] w-full font-bold text-white ">
                Search properties for Buy and Rent in Bangladesh
              </h1>
              <p className="text-center text-[15px] mt-5 md:w-[70%] mx-auto">
                Find your dream home from our properties in Dhaka, Chittagong, Sylhet, Khulna, Rajshahi, Barishal, Rangpur, Mymensingh and other cities in Bangladesh.
              </p>



              <div className=" flex items-center justify-center">
                <button
                  onClick={() => toggleDrawer()}
                  className=" md:hidden border mt-5 flex items-center gap-2 border-gray-300 rounded-md py-2 hover:bg-primary hover:text-white duration-300 px-5 text-sm font-semibold"
                >
                  Browse Properties <TbFilter />
                </button>
              </div>
            </div>
          </div>

          <div className="h-[70vh]">
            <Swiper
              // pagination={true}
              modules={[Pagination, Navigation, Autoplay]}
              navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }} // This connects your custom buttons
              className="mySwiper"
              ref={swiperRef}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className=" h-[70vh] w-full overflow-hidden z-10">
                  <Image
                    src={banner}
                    alt="Banner"
                    className="h-full w-full object-cover"
                    height={800}
                    width={1000}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 "></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" h-[70vh] w-full overflow-hidden z-10">
                  <Image
                    src={banner2}
                    alt="Banner"
                    className="h-full w-full object-cover"
                    height={800}
                    width={1000}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 "></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" h-[70vh] w-full overflow-hidden z-10">
                  <Image
                    src={banner3}
                    alt="Banner"
                    className="h-full w-full object-cover"
                    height={800}
                    width={1000}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 "></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" h-[70vh] w-full overflow-hidden z-10">
                  <Image
                    src={banner5}
                    alt="Banner"
                    className="h-full w-full object-cover"
                    height={800}
                    width={1000}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 "></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Drawer
            title="Filter Properties"
            placement="right"
            closable={true}
            onClose={toggleDrawer}
            open={drawerVisible}
          >
            <div className="p-5">
              <HomeSearchNav />
            </div>
          </Drawer>
        </div>
      </div>

      <div className=" absolute mt-[-90px] z-40 flex justify-center w-full">
        <div className="max-container hidden md:block lg:mt-44 w-full ">
          <HomeSearch />
        </div>
      </div>
    </div>
  );
};

export default Banner;
