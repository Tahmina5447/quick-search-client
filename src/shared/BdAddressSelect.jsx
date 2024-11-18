import React, { useState, useEffect } from "react";
import { bdDivisions, bdDistricts, upazilas } from "../utils/address";
import { FaImage, FaRegAddressBook } from "react-icons/fa";
import { singleImageUploadupload } from "@/utils/hooks/singleImageUploader";

const BdAddressSelect = ({
  setSelectedDistrict,
  setSelectedDivision,
  setSelectedUpazila,
  selectedDivision,
  selectedDistrict,
  selectedUpazila,
  title = true,
  disabled,
  className,
  profileImage,
  setProfileImage,
}) => {
  const [resetUpazila, setResetUpazila] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const handleDivisionChange = (e) => {
    const value = e.target.value === "Select Division" ? "" : e.target.value;
    setSelectedDivision(value);
    setSelectedDistrict("");
    setSelectedUpazila("");
    setResetUpazila(true);
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value === "Select District" ? "" : e.target.value;
    setSelectedDistrict(value);
    setResetUpazila(false); // Allow upazila selection when district changes
  };

  const handleUpazilaChange = (e) => {
    const value = e.target.value === "Select Upazila" ? "" : e.target.value;
    setSelectedUpazila(value);
  };


  const handleImageUpload = async (e) => {
   singleImageUploadupload({imageFile:e.target.files[0],setImageUrl:setProfileImage,setImageUploading:setImageUploading})
  };
  return (
    <>
      <div className={`flex relative flex-col w-full ${className}`}>
        {title && (
          <label className="font-semibold text-sm" htmlFor="division">
            Division:
          </label>
        )}
        <select
          type="text"
          className="bg-[#edf5ec] pl-7 outline-none p-3 text-sm px-5 rounded-md flex-1 capitalize max-h-11"
          id="address-field"
          required={true}
          disabled={disabled}
          value={selectedDivision || "Select Division"}
          onChange={handleDivisionChange}
        >
          <option disabled value="">
            Select Division
          </option>
          {bdDivisions.map((division, index) => (
            <option key={index} value={division.name}>
              {division.name}-{division.bn_name}
            </option>
          ))}
        </select>
        <FaRegAddressBook className=" text-green-500 absolute top-[38px] left-2 text-[18px]" />
      </div>

      <div className={`flex relative flex-col w-full min-h-6 ${className}`}>
        {title && (
          <label className="font-semibold text-sm" htmlFor="district">
            District:
          </label>
        )}
        <select
          type="text"
          className="bg-[#edf5ec] outline-none text-sm py-3 pl-7 px-5 rounded-md flex-1 capitalize max-h-11"
          id="address-field"
          disabled={disabled}
          required={true}
          value={resetUpazila ? "" : selectedDistrict || "Select District"}
          onChange={handleDistrictChange}
        >
          <option disabled value="">
            Select District
          </option>
          {bdDistricts
            .filter((district) => district.division_id === selectedDivision)
            .map((district, index) => (
              <option key={index} value={district.name}>
                {district.name}-{district.bn_name}
              </option>
            ))}
        </select>
        <FaRegAddressBook className=" text-green-500 absolute top-[38px] left-2 text-[18px]" />
      </div>

      <div>
        <div className={`flex  relative w-full flex-col`}>
          {title && (
            <label className="font-semibold mb-1.5 text-sm" htmlFor="upazila">
              Upazila:
            </label>
          )}
          <select
            type="text"
            className="bg-[#edf5ec] outline-none pl-7 text-sm py-[11px] px-5 rounded-md flex-1 capitalize"
            id="upazila"
            disabled={disabled}
            required={true}
            value={resetUpazila ? "" : selectedUpazila || "Select Upazila"}
            onChange={handleUpazilaChange}
          >
            <option disabled value="">
              Select Upazila
            </option>
            {resetUpazila
              ? null
              : upazilas
                  .filter((upazila) => upazila.district_id === selectedDistrict)
                  .map((upazila, index) => (
                    <option key={index} value={upazila.name}>
                      {upazila.name}-{upazila.bn_name}
                    </option>
                  ))}
          </select>
          <FaRegAddressBook className=" text-green-500 absolute top-[38px] left-2 text-[18px]" />
        </div>
      </div>

      <div className="w-full ">
        <label htmlFor="" className=" text-sm mb-3 font-semibold">
          Profile Image
        </label>
        <div className=" bg-[#edf5ec] flex items-center gap-1 mt-1 px-2 rounded-md">
          <FaImage className=" text-green-500 text-[20px]" />
          <label
            htmlFor="profileImage"
            className="cursor-pointer text-sm text-gray-400 py-2.5"
          >
            {imageUploading ? "Uploading..." : "Add Profile Image"}
          </label>
          <input
            type="file"
            id="profileImage"
            onChange={handleImageUpload}
            className="hidden bg-transparent w-full text-sm  py-2 pr-3 outline-none"
          />
        </div>

        {profileImage && (
          <div className="  w-[50%] mx-auto h-[100px] p-1 bg-white shadow-md rounded-md mt-3 ">
            <img
              src={profileImage}
              // width="100"
              // height="60"
              alt="Profile Picture."
              className="w-full h-full object-contain "
            />
          </div>
        )}
      </div>
      
    </>
  );
};

export default BdAddressSelect;
