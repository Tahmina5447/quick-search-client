import Image from "next/image";
import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { LiaBedSolid } from "react-icons/lia";
import { BiBath } from "react-icons/bi";
import { FiMinimize } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContextData } from "../../../context/dataProviderContext";
import WishlistInLocalStorage from "@/utils/WishlistInLocalStorage";

const PropertiesCard = ({ item }) => {
  const router = useRouter();
  const { wishlist, setWishlistUpdate } = useContext(ContextData);

  const addWishlist = (item) => {
    WishlistInLocalStorage(item);
    setWishlistUpdate(Math.random());
  };
  const isWishlist = Boolean(
    wishlist?.items?.find((ite) => ite?._id === item?._id)
  );

  return (
    <div className=" shadow hover:shadow-lg hover:shadow-blue-100 duration-200 border  rounded-md bg-white ">
      <div onClick={() => router.push(`/property/${item?._id}`)}>
        <Image
          src={item?.images?.[0]}
          width={500}
          height={500}
          alt="properties"
          className=" w-full h-[200px] cursor-pointer object-cover rounded-t-md"
        />
      </div>
      <div className="p-3 relative">
        <div className=" bg-primary absolute top-[-18px] text-xs left-[0px] px-4 text-white font-semibold p-2 rounded-r-full w-auto ">
          {item?.purpose === "sell" ? "For Sale" : "For Rent"}
        </div>
        <div className=" flex items-center justify-between mt-4">
          <h2 className=" text-2xl cursor-pointer font-bold ">
            ৳{item?.price}{" "}
            {item?.purpose === "rent" && (
              <span className=" font-medium text-[14px]">/month</span>
            )}
          </h2>
          <button
            onClick={() => addWishlist(item)}
            className={`w-[35px] h-[35px] rounded-full border border-gray-300 flex items-center justify-center ${
              isWishlist ? " bg-yellow-500 text-white" : "text-yellow-500"
            }`}
          >
            <CiHeart size={20} className=" " />
          </button>
        </div>
        <h2
          onClick={() => router.push(`/property/${item?._id}`)}
          className="font-semibold mt-2 "
        >
          {item?.title}{" "}
        </h2>
        <div className="flex gap-1 text-sm font-normal text-gray-500 mt-2 first-letter:uppercase">
          <p className="first-letter:uppercase"> {item?.propertyType},</p>
          <p className="first-letter:uppercase">{item?.residentialType}</p>
          <p className="first-letter:uppercase"> {item?.commercialType}</p>
        </div>
        <div className="flex gap-1 flex-wrap text-xs font-normal text-gray-400 mt-2 first-letter:uppercase md:h-6">
          <p className=" first-letter:uppercase"> {item?.address?.location},</p>
          <p className=" first-letter:uppercase"> {item?.address?.upazila},</p>
          <p className=" first-letter:uppercase"> {item?.address?.district},</p>
          <p className=" first-letter:uppercase"> {item?.address?.division} </p>
        </div>

        <div className=" mb-3">
          <div className=" border border-gray-200 mt-5 mb-4"></div>
          <div className=" flex items-center gap-3 justify-center">
            <div className=" flex items-center gap-1">
              <LiaBedSolid />
              <h3 className=" font-medium text-xs text-gray-500">
                {item?.features?.bedroom} Beds
              </h3>
            </div>
            <div className=" flex items-center gap-1">
              <BiBath />
              <h3 className=" font-medium text-xs text-gray-500">
                {item?.features?.bathroom} Bathroom
              </h3>
            </div>
            <div className=" flex items-center gap-1">
              <FiMinimize />
              <h3 className=" font-medium text-xs text-gray-500">
                {item?.area} sqft
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
