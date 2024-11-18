"use client";

import BdAddressSelect2 from "@/shared/BdAddressSelect2";
import CustomInput from "@/shared/Input/CustomInput";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { USER_URL } from "../../../../apis/url";
import axios from "axios";
import Image from "next/image";
import BreakCame from "@/shared/BreakCame";
import PhoneModal from "@/shared/Modal/PhoneModal";
import { userPatch } from "../../../../apis/user.api";
import { toast } from "react-toastify";
import CustomInputDisable from "@/shared/Input/CustomInputDisable";

function ViewProfile({
  currentlyLoggedIn,
  setUpdate,
  token,
  name,
  title,
  type,
  data,
}) {
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [resetUpazila, setResetUpazila] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [nidUp, setNidUp] = useState();
  const [nidDone, setNidDone] = useState();
  const [error, setError] = useState("");
  const [sucess, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (currentlyLoggedIn) {
      setValue("name", currentlyLoggedIn?.name);
      setValue("email", currentlyLoggedIn?.email);
      setValue("phoneNumber", currentlyLoggedIn?.phoneNumber);
      setValue("wpNumber", currentlyLoggedIn?.wpNumber);
      setValue("fathersName", currentlyLoggedIn?.fathersName);
      setValue("address", currentlyLoggedIn?.address);
      setDivision(currentlyLoggedIn?.division);
      setDistrict(currentlyLoggedIn?.district);
      setUpazila(currentlyLoggedIn?.upazila);
      setProfileImage(currentlyLoggedIn?.profileImgURL);
      setNidDone(currentlyLoggedIn?.nidBackImg);
      setNidUp(currentlyLoggedIn?.nidFrontImg);
    }
  }, [currentlyLoggedIn]);

  const onSubmit = async (values) => {
    // setLoading(true);
    // const body = {
    //   name: values?.name,
    //   email: values?.email,
    //   wpNumber: values?.wpNumber,
    //   fathersName: values?.fathersName,
    //   address: values?.address,
    //   division,
    //   district,
    //   upazila,
    //   profileImgURL: profileImage,
    //   nidFrontImg: nidUp,
    //   nidBackImg: nidDone,
    // };

    // const res = await userPatch(body, currentlyLoggedIn?._id, token);

    // if (res.statusCode === 200) {
    //   setUpdate(Math.random());
    //   setLoading(false);
    //   toast.success("Profile Update Successful...");
    // } else {
    //   setLoading(false);
    //   toast.error("Please try again!");
    // }
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
        setNidUp(result.data?.url);
      });
  };

  const handleImageUpload2 = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setNidDone(result.data?.url);
      });
  };

  return (
    <div>
      <div>
        <h3 className=" text-[17px] font-medium">Welcome, {name}</h3>
        <h2 className=" text-[25px] font-semibold">{title}</h2>
        <BreakCame type={type} data={data} />
      </div>

      <div className=" mt-8">
        <div className=" bg-white shadow-md rounded-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
            <div className=" flex items-center gap-5 md:flex-row flex-col">
              <CustomInputDisable
                label={"Full Name"}
                type={"text"}
                register={register("name", {
                  required: {
                    value: true,
                    message: "Please enter Name",
                  },
                })}
                error={errors.name}
                placeholder={"Enter full name"}
              />
              <CustomInputDisable
                label={"Email"}
                type={"email"}
                register={register("email", {
                  required: {
                    value: true,
                    message: "Please enter Name",
                  },
                })}
                error={errors.email}
                placeholder={"Enter Email"}
              />
            </div>

            <div className=" flex items-center gap-5 md:flex-row flex-col mt-2 mb-5">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm  text-dark-gray"
                >
                  Phone Number
                </label>
                <input
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  type={"text"}
                  placeholder={"Add Phone Number"}
                  disabled={true}
                  id="otp"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Please add Phone Number",
                    },
                  })}
                />
                {/* <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className=" text-xs rounded p-1 mt-1 bg-primary text-white"
                >
                  Change Phone Number
                </button> */}
              </div>

              <CustomInputDisable
                label={"Whatsapp Number"}
                type={"tel"}
                register={register("wpNumber", {
                  required: {
                    value: true,
                    message: "Please Whatsapp Number",
                  },
                })}
                error={errors.wpNumber}
                placeholder={"Enter Whatsapp Number"}
              />
            </div>

            <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
              <CustomInputDisable
                label={"Father Name"}
                type={"tel"}
                register={register("fathersName", {
                  required: {
                    value: true,
                    message: "Please add Father Name",
                  },
                })}
                error={errors.fathersName}
                placeholder={"Enter Father Name"}
              />
              <CustomInputDisable
                label={"Address"}
                type={"tel"}
                register={register("address", {
                  required: {
                    value: true,
                    message: "Please add address",
                  },
                })}
                error={errors.wpNumber}
                placeholder={"Enter Address"}
              />
            </div>

            

            <div>
              <BdAddressSelect2
                selectedDivision={division}
                selectedDistrict={district}
                selectedUpazila={upazila}
                setSelectedDistrict={setDistrict}
                setSelectedDivision={setDivision}
                setSelectedUpazila={setUpazila}
                disabled={true}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
                className={"flex flex-col gap-1"}
              />
            </div>

            {currentlyLoggedIn?.isVerified === "false"}
            {
              <div className=" flex items-start flex-col md:flex-row gap-5 mt-5">
                <div className="w-full ">
                  <label htmlFor="" className=" text-sm mb-1.5 font-normal">
                    NID Front Image
                  </label>
                  <input
                    type="file"
                    placeholder="Password"
                    disabled={true}
                    onChange={handleImageUpload}
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  />

                  {nidUp && (
                    <div className="  w-[100%] h-[200px] p-1 bg-white shadow-md rounded-md mt-3 ">
                      <Image
                        src={nidUp}
                        width="100"
                        height="60"
                        alt="category image"
                        className="w-full h-full object-contain "
                      />
                    </div>
                  )}
                </div>

                <div className="w-full ">
                  <label htmlFor="" className=" text-sm mb-1.5 font-normal">
                    NID Back Image
                  </label>
                  <input
                    type="file"
                    disabled={true}
                    placeholder="Password"
                    onChange={handleImageUpload2}
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  />

                  {nidDone && (
                    <div className="  w-[100%] h-[200px] p-1 bg-white shadow-md rounded-md mt-3 ">
                      <Image
                        src={nidDone}
                        width="100"
                        height="60"
                        alt="category image"
                        className="w-full h-full object-contain "
                      />
                    </div>
                  )}
                </div>
              </div>
            }

            {/* <div className=" mt-6">
              <div className="">
                {error && (
                  <span className=" text-red-500 text-center text-sm mb-2 font-semibold">
                    {error ? error : ""}
                  </span>
                )}
                {sucess && (
                  <p className=" bg-green-500 w-full text-white rounded-md py-1 px-3 text-start text-sm mb-4 font-semibold">
                    {sucess ? sucess : ""}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
              >
                {loading ? "Loading..." : "Update"}
              </button>
            </div> */}
          </form>
        </div>
      </div>

      <PhoneModal modalOPen={modalOpen} setModalOpen={setModalOpen} setUpdate={setUpdate} />
    </div>
  );
}

export default ViewProfile;
