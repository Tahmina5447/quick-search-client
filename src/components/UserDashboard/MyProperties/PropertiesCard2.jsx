import Image from "next/image";
import React, { useContext, useState } from "react";

import { LiaBedSolid } from "react-icons/lia";
import { BiBath, BiEdit } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { ContextData } from "../../../../context/dataProviderContext";
import WishlistInLocalStorage from "@/utils/WishlistInLocalStorage";



const PropertiesCard2 = ({ item }) => {
  const router = useRouter();
  const {setWishlistUpdate}=useContext(ContextData)

  const removeWishlist = (item)=>{
    WishlistInLocalStorage(item)
    setWishlistUpdate(Math.random())
  }


  return (
    <div className="shadow hover:shadow hover:shadow-blue-100 sm:gap-4  p-1 flex items-center md:flex-row flex-col duration-200 border rounded-md bg-white ">
      <div onClick={() => router.push(`/property/${item?._id}`)} className="relative md:w-[40%] w-full h-[200px] overflow-hidden border rounded-md">
        <Image
          src={item?.images?.[0]}
          width={800}
          height={800}
          alt="properties"
          className=" w-full cursor-pointer h-full object-cover rounded-md"
        />
        {/* <div className=" bg-[#3DA9FC] absolute top-[10px] text-xs left-[10px] px-4 text-white  p-2 rounded-md w-auto first-letter:uppercase">
          {item?.propertyType}
        </div> */}
      </div>
      <div className="p-3 md:w-[60%] w-full">
        <h2 onClick={() => router.push(`/property/${item?._id}`)} className="font-semibold hover:text-primary duration-300 cursor-pointer">{item.title} </h2>
        <p className=" text-xs font-normal text-gray-400 mt-2">
          {item?.address?.upazila}, {item?.address?.district},{" "}
          {item?.address?.division}
        </p>
        <div className=" flex items-center justify-between mt-2">
          <h2 className=" text-xl text-primary font-bold flex items-center">
            <span className="text-[17px]">{"৳"}</span>
            {item.price}
            {item?.purpose === "rent" && (
              <span className=" font-medium text-[14px] mt-2">/month</span>
            )}
          </h2>
          {/* <button className="w-[35px] h-[35px] rounded-full border border-gray-300 flex items-center justify-center">
            <CiHeart size={20} className=" text-primary" />
          </button> */}
        </div>
        <p className=" text-base font-normal text-gray-400 mt-2">{}</p>

        <div className="mt-3   gap-5 ">
          <div className=" flex items-center gap-3 justify-start">
            <div className=" flex items-center gap-1">
              <LiaBedSolid />
              <h3 className="  text-xs text-gray-500">
                {item?.features?.bedroom} Beds
              </h3>
            </div>
            <div className=" flex items-center gap-1">
              <BiBath />
              <h3 className=" text-xs text-gray-500">
                {item?.features?.bathroom} Bathroom
              </h3>
            </div>
            <div className=" flex items-center gap-1">
              <FiMinimize />
              <h3 className="  text-xs text-gray-500">{item?.area} sqft</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <button onClick={()=>removeWishlist(item)} className=" flex items-center text-sm rounded-md gap-2 py-2 px-4 hover:px-6 duration-300 bg-red-500/10 text-red-500">
            <RiDeleteBinLine /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard2;
