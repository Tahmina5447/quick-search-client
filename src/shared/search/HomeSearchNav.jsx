"use client";

import React, { useContext, useState } from "react";
import { Popover } from "antd";
import RentBuy from "./RentBuy";
import Autocomplete from "../Input/Autocomplete";
import { FaLocationDot } from "react-icons/fa6";
import Residential from "./Residential";
import BedsBaths from "./BedsBaths";
import Area from "./Area";
import PriceSearch from "./PriceSearch";
import BdAddressSelectFilter from "../BdAddressSelectFilter";
import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";

function HomeSearchNav() {
  
  const router = useRouter();

  const {
    upazilaFilter,
    setUpazilaFilter,
    divisionFilter,
    setDivisionFilter,
    districtFilter,
    setDistrictFilter,
    clearFilter,
    activeResidential, setActiveResidential,activeBuy, setActiveBuy
  } = useContext(ContextData);

  const data1 = [
    {
      title: "buy",
    },
    {
      title: "rent",
    },
  ];

  const data2 = [
    {
      title: "residential",
    },
    {
      title: "commercial",
    },
  ];

  return (
    <div className="">
      <div>
        <div className=" flex items-center md:flex-row flex-col md:gap-4 gap-4">
          <RentBuy
            activeBuy={activeBuy}
            setActiveBuy={setActiveBuy}
            data={data1}
          />
          <BdAddressSelectFilter
            selectedDivision={divisionFilter}
            selectedDistrict={districtFilter}
            selectedUpazila={upazilaFilter}
            setSelectedDistrict={setDistrictFilter}
            setSelectedDivision={setDivisionFilter}
            setSelectedUpazila={setUpazilaFilter}
          />
        </div>
        <div className=" mt-5 flex items-center md:flex-row flex-col md:gap-5 gap-4">
          <Residential
            data1={data2}
            activeBuy={activeResidential}
            setActiveBuy={setActiveResidential}
          />
          <Area />
          <PriceSearch />
          <div className="flex w-full gap-3">
            <div
              onClick={() => {
                clearFilter();
                setActiveBuy("");
                setActiveResidential("");
              }}
              className="w-[50%] py-2 text-base  font-semibold border h-full flex justify-center items-center cursor-pointer text-white bg-error/80 duration-300 rounded-md"
            > 
                Clear Filter
            </div>
            <div className="w-[50%]">
              <button
                onClick={() => router.push("/property")}
                className=" w-full py-2 text-white bg-primary rounded-md  text-base  font-semibold border border-primary"
              >
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mt-2 flex items-center justify-end">
        <button
          onClick={() => {
            clearFilter();
            setActiveBuy(""); 
            setActiveResidential("");
          }}
          className=" "
        >
          Reset Search
        </button>
      </div> */}
    </div>
  );
}

export default HomeSearchNav;
