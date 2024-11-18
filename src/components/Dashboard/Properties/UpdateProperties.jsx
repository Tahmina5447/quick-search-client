"use client";

import BdAddressSelect3 from "@/shared/BdAddressSelect3";
import CustomInput from "@/shared/Input/CustomInput";
import DropImageCom from "@/shared/Input/DropImageCom";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ContextData } from "../../../../context/dataProviderContext";
import { PROPERTY_URL } from "../../../../apis/url";
import BreakCame from "@/shared/BreakCame";
import { propertyPatch } from "../../../../apis/properties.api";
import { toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import CustomInputPhone from "@/shared/Input/CustomInputPhone";

function UpdateProperties({ id, type, data, user }) {
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [resetUpazila, setResetUpazila] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [propertyType, setPropertyType] = useState("residential");
  const [residentialTypeActive, setResidentialTypeActive] =
    useState("apartment");
  const [imageUploadErrorMessage, setImageUploadErrorMessage] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [rent, setRent] = useState("sell");
  const [loading, setLoading] = useState(false);
  const { currentlyLoggedIn, token } = useContext(ContextData);
  const [commercialTypeActive, setCommercialTypeActive] = useState("office");
  const [propertiesData, setPropertiesData] = useState(null);
  const [messageShow, setMessageShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${PROPERTY_URL}/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setPropertiesData(data?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  const residentialType = [
    "apartment",
    "house",
    "plot",
    "sublet",
    "duplex",
    "penthouse",
    "studio",
    "room",
    "hostel",
    "garage",
    "farmhouse",
    "condo",
    "bungalow",
    "building",
    "villa",
    "plaza",
    "other",
  ];

  const commercialType = [
    "office",
    "shop",
    "showroom",
    "restaurant",
    "warehouse",
    "factory",
    "land",
    "building",
    "apartment",
    "floor",
    "duplex",
    "plaza",
    "other",
  ];

  const updateIframeCode = (iframeCode) => {
    const updatedIframeCode = iframeCode
      .replace(/width="(\d+|%)"/, 'width="100%"')
      .replace(/height="(\d+|%)"/, 'height="100%"');
    return updatedIframeCode;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    setValue,
  } = useForm();

  useEffect(() => {
    if (propertiesData) {
      setValue("title", propertiesData?.title);
      setValue("videoLink", propertiesData?.videoLink);
      setValue("area", propertiesData?.area);
      setValue("price", propertiesData?.price);
      setValue("propertyType", propertiesData?.propertyType);
      setValue("purpose", propertiesData?.purpose);
      setValue("description", propertiesData?.description);
      setValue("email", propertiesData?.contact?.email);
      setValue("phone", propertiesData?.contact?.phone);
      setValue("wpNumber", propertiesData?.contact?.wpNumber);
      setValue("mapLink", propertiesData?.mapLink);
      setValue("location", propertiesData?.address?.location);
      setValue(
        "completionStatusForSell",
        propertiesData?.completionStatusForSell
      );
      setValue(
        "typeOfOwnership",
        propertiesData?.propertyDocuments?.typeOfOwnership
      );
      setValue("floor", propertiesData?.features?.floor);
      setValue("parking", propertiesData?.features?.parking);
      setValue("floorNo", propertiesData?.features?.floorNo);
      setValue("balcony", propertiesData?.features?.balcony);
      setValue("bathroom", propertiesData?.features?.bathroom);
      setValue("bedroom", propertiesData?.features?.bedroom);
      setValue(
        "electricity",
        propertiesData?.features?.electricity ? "true" : "false"
      );
      setValue("water", propertiesData?.features?.water ? "true" : "false");
      setValue("gas", propertiesData?.features?.gas ? "true" : "false");
      setValue(
        "security",
        propertiesData?.features?.security ? "true" : "false"
      );
      setValue(
        "generator",
        propertiesData?.features?.generator ? "true" : "false"
      );
      setValue("lift", propertiesData?.features?.lift ? "true" : "false");
      setDivision(propertiesData?.address?.division);
      setDistrict(propertiesData?.address?.district);
      setUpazila(propertiesData?.address?.upazila);
      setImageUrl(propertiesData?.images);
      setRent(propertiesData?.purpose);
      setPropertyType(propertiesData?.propertyType);
      setResidentialTypeActive(propertiesData?.residentialType);
      setCommercialTypeActive(propertiesData?.commercialType);
    }
  }, [propertiesData]);

  const onSubmit = async (values) => {
    console.log(values);

    setLoading(true);
    const body = {
      title: values?.title,
      description: values?.description,
      purpose: values?.purpose,
      propertyType: values?.propertyType,
      price: Number(values.price),
      area: Number(values.area),
      videoLink: values.videoLink,
      mapLink: updateIframeCode(values?.mapLink),
      address: {
        division: division,
        district: district,
        upazila: upazila,
        location: values?.location,
      },
      contact: {
        wpNumber: values?.wpNumber,
        phone: values?.phone,
        email: values?.email,
      },
      propertyDocuments: {
        typeOfOwnership: values?.typeOfOwnership,
      },
      images: imageUrl,
      //   priority: currentlyLoggedIn?.userType,
      //   userDetails: currentlyLoggedIn?._id,
    };

    if (user === "user") {
      body.publishStatus = "pending";
    }

    if (rent === "sell") {
      body.completionStatusForSell = values?.completionStatusForSell;
    }

    if (propertyType === "residential") {
      body.residentialType = residentialTypeActive;
      body.features = {
        bedroom: Number(values?.bedroom),
        bathroom: Number(values?.bathroom),
        balcony: Number(values?.balcony),
        floorNo: Number(values?.floorNo),
        parking: Number(values?.parking),
        floor: Number(values?.floor),
        lift: values.lift === "true" ? true : false,
        generator: values.generator === "true" ? true : false,
        security: values.security === "true" ? true : false,
        gas: values.gas === "true" ? true : false,
        water: values.water === "true" ? true : false,
        electricity: values.electricity === "true" ? true : false,
      };
    }

    if (propertyType === "commercial") {
      body.commercialType = commercialTypeActive;
      body.features = {
        bedroom: Number(values?.bedroom),
        bathroom: Number(values?.bathroom),
        balcony: Number(values?.balcony),
        floorNo: Number(values?.floorNo),
        parking: Number(values?.parking),
        floor: Number(values?.floor),
        lift: values.lift === "true" ? true : false,
        generator: values.generator === "true" ? true : false,
        security: values.security === "true" ? true : false,
        gas: values.gas === "true" ? true : false,
        water: values.water === "true" ? true : false,
        electricity: values.electricity === "true" ? true : false,
      };
    }

    const res = await propertyPatch(body, id, token);

    if (res.statusCode === 200) {
      setLoading(false);
      setMessageShow(true);
      toast.success("Property Update Successfully!");
    } else {
      setLoading(false);
      toast.error("Something went wrong, Please try again!");
    }
  };
  // --------------------------------------------handle multi image upload
  const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`;
  const handleImageUpload = async (e) => {
    setImageLoading(true);
    const files = Array.from(e.target.files);

    const uploadPromises = files.map((file) => {
      const formData = new FormData();
      formData.append("image", file);

      return fetch(imgUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.data?.url) {
            return result.data.url;
          } else {
            throw new Error("Image upload failed");
            setImageLoading(false);
          }
        })
        .catch((error) => {
          setImageLoading(false);
        });
    });
    try {
      const uploadedUrls = await Promise.all(uploadPromises);
      setImageUrl((prevUrls) => [...prevUrls, ...uploadedUrls]);
      setImageUploadErrorMessage(null);
      setImageLoading(false);
    } catch (error) {
      setImageLoading(false);
      setImageUploadErrorMessage(
        "Image Upload failed, please check your internet connection"
      );
    }
  };

  return (
    <div>
      {user === "user" && (
        <>
          {messageShow && (
            <div className=" bg-yellow-700 mb-4 relative text-white p-5 rounded-md">
              <h3>
                ২৪ ঘন্টার মধ্যে আপনার পোস্ট টি রিভিউ করে , পাবলিশ করা হবে | কোনো
                কিছু জানার থাকলে, ইমেইল করুন, info@deshthikana.com
              </h3>
              <button
                onClick={() => setMessageShow(false)}
                className=" absolute top-0 right-0 bg-white w-[20px] rounded-md text-black h-[20px] flex items-center justify-center "
              >
                <IoCloseSharp />
              </button>
            </div>
          )}
        </>
      )}

      <div>
        <h3 className=" text-[17px] font-medium">
          Welcome, {currentlyLoggedIn?.name}
        </h3>
        <h2 className=" text-[25px] font-semibold">Update Property</h2>
        <BreakCame type={type} data={data} />
      </div>

      <div className=" mt-8">
        <div className=" bg-white shadow-md rounded-xl lg:p-8 md:p-5 p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
            <div className=" flex items-center gap-5 md:flex-row flex-col">
              <CustomInput
                label={"Properties Title"}
                type={"text"}
                register={register("title", {
                  required: {
                    value: true,
                    message: "Please add title",
                  },
                })}
                error={errors.title}
                placeholder={"Enter Properties title"}
              />
            </div>

            <div className=" mt-2">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Description
                </label>
                <textarea
                  className="py-[15px] h-[150px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  placeholder={"Properties Description"}
                  id="otp"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Please add title",
                    },
                  })}
                ></textarea>

                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Purpose
                </label>
                <select
                  type="text"
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  {...register("purpose", {
                    required: {
                      value: true,
                      message: "Please add purpose",
                    },
                  })}
                  onChange={(e) => setRent(e.target.value)}
                >
                  <option value={"sell"}>Sell</option>
                  <option value={"rent"}>Rent</option>
                </select>

                <label className="label">
                  {errors.purpose?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.purpose.message}
                    </span>
                  )}
                </label>
              </div>

              {rent === "sell" && (
                <div className="flex flex-col items-start w-full mt-3">
                  <label
                    htmlFor="otp"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    Completion Status For Sell
                  </label>
                  <select
                    type="text"
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    {...register("completionStatusForSell", {
                      required: {
                        value: true,
                        message: "Please add Completion Status For Sell",
                      },
                    })}
                  >
                    <option value={"ready"}>Ready</option>
                    <option value={"underConstruction"}>
                      Under Construction
                    </option>
                  </select>

                  <label className="label">
                    {errors.purpose?.type === "required" && (
                      <span className=" text-sm mt-1 text-red-500">
                        {errors.purpose.message}
                      </span>
                    )}
                  </label>
                </div>
              )}

              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Property Type
                </label>
                <select
                  type="text"
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  {...register("propertyType", {
                    required: {
                      value: true,
                      message: "Please add Completion Status For Sell",
                    },
                  })}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value={"residential"}>Residential</option>
                  <option value={"commercial"}>Commercial</option>
                  <option value={"land"}>Land</option>
                </select>

                <label className="label">
                  {errors.propertyType?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.propertyType.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className=" mt-5">
              {propertyType === "residential" && (
                <div>
                  <label
                    htmlFor="otp"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    Residential Type
                  </label>

                  <div className=" flex items-center mt-2 flex-wrap gap-3">
                    {residentialType?.map((item, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setResidentialTypeActive(item)}
                        className={`text-sm border border-gray-300 rounded-full py-1.5 px-3 ${
                          item === residentialTypeActive
                            ? " bg-primary text-white"
                            : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {propertyType === "commercial" && (
                <div>
                  <label
                    htmlFor="otp"
                    className=" font-normal text-sm text-dark-gray"
                  >
                    Commercial Type
                  </label>

                  <div className=" flex mt-2 items-center flex-wrap gap-3">
                    {commercialType?.map((item, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setCommercialTypeActive(item)}
                        className={`text-sm border border-gray-300 rounded-full py-1.5 px-3 ${
                          item === commercialTypeActive
                            ? " bg-primary text-white"
                            : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Price
                </label>
                <input
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  type={"text"}
                  placeholder={"Enter Price"}
                  id="otp"
                  {...register("price", {
                    required: "price is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "price must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("price");
                  }}
                />
                <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                  {errors?.price?.message}
                </small>
              </div>

              {/* <CustomInput
                label={"Price"}
                type={"text"}
                register={register("price", {
                  required: "price is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "buyPrice must consist of digits only.",
                  },
                })}
                onKeyUp={(e) => {
                  trigger("buyPrice");
                }}
                error={errors.price}
                placeholder={"Enter Father Name"}
              /> */}

              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Area (sq ft)
                </label>
                <input
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  type={"text"}
                  placeholder={"Enter Area (sq ft)"}
                  id="otp"
                  {...register("area", {
                    required: "Area is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "area must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("area");
                  }}
                />
                <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                  {errors?.area?.message}
                </small>
              </div>

              {/* <CustomInput
                label={"Area (sq ft)"}
                type={"number"}
                register={register("area", {
                  required: {
                    value: true,
                    message: "Please add Area",
                  },
                })}
                error={errors.area}
                placeholder={"Enter Area (sq ft)"}
              /> */}
            </div>

            <div className=" flex items-center gap-5 flex-col mt-2">
              <CustomInput
                label={"Video Link"}
                type={"url"}
                register={register("videoLink", {
                  required: {
                    value: false,
                    message: "Please add Video Link",
                  },
                })}
                error={errors.videoLink}
                placeholder={"Enter Video Link"}
              />
              <CustomInput
                label={"Map Iframe Link (Embed  map)"}
                type={"text"}
                register={register("mapLink", {
                  required: {
                    value: false,
                    message: "Please add Map Link",
                  },
                })}
                error={errors.mapLink}
                placeholder={"Map Iframe Link (Embed  map)"}
              />
            </div>

            <div>
              <div className="mt-8">
                <h2 className=" text-base font-semibold">
                  Properties Location :
                </h2>
              </div>

              <BdAddressSelect3
                selectedDivision={division}
                selectedDistrict={district}
                selectedUpazila={upazila}
                setSelectedDistrict={setDistrict}
                setSelectedDivision={setDivision}
                setSelectedUpazila={setUpazila}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
                className={"flex flex-col gap-1"}
                register={register("location", {
                  required: {
                    value: true,
                    message: "Please add location",
                  },
                })}
              />
            </div>

            <div>
              <div className=" mt-8">
                <h2 className=" text-base font-semibold">Contact Info :</h2>
              </div>
              <div className=" flex items-start gap-5 md:flex-row flex-col mt-[-5px]">
                <CustomInputPhone
                  label={"Whatsapp Number"}
                  type={"text"}
                  register={register("wpNumber", {
                    required: {
                      value: true,
                      message: "Please add whatsapp Number",
                    },
                    minLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    maxLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Number must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("wpNumber");
                  }}
                  error={errors.wpNumber}
                  placeholder={"Enter Whatsapp Number"}
                />

                <CustomInputPhone
                  label={"Phone Number"}
                  type={"text"}
                  register={register("phone", {
                    required: {
                      value: true,
                      message: "Please add whatsapp Number",
                    },
                    minLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    maxLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Number must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("phone");
                  }}
                  error={errors.phone}
                  placeholder={"Enter Phone Number"}
                />
              </div>

              <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
                <CustomInput
                  label={"Email"}
                  type={"email"}
                  register={register("email", {
                    required: {
                      value: true,
                      message: "Please add email",
                    },
                  })}
                  error={errors.email}
                  placeholder={"Enter email"}
                />
                <div className=" w-full"></div>
              </div>
            </div>

            {propertyType !== "land" && (
              <div>
                <div className=" mt-8 mb-2">
                  <h2 className=" text-base font-semibold">Features Info :</h2>
                </div>
                <div className=" grid md:grid-cols-4 grid-cols-2 gap-5">
                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Bed Room
                    </label>
                    <input
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      type={"text"}
                      placeholder={"Enter Bed Room Number"}
                      id="otp"
                      {...register("bedroom", {
                        required: false,
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Bed Room must consist of digits only.",
                        },
                      })}
                      onKeyUp={(e) => {
                        trigger("bedroom");
                      }}
                    />
                    <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                      {errors?.bedroom?.message}
                    </small>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Bath Room
                    </label>
                    <input
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      type={"text"}
                      placeholder={"Enter Bath Room Number"}
                      id="otp"
                      {...register("bathroom", {
                        required: false,
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Bath Room must consist of digits only.",
                        },
                      })}
                      onKeyUp={(e) => {
                        trigger("bathroom");
                      }}
                    />
                    <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                      {errors?.bathroom?.message}
                    </small>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Balcony
                    </label>
                    <input
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      type={"text"}
                      placeholder={"Enter Balcony Number"}
                      id="otp"
                      {...register("balcony", {
                        required: false,
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Balcony must consist of digits only.",
                        },
                      })}
                      onKeyUp={(e) => {
                        trigger("balcony");
                      }}
                    />
                    <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                      {errors?.balcony?.message}
                    </small>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Floor No
                    </label>
                    <input
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      type={"text"}
                      placeholder={"Enter Floor No Number"}
                      id="otp"
                      {...register("floorNo", {
                        required: false,
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Floor No must consist of digits only.",
                        },
                      })}
                      onKeyUp={(e) => {
                        trigger("floorNo");
                      }}
                    />
                    <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                      {errors?.floorNo?.message}
                    </small>
                  </div>

                  {/* <CustomInput
                  label={"Floor No"}
                  type={"number"}
                  register={register("floorNo", {
                    required: {
                      value: true,
                      message: "Please add Floor No",
                    },
                  })}
                  error={errors.floorNo}
                  placeholder={"Enter Floor No"}
                /> */}

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Parking
                    </label>
                    <input
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      type={"text"}
                      placeholder={"Enter Parking Number"}
                      id="otp"
                      {...register("parking", {
                        required: false,
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Parking must consist of digits only.",
                        },
                      })}
                      onKeyUp={(e) => {
                        trigger("parking");
                      }}
                    />
                    <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                      {errors?.parking?.message}
                    </small>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Lift
                    </label>
                    <select
                      type="text"
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      {...register("lift", {
                        required: {
                          value: true,
                          message: "Please add lift",
                        },
                      })}
                    >
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </select>

                    <label className="label">
                      {errors.lift?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.lift.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Generator
                    </label>
                    <select
                      type="text"
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      {...register("generator", {
                        required: {
                          value: true,
                          message: "Please add generator",
                        },
                      })}
                    >
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </select>

                    <label className="label">
                      {errors.generator?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.generator.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Security
                    </label>
                    <select
                      type="text"
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      {...register("security", {
                        required: {
                          value: true,
                          message: "Please add security",
                        },
                      })}
                    >
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </select>

                    <label className="label">
                      {errors.security?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.security.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Gas
                    </label>
                    <select
                      type="text"
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      {...register("gas", {
                        required: {
                          value: true,
                          message: "Please add gas",
                        },
                      })}
                    >
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </select>

                    <label className="label">
                      {errors.gas?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.gas.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Water
                    </label>
                    <select
                      type="text"
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      {...register("water", {
                        required: {
                          value: true,
                          message: "Please add water",
                        },
                      })}
                    >
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </select>

                    <label className="label">
                      {errors.water?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.water.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <label
                      htmlFor="otp"
                      className="mb-1.5 font-normal text-sm text-dark-gray"
                    >
                      Electricity
                    </label>
                    <select
                      type="text"
                      className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                      {...register("electricity", {
                        required: {
                          value: true,
                          message: "Please add electricity",
                        },
                      })}
                    >
                      <option value={"true"}>Yes</option>
                      <option value={"false"}>No</option>
                    </select>

                    <label className="label">
                      {errors.electricity?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.electricity.message}
                        </span>
                      )}
                    </label>
                  </div> */}
                </div>
              </div>
            )}

            <div className="flex flex-col items-start mt-5 md:w-[50%] w-full">
              <label
                htmlFor="otp"
                className="mb-1.5 font-normal text-sm text-dark-gray"
              >
                Property Documents :
              </label>
              <select
                type="text"
                className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                {...register("typeOfOwnership", {
                  required: {
                    value: true,
                    message: "Please add Type Of Owner Ship",
                  },
                })}
              >
                <option value={"By Ownership"}>By Ownership</option>
                <option value={"By Purchase"}>By Purchase</option>
                <option value={"According to parents"}>
                  According to parents
                </option>
              </select>

              <label className="label">
                {errors.typeOfOwnership?.type === "required" && (
                  <span className=" text-sm mt-1 text-red-500">
                    {errors.typeOfOwnership.message}
                  </span>
                )}
              </label>
            </div>

            <DropImageCom
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              handleImageUpload={handleImageUpload}
              imageLoading={imageLoading}
            />
            <div className=" mt-6">
              <button
                disabled={loading}
                type="submit"
                className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
              >
                {loading ? "Loadding..." : "Update Properties"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProperties;
