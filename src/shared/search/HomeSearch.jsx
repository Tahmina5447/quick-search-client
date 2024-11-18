"use client";

import React, { useContext, useState } from "react";
import RentBuy from "./RentBuy";
import Residential from "./Residential";
import BedsBaths from "./BedsBaths";
import Area from "./Area";
import PriceSearch from "./PriceSearch";
import BdAddressSelectFilter from "../BdAddressSelectFilter";
import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";
import RentBuyHome from "./RentBuyHome";

function HomeSearch() {
  const router = useRouter();

  const {
    upazilaFilter,
    setUpazilaFilter,
    divisionFilter,
    setDivisionFilter,
    districtFilter,
    setDistrictFilter,
    clearFilter,
    activeBuy,
    setActiveBuy,
    activeResidential,
    setActiveResidential,
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
    <div className=" bg-white p-5 rounded-lg md:w-[100%] w-full mx-auto pt-7 shadow-xl shadow-primary/10 ">
      {/* <h1 className="lg:text-[25px] mb-8 text-center md:text-[45px] sm:text-[35px] text-[20px] w-full font-bold text-white ">
        Search properties for Buy and rent in Bangladesh
      </h1> */}
      <div>
        <div className=" grid  grid-cols-4  items-center text-gray-700 md:flex-row flex-col md:gap-3 gap-1">
          <RentBuyHome
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

          <Residential
            data1={data2}
            activeBuy={activeResidential}
            setActiveBuy={setActiveResidential}
          />
          {/* <BedsBaths /> */}
          <Area />
          <PriceSearch />
          <button
            onClick={() => router.push("/property")}
            className=" py-2.5 text-white bg-primary rounded-md px-5 text-sm font-normal border border-primary"
          >
            Search Properties
          </button>
        </div>
        <div className="flex items-center  justify-end">
          <div className="text-xs mt-3  text-black font-semibold border px-3 py-1 hover:px-5 hover:bg-error cursor-pointer hover:text-white duration-300 rounded-md">
            <button
              onClick={() => {
                clearFilter();
                setActiveBuy("");
                setActiveResidential("");
              }}
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
