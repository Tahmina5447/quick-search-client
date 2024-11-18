"use client";

import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import { ContextData } from "../../../context/dataProviderContext";
import WishlistInLocalStorage from "@/utils/WishlistInLocalStorage";

const PropertyDetailsTop = ({ data }) => {
  const { propertyType, purpose } = data || {};

  const { wishlist, setWishlistUpdate } = useContext(ContextData);
  const [copied, setCopied] = useState(false);

  const productUrl = `https://www.deshthikana.com/property/${data?._id}`;

  const handleCopyClick = (text) => {
    navigator.clipboard
      .writeText(productUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  const addWishlist = (item) => {
    WishlistInLocalStorage(item);
    setWishlistUpdate(Math.random());
  };
  const isWishlist = Boolean(
    wishlist?.items?.find((ite) => ite?._id === data?._id)
  );

  return (
    <div className="mt-[50px]">
      <div className=" max-container">
        <div className=" md:flex items-center gap-4 justify-between">
          <div className="md:w-[80%]">
            <div className=" flex items-center sm:gap-4 gap-3">
              <button className=" py-1 px-4 bg-primary md:text-sm text-xs text-white  rounded-md duration-200 ">
                {purpose === "sell" ? "For Sale" : "For Rent"}
              </button>
              <button className=" py-1 px-4 bg-primary md:text-sm text-xs text-white  rounded-md  duration-200 first-letter:uppercase">
                {propertyType}
              </button>
            </div>
            <h2 className=" md:text-4xl sm:text-3xl text-xl mt-3 font-semibold ">
              {data?.title}
            </h2>
            <div className=" flex items-center gap-2 mt-4">
              <FaLocationDot className=" text-gray-500" />
              <p className=" text-sm text-info font-normal">
                {data?.address?.location},{data?.address?.upazila},
                {data?.address?.district},{data?.address?.division}
              </p>
            </div>
          </div>

          <div className=" flex md:flex-col md:items-end items-center justify-between md:w-[20%] mt-5 md:mt-0">
            {/* <h3 className=' text-base text-primary'>$ 1,098 <span className=' text-sm'>/sq ft</span></h3> */}
            <h2 className="md:text-3xl text-xl md:mt-3 font-semibold text-primary">
              {" "}
              ৳{data?.price}
            </h2>
            <div className=" flex items-center gap-2 md:mt-4">
              <button onClick={()=>handleCopyClick()} className=" bg-white py-1 px-3 flex items-center text-sm font-semibold gap-2 hover:text-primary duration-200 rounded-md shadow-sm">
                <IoShareSocialSharp className=" text-gray-700" />{" "}
                {copied ? "Copied" : "Share"}
              </button>
              <button
                onClick={() => addWishlist(data)}
                className={` py-1 px-3 flex items-center text-sm font-semibold gap-2 hover:text-primary duration-200 rounded-md shadow-sm ${
                  isWishlist ? " bg-yellow-500 text-white" : " bg-white"
                }`}
              >
                <FaRegHeart className="" /> Favorite
              </button>
              {/* <button className=" bg-white py-1 px-3 flex items-center text-sm font-semibold gap-2 hover:text-primary duration-200 rounded-md shadow-sm">
                <FiPrinter className=" text-gray-700" /> Print
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsTop;
