"use client";

import React, { useState } from "react";
import { Popover } from "antd";

import { FaLocationDot } from "react-icons/fa6";
import RentBuy from "@/shared/search/RentBuy";
import Residential from "@/shared/search/Residential";
import BedsBaths from "@/shared/search/BedsBaths";
import PriceSearch from "@/shared/search/PriceSearch";
import MoreFilters from "@/shared/search/MoreFilters";

function MyPropertiesSearch() {
  const [activeBuy, setActiveBuy] = useState("Rent");
  const [activeResidential, setActiveResidential] = useState("Residential");

  const data1 = [
    {
      title: "Buy",
    },
    {
      title: "Rent",
    },
  ];

  const data2 = [
    {
      title: "Residential",
    },
    {
      title: "Commercial",
    },
  ];

  const content = <div className=" w-[195px] p-2"></div>;

  const countries = ["Dhaka", "Rangpur", "Kurigram"];

  return (
    <div className=" my-3 rounded-lg w-full mx-auto">
      <div className=" flex items-center bg-white shadow-sm p-5 rounded-lg flex-col gap-5">
        <div className=" flex w-full items-center md:flex-row flex-col md:gap-4 gap-4">
          <RentBuy
            activeBuy={activeBuy}
            setActiveBuy={setActiveBuy}
            data={data1}
          />

          <div className=" flex items-center md:w-[80%] w-full justify-between border border-gray-300 gap-1 bg-white rounded-lg ">
            <input
              type="text"
              placeholder="Enter Location"
              className=" py-2 px-5 bg-transparent w-full outline-none focus:outline-none text-gray-700"
            />{" "}
            <FaLocationDot className=" text-gray-700 mr-3" />
          </div>

          <Residential
            data1={data2}
            activeBuy={activeResidential}
            setActiveBuy={setActiveResidential}
          />
        </div>
        <div className=" w-full flex items-center md:flex-row flex-col md:gap-5 gap-4">
          <BedsBaths />
          <PriceSearch />
          <MoreFilters />
        </div>
      </div>
    </div>
  );
}

export default MyPropertiesSearch;
