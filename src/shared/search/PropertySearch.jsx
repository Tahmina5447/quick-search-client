"use client";

import React, { useContext, useState } from "react";
import RentBuy from "./RentBuy";
import Residential from "./Residential";
import BdAddressSelectFilter from "../BdAddressSelectFilter";
import { ContextData } from "../../../context/dataProviderContext";
import Priority from "./Priority";
import Status from "./Status";

function PropertySearch() {
  const [activeBuy, setActiveBuy] = useState("");
  const [activeResidential, setActiveResidential] = useState("");
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
    publishStatus
  } = useContext(ContextData);

  const data1 = [
    {
      title: "sell",
      title2: "buy",
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
          <RentBuy
            activeBuy={activeBuy}
            setActiveBuy={setActiveBuy}
            data={data1}
          />
        </div>
        <div className="w-full">
          <Residential
            data1={data2}
            activeBuy={activeResidential}
            setActiveBuy={setActiveResidential}
          />
        </div>
        <div className="w-full">
          <Priority />
        </div>

        <div className="w-full">
          <Status />
        </div>
        <BdAddressSelectFilter
          selectedDivision={divisionFilter}
          selectedDistrict={districtFilter}
          selectedUpazila={upazilaFilter}
          setSelectedDistrict={setDistrictFilter}
          setSelectedDivision={setDivisionFilter}
          setSelectedUpazila={setUpazilaFilter}
        />
        {/* <div className="w-full">
          <Area />
        </div> */}

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
              bedroomFilter || propertyTypeFilter || rentFilter || priority || publishStatus
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

export default PropertySearch;
