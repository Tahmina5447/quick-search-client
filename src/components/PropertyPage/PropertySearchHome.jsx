"use client";

import BdAddressSelectFilter from "@/shared/BdAddressSelectFilter";
import Residential from "@/shared/search/Residential";
import React, { useContext, useState } from "react";
import { ContextData } from "../../../context/dataProviderContext";
import RentBuyHome from "@/shared/search/RentBuyHome";
import Area from "@/shared/search/Area";
import PriceSearch from "@/shared/search/PriceSearch";

function PropertySearchHome() {
  const {
    setUpazilaFilter,
    divisionFilter,
    setDivisionFilter,
    setDistrictFilter,
    clearFilter,
    residentialTypeFilter,
    commercialTypeFilter,
    completionStatusForSell,
    bathroomFilter,
    bedroomFilter,
    upazilaFilter,
    districtFilter,
    propertyTypeFilter,
    rentFilter,
    priority,
    publishStatus,
    activeResidential, setActiveResidential,
    activeBuy, setActiveBuy
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
    <div className=" my-3 w-full mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full gap-3">
        <div className="w-full">
          <RentBuyHome
            activeBuy={activeBuy}
            setActiveBuy={setActiveBuy}
            data={data1}
          />
        </div>
        <BdAddressSelectFilter
          selectedDivision={divisionFilter}
          selectedDistrict={districtFilter}
          selectedUpazila={upazilaFilter}
          setSelectedDistrict={setDistrictFilter}
          setSelectedDivision={setDivisionFilter}
          setSelectedUpazila={setUpazilaFilter}
        />

        <div className="w-full">
          <Residential
            data1={data2}
            activeBuy={activeResidential}
            setActiveBuy={setActiveResidential}
          />
        </div>

        <div className="w-full">
            <PriceSearch />
        </div>


        <div className="w-full">
          <Area />
        </div>

        <div>
          <button
            onClick={() => {
              clearFilter();
              setActiveBuy("");
              setActiveResidential("");
            }}
            className={` w-full h-[43px] border hover:bg-error duration-300 rounded-md text-sm hover:text-white ${
              divisionFilter ||
              districtFilter ||
              upazilaFilter ||
              residentialTypeFilter ||
              commercialTypeFilter ||
              completionStatusForSell ||
              bathroomFilter ||
              bedroomFilter ||
              propertyTypeFilter ||
              rentFilter ||
              priority ||
              publishStatus
                ? " bg-red-500 text-white"
                : ""
            }`}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertySearchHome;
