import React, { useState, useEffect } from "react";
import { bdDivisions, bdDistricts, upazilas } from "../utils/address";
import { FaRegAddressBook } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import Image from "next/image";

const BdAddressSelect2 = ({
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
  register
}) => {
  const [resetUpazila, setResetUpazila] = useState(false);

  // useEffect(() => {
  //   // Reset district and upazila selection when division changes
  //   if (!selectedDistrict) {
  //     setSelectedDistrict("");
  //     setResetUpazila(true);
  //   } else {
  //     setResetUpazila(false);
  //   }
  //   if (!selectedUpazila) {
  //     setSelectedUpazila("");
  //     setResetUpazila(true);
  //   } else {
  //     setResetUpazila(false);
  //   }
  // }, [
  //   selectedDivision,
  //   setSelectedDistrict,
  //   setSelectedUpazila,
  //   selectedDistrict,
  //   selectedUpazila,
  // ]);

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

  const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`;
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setProfileImage(result.data?.url);
      });
  };

  return (
    <>
      <div className=" mt-5 flex items-center md:flex-row flex-col gap-5">
        <div className={`flex relative flex-col w-full ${className}`}>
          {title && (
            <label className=" mb-1.5 font-normal text-sm" htmlFor="division">
              Division:
            </label>
          )}
          <select
            type="text"
            className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
            id="address-field"
            disabled={disabled}
            value={selectedDivision || "Select Division"}
            onChange={handleDivisionChange}
          >
            <option value="">Select Division</option>
            {bdDivisions.map((division) => (
              <option key={division.id} value={division.name}>
                {division.name}-{division.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className={`flex relative flex-col w-full min-h-6 ${className}`}>
          {title && (
            <label className="mb-1.5 font-normal text-sm" htmlFor="district">
              District:
            </label>
          )}
          <select
            type="text"
            className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
            id="address-field"
            disabled={disabled}
            value={resetUpazila ? "" : selectedDistrict || "Select District"}
            onChange={handleDistrictChange}
          >
            <option value="">Select District</option>
            {bdDistricts
              .filter((district) => district.division_id === selectedDivision)
              .map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}-{district.bn_name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className=" flex items-start md:flex-row flex-col gap-5 w-full mt-5">
        <div className={`flex  relative w-full flex-col`}>
          {title && (
            <label className=" font-normal text-sm" htmlFor="upazila">
              Upazila:
            </label>
          )}
          <select
            type="text"
            className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
            id="upazila"
            disabled={disabled}
            value={resetUpazila ? "" : selectedUpazila || "Select Upazila"}
            onChange={handleUpazilaChange}
          >
            <option value="">Select Upazila</option>
            {resetUpazila
              ? null
              : upazilas
                  .filter((upazila) => upazila.district_id === selectedDistrict)
                  .map((upazila) => (
                    <option key={upazila.id} value={upazila.name}>
                      {upazila.name}-{upazila.bn_name}
                    </option>
                  ))}
          </select>
        </div>

        <div className="w-full ">
          <label htmlFor="" className="mb-1.5 font-normal text-sm">
            Profile Image
          </label>
            <input
              type="file"
              placeholder="Password"
              disabled={disabled}
              onChange={handleImageUpload}
              className=" py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
            />
          {profileImage && (
            <div className="  w-[70px] h-auto p-1 bg-white shadow-md rounded-md mt-3 ">
              <Image
                src={profileImage}
                width="100"
                height="60"
                alt="category image"
                className="w-full h-full object-contain "
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BdAddressSelect2;
