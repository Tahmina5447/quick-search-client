"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { ContextData } from "../../context/dataProviderContext";
const Footer = () => {
  const { filterData } = useContext(ContextData);

  return (
    <div className="bg-black">
      <div className="bg-white/20 w-full h-full py-10 md:py-14">
        <div className="max-container flex flex-col lg:flex-row gap-12 justify-between">
          {/* leatest properties---------------- */}
          <div className="">
            <div className="flex items-center gap-2 md:gap-3.5 mb-4 md:mb-6">
              <span className="w-1.5 md:w-3 h-2 md:h-2.5 bg-success"></span>
              <p className="text-white font-medium text-lg md:text-2xl ">
                Leatest Properties
              </p>
            </div>
            <div className="">
              {filterData?.data?.data?.slice(0, 2)?.map((data, index) => (
                <Link
                  href={`/property/${data?._id}`}
                  key={index}
                  className="flex gap-4 max-w-[300px] p-1.5 group hover:bg-white/10 duration-300"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      width={1000}
                      height={1000}
                      alt={"FeaturedCard"}
                      className="h-[60px] w-[80px] object-cover"
                      src={data?.images[0]}
                    />
                  </div>
                  <div className="">
                    <h1 className="text-sm font-medium mb-.5 duration-300 text-white">
                      {data?.title}
                    </h1>
                    <p className="text-[13px] font-medium text-success mt-1.5">
                      ৳ {data?.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* contact us----------------- */}
          <div className=" md:w-[30%] w-full">
            <div className="flex items-center gap-2 md:gap-3.5 mb-4 md:mb-6">
              <span className="w-1.5 md:w-3 h-2 md:h-2.5 bg-success"></span>
              <p className="text-white font-medium text-lg md:text-2xl ">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <IoMdCall className="text-white/20 text-2xl" />
                <p className="text-white text-base font-medium hover:text-success duration-300">
                  +8801772808071
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <MdOutlineMail className="text-white/20 text-2xl" />
                <p className="text-white text-sm font-medium hover:text-success duration-300">
                  info@deshthikana.com
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <MdLocationOn className="text-white/20 w-[50px] text-2xl" />
                <p className="text-white text-sm font-medium hover:text-success duration-300">
                  14/B,Level-3,BTI Primer Plaza, Plot-Cha 90/A Progoti Sarani,
                  North Badda, Dhaka-1212, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* newsletter signup---------------- */}
          <div className="">
            <div className="flex items-center gap-2 md:gap-3.5 mb-4 md:mb-6">
              <span className="w-1.5 md:w-3 h-2 md:h-2.5 bg-success"></span>
              <p className="text-white font-medium text-lg md:text-2xl ">
                Newsletter Signup
              </p>
            </div>
            <div className="">
              <p className="text-white/70 text-xs">
                Enter you email to get the latest new of Quick Search
              </p>
            </div>
            <div className="flex items-center mt-4 mb-6">
              <input
                type="text"
                placeholder="Your Email"
                className="text-sm bg-white/30  text-white py-[11px] px-3.5"
              />
              <button className="text-base font-semibold text-white bg-primary py-2.5 px-3.5 hover:bg-primary/80 duration-300">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex items-center gap-2.5  text-success">
              <Link className="hover:text-primary duration-300" href="#">
                <FaFacebook />
              </Link>
              <Link className="hover:text-primary duration-300" href="#">
                <FaXTwitter />
              </Link>
              <Link className="hover:text-primary duration-300" href="#">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
