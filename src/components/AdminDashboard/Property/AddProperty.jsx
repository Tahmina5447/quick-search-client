"use client";

import BdAddressSelect3 from "@/shared/BdAddressSelect3";
import CustomInput from "@/shared/Input/CustomInput";
import DropImageCom from "@/shared/Input/DropImageCom";
import React, {useState } from "react";
import { useForm } from "react-hook-form";
import BreakCame from "@/shared/BreakCame";
import { toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import CustomInputPhone from "@/shared/Input/CustomInputPhone";
import { useAddPropertyMutation } from "@/redux/features/propertyApi";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import DashboardSectionWrapper from "@/shared/DashboardSectionWrapper";

function AddProperty({ title, data }) {
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [profileImage, setProfileImage] = useState();
  const [propertyType, setPropertyType] = useState("residential");
  const [residentialTypeActive, setResidentialTypeActive] =
    useState("apartment");
  const [imageUrl, setImageUrl] = useState([]);
  const [rent, setRent] = useState("sell");
  const [commercialTypeActive, setCommercialTypeActive] = useState("office");
  const [messageShow, setMessageShow] = useState(false);
  const [addProperty, { isLoading, error }] = useAddPropertyMutation();
  const user = useSelector(selectUser);

  const residentialType = [
    "apartment",
    "house",
    "other",
  ];

  const commercialType = [
    "office",
    "shop",
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
  } = useForm();
  
  const onSubmit = async (values) => {
   
    try {
      const body = {
        property_name: values?.property_name,
        property_details: values?.property_details,
        property_purpose: values?.property_purpose,
        property_type: propertyType,
        price: Number(values?.price),
        video: values?.video,
        map: updateIframeCode(values?.map),
        property_images: imageUrl,
        address: {
          property_division: division,
          property_district: district,
          property_upazilla: upazila,
          location: values?.location,
        },
        contact_info: {
          wp_nmbr: values?.wp_nmbr,
          phone: values.phone,
          email: values?.email,
        },
        user_info:user,
      };

      if (rent === "sell") {
        body.completion_status = values?.completion_status;
      }

      if (propertyType === "residential") {
        body.residential_type = residentialTypeActive;
        body.features = {
          sqr_fit: Number(values?.sqr_fit),
          bed_room: Number(values?.bedroom),
          bathroom: Number(values?.bathroom),
          belcony: Number(values?.belcony),
          floor_no: Number(values?.floor_no),
          lift: values?.lift === "true" ? true : false,
        };
      }

      if (user?.user_role === "admin") {
        body.property_status = "active";
      }

      if (propertyType === "commercial") {
        body.commercial_type = commercialTypeActive;
        body.features = {
          sqr_fit: Number(values?.sqr_fit),
          bed_room: Number(values?.bedroom),
          bathroom: Number(values?.bathroom),
          belcony: Number(values?.belcony),
          floor_no: Number(values?.floor_no),
          lift: values?.lift === "true" ? true : false,
        };
      }
      const response = await addProperty(body);
      if (response?.data?.status === "success") {
        setMessageShow(true);
        setImageUrl([]);
        reset();
        toast.success("Property added successfully!");
      } else if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      toast.error(err?.data?.message || "Property added failed. Try again!");
    }
  };

  return (
    <div>
      {user?.user_role === "seller" && (
        <>
          {messageShow && (
            <div className=" bg-green-200 mb-4 relative text-black p-5 rounded-md">
              <h3>
                ২৪ ঘন্টার মধ্যে আপনার পোস্ট টি রিভিউ করে , পাবলিশ করা হবে | কোনো
                কিছু জানার থাকলে, ইমেইল করুন, info@deshthikana.com
              </h3>
              <button
                onClick={() => setMessageShow(false)}
                className=" absolute top-0 right-0  w-[25px] rounded-md text-black h-[25px] flex items-center justify-center "
              >
                <IoCloseSharp />
              </button>
            </div>
          )}
        </>
      )}

      <div>
        <BreakCame type={title} data={data} />
      </div>

      <DashboardSectionWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
          <div className=" flex items-center gap-5 md:flex-row flex-col">
            <CustomInput
              label={"Property Title"}
              type={"text"}
              register={register("property_name", {
                required: {
                  value: true,
                  message: "Please add title",
                },
              })}
              error={errors.property_name}
              placeholder={"Enter Property title"}
            />
          </div>

          <div className=" mt-2">
            <div className="flex flex-col items-start w-full mt-3">
              <label
                htmlFor="property_details"
                className="mb-1.5 font-normal text-sm text-dark-gray"
              >
                Description
              </label>
              <textarea
                className="py-[15px] h-[150px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                placeholder={"Properties Description"}
                id="property_details"
                {...register("property_details", {
                  required: {
                    value: true,
                    message: "Please add description",
                  },
                })}
              ></textarea>

              <label className="label">
                {errors.property_details?.type === "required" && (
                  <span className=" text-sm mt-1 text-red-500">
                    {errors.property_details.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
            <div className="flex flex-col items-start w-full mt-3">
              <label
                htmlFor="property_purpose"
                className="mb-1.5 font-normal text-sm text-dark-gray"
              >
                Purpose
              </label>
              <select
                type="text"
                className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                {...register("property_purpose", {
                  required: {
                    value: true,
                    message: "Please select purpose",
                  },
                })}
                onChange={(e) => setRent(e.target.value)}
              >
                <option value={"sell"}>Sell</option>
                <option value={"rent"}>Rent</option>
              </select>

              <label className="label">
                {errors.property_purpose?.type === "required" && (
                  <span className=" text-sm mt-1 text-red-500">
                    {errors.property_purpose.message}
                  </span>
                )}
              </label>
            </div>

            {rent === "sell" && (
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="completion_status"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Completion Status For Sell
                </label>
                <select
                  type="text"
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  {...register("completion_status", {
                    required: {
                      value: true,
                      message: "Please add Completion Status For Sell",
                    },
                  })}
                >
                  <option value={"ready"}>Ready</option>
                  <option value={"construction"}>Under Construction</option>
                </select>

                <label className="label">
                  {errors.completion_status?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.completion_status.message}
                    </span>
                  )}
                </label>
              </div>
            )}

            <div className="flex flex-col items-start w-full mt-3">
              <label
                htmlFor="property_type"
                className="mb-1.5 font-normal text-sm text-dark-gray"
              >
                Property Type
              </label>
              <select
                type="text"
                className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                {...register("property_type", {
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
                {errors.property_type?.type === "required" && (
                  <span className=" text-sm mt-1 text-red-500">
                    {errors.property_type.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className=" mt-5">
            {propertyType === "residential" && (
              <div>
                <label
                  htmlFor="residential_type"
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
                  htmlFor=""
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
                htmlFor="[price]"
                className="mb-1.5 font-normal text-sm text-dark-gray"
              >
                Price
              </label>
              <input
                className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                type={"text"}
                placeholder={"Enter Price"}
                id="price"
                {...register("price", {
                  required: "price is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Price must consist of digits only.",
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

            <div className="flex flex-col items-start w-full mt-3">
              <label
                htmlFor="sqr_fit"
                className="mb-1.5 font-normal text-sm text-dark-gray"
              >
                Area (sq ft)
              </label>
              <input
                className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                type={"text"}
                placeholder={"Enter Area (sq ft)"}
                id="sqr_fit"
                {...register("sqr_fit", {
                  required: "Area is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Area must consist of digits only.",
                  },
                })}
                onKeyUp={(e) => {
                  trigger("sqr_fit");
                }}
              />
              <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                {errors?.sqr_fit?.message}
              </small>
            </div>
          </div>

          <div className=" flex items-center gap-5 flex-col mt-2">
            <CustomInput
              label={"Video Link"}
              type={"url"}
              register={register("video", {
                required: {
                  value: false,
                  message: "Please add Video Link",
                },
              })}
              error={errors.video}
              placeholder={"Enter Video Link"}
            />
            <CustomInput
              label={"Map Iframe Link (Embed  map)"}
              type={"text"}
              register={register("map", {
                required: {
                  value: false,
                  message: "Please add Map Link",
                },
              })}
              error={errors.map}
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
                register={register("wp_nmbr", {
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
                error={errors.wp_nmbr}
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
                    htmlFor="bed_room"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    Bed Room
                  </label>
                  <input
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    type={"text"}
                    placeholder={"Enter Bed Room Number"}
                    id="bed_room"
                    {...register("bed_room", {
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
                    {errors?.bed_room?.message}
                  </small>
                </div>

                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="bathroom"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    Bath Room
                  </label>
                  <input
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    type={"text"}
                    placeholder={"Enter Bath Room Number"}
                    id="bathroom"
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
                    htmlFor="belcony"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    Belcony
                  </label>
                  <input
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    type={"text"}
                    placeholder={"Enter Balcony Number"}
                    id="belcony"
                    {...register("belcony", {
                      required: false,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Belcony must consist of digits only.",
                      },
                    })}
                    onKeyUp={(e) => {
                      trigger("belcony");
                    }}
                  />
                  <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                    {errors?.belcony?.message}
                  </small>
                </div>

                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="floor_no"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    Floor No
                  </label>
                  <input
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    type={"text"}
                    placeholder={"Enter Floor No Number"}
                    id="floor_no"
                    {...register("floor_no", {
                      required: false,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Floor No must consist of digits only.",
                      },
                    })}
                    onKeyUp={(e) => {
                      trigger("floor_no");
                    }}
                  />
                  <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                    {errors?.floor_no?.message}
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
              </div>
            </div>
          )}
          <DropImageCom imageUrls={imageUrl} setImageUrls={setImageUrl} />
          <div className=" mt-6">
            <button
              // disabled={isLoading}
              type="submit"
              className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
            >
              {isLoading ? "Loading..." : "Add Property"}
            </button>
          </div>
        </form>
      </DashboardSectionWrapper>
    </div>
  );
}

export default AddProperty;
