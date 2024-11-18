import React, { useState, useEffect } from "react";
import { bdDivisions, bdDistricts, upazilas } from "../utils/address";
import CityDropdown from "./CityDropdown";

const BdAddressSelectFilter = ({
  setSelectedDistrict,
  setSelectedDivision,
  setSelectedUpazila,
  selectedDivision,
  selectedDistrict,
  selectedUpazila,
}) => {
  const [resetUpazila, setResetUpazila] = useState(false);
  const handleDivisionChange = (e) => {
    const value = e === "Select Division" ? "" : e;
    setSelectedDivision(value);
    setSelectedDistrict("");
    setSelectedUpazila("");
    setResetUpazila(true);
  };

  const handleDistrictChange = (e) => {
    const value = e === "Select District" ? "" : e;
    setSelectedDistrict(value);
    setResetUpazila(false); // Allow upazila selection when district changes
  };

  const handleUpazilaChange = (e) => {
    const value = e === "Select Upazila" ? "" : e;
    setSelectedUpazila(value);
  };

  return (
    <>
      <div className=" w-full">
        <CityDropdown
          data={bdDivisions}
          handleDivisionChange={handleDivisionChange}
          selectedDivision={selectedDivision}
          title="Select Division"
          error=""
        />
      </div>

      <div className="w-full">
        <CityDropdown
          data={bdDistricts.filter(
            (district) => district.division_id === selectedDivision
          )}
          handleDivisionChange={handleDistrictChange}
          selectedDivision={selectedDistrict}
          title="Select District"
          error="Please Select Division"
        />
      </div>

      <div className="w-full">
        <CityDropdown
          data={
            resetUpazila
              ? null
              : upazilas.filter(
                  (upazila) => upazila.district_id === selectedDistrict
                )
          }
          handleDivisionChange={handleUpazilaChange}
          selectedDivision={selectedUpazila}
          title="Select Upazila"
          error="Please Select District"
        />
      </div>
    </>
  );
};

export default BdAddressSelectFilter;
