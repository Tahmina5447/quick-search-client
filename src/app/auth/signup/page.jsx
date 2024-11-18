"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import { LiaAddressBookSolid } from "react-icons/lia";
import { FaTransgender } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { FaImage, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import BdAddressSelect from "@/shared/BdAddressSelect";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { singleImageUploadupload } from "@/utils/hooks/singleImageUploader";
import { useRouter } from "next/navigation";

const Register = () => {
  const [show, setShow] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upazila, setUpazila] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [profileImage, setProfileImage] = useState();
  const [signup, { isLoading }] = useSignupMutation();
  const [nidFrontImageUploading, setNidFrontImageUploading] = useState(false);
  const [nidFrontImageUrl, setNidFrontImageUrl] = useState("");
  const [nidBackImageUploading, setNidBackImageUploading] = useState(false);
  const [nidBackImageUrl, setNidBackImageUrl] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleGender = (e) => {
    setSelectedGender(e.target.value);
  };

  const onSubmit = async (values) => {
    try {
      const { full_name, email, phone, password, address } = values;
      const body = {
        full_name,
        email,
        phone,
        password,
        address,
        gender: selectedGender,
        upazila,
        district,
        division,
        profile_image: profileImage,
        nid_front_image: nidBackImageUrl,
        nid_back_image: nidBackImageUrl,
      };
      const response = await signup(body).unwrap();
      if (response?.status === "success") {
        toast.success("Registered Successfully!");
        router.push("/");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Registration failed. Try again!");
    }
  };

  const handleNidFrontImageUpload = async (e) => {
    await singleImageUploadupload({
      imageFile: e.target.files[0],
      setImageUrl: setNidFrontImageUrl,
      setImageUploading: setNidFrontImageUploading,
    });
  };
  const handleNidBackImageUpload = async (e) => {
    await singleImageUploadupload({
      imageFile: e.target.files[0],
      setImageUrl: setNidBackImageUrl,
      setImageUploading: setNidBackImageUploading,
    });
  };

  return (
    <div className="">
      <div className="relative">
        <div className=" flex items-center justify-center">
          <div className="flex h-screen  items-center gap-5 w-full overflow-hidden ">
            <div className="w-full hidden lg:block">
              <Image
                src={"/assets/home/home6.jpg"}
                width={800}
                height={800}
                alt="bb"
                className=" w-full h-screen object-cover"
              />
            </div>

            <div className="p-5 w-full h-screen overflow-y-auto px-8">
              <div className=" w-full flex items-start gap-3 py-5">
                <div className=" flex items-center justify-center  w-[50px] h-[50px] bg-gray-200 text-yellow-600 text-[35px]">
                  <RiUserAddLine />
                </div>
                <div className="w-[90%]">
                  <h2 className=" md:text-xl text-base font-semibold">
                    Register an account
                  </h2>
                  <p className=" font-normal md:text-sm text-[12px] text-wrap">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                <div className=" flex items-start gap-5 md:flex-row flex-col">
                  <div className="w-full">
                    <label htmlFor="" className=" text-sm mb-1 font-semibold">
                      Full name
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1  px-2 rounded-md">
                      <LuUser className=" text-green-500 text-[20px]" />
                      <input
                        type="text"
                        placeholder="Your Full name"
                        {...register("full_name", {
                          required: {
                            value: true,
                            message: "Name is required",
                          },
                        })}
                        className=" bg-transparent text-sm  py-2.5 pr-3 outline-none w-full"
                      />
                    </div>
                    <label className="label">
                      {errors.name?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className=" w-full">
                    <label htmlFor="" className=" mb-1 text-sm font-semibold">
                      Email
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1 px-3 rounded-md">
                      <MdOutlineMail className=" text-green-500 text-[20px]" />
                      <input
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                        })}
                        className=" bg-transparent text-sm py-2.5 pr-3 outline-none w-full"
                      />
                    </div>
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>

                <div className=" flex items-start flex-col md:flex-row gap-5 mt-5">
                  <div className=" w-full">
                    <label htmlFor="" className=" text-sm  mb-1 font-semibold">
                      Phone
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1 px-2 rounded-md">
                      <FiPhone className=" text-green-500 text-[20px]" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "phone Number required",
                          },
                          minLength: {
                            value: 11,
                            message: "Phone number must be 11 digit.",
                          },
                          maxLength: {
                            value: 11,
                            message: "Phone number must be 11 digit.",
                          },
                          pattern: {
                            value: /^[0-9]{11}$/,
                            message:
                              "Phone number must consist of digits only.",
                          },
                        })}
                        onKeyUp={(e) => {
                          trigger("phoneNumber");
                        }}
                        className=" bg-transparent text-sm  py-2.5 pr-3 outline-none w-full"
                      />
                    </div>
                    <label className="label">
                      <span className=" text-sm mt-1 text-red-500">
                        {errors?.phoneNumber?.message}
                      </span>
                    </label>
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className=" text-sm mb-1 font-semibold">
                      Password
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1 px-2 rounded-md">
                      <IoMdLock className=" text-green-500 text-[20px]" />
                      <input
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is required",
                          },
                        })}
                        className=" bg-transparent text-sm  py-2.5 pr-3 outline-none w-full"
                      />
                      <div>
                        <span
                          className=" cursor-pointer"
                          onClick={() => setShow(!show)}
                        >
                          {show ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                      </div>
                    </div>
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>

                <div className=" flex items-start gap-5 md:flex-row flex-col mt-5">
                  <div className="w-full">
                    <label htmlFor="" className=" text-sm mb-1 font-semibold">
                      Address
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1  px-2 rounded-md">
                      <LiaAddressBookSolid className=" text-green-500 text-[20px]" />
                      <input
                        type="text"
                        placeholder="Your address"
                        {...register("address", {
                          required: {
                            value: true,
                            message: "Address is required",
                          },
                        })}
                        className=" bg-transparent text-sm  py-2.5 pr-3 outline-none w-full"
                      />
                    </div>
                    <label className="label">
                      {errors.name?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className={`flex relative flex-col w-full`}>
                    <label className="font-semibold text-sm" htmlFor="gender">
                      Gender:
                    </label>
                    <select
                      type="text"
                      className="bg-[#edf5ec] pl-7 outline-none p-3 text-sm px-5 rounded-md flex-1 capitalize max-h-11"
                      id="gender"
                      required={true}
                      value={selectedGender}
                      onChange={handleGender}
                    >
                      <option disabled value="">
                        Select gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <FaTransgender className=" text-green-500 absolute top-[34px] left-2 text-[18px]" />
                  </div>
                </div>

                <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                  <BdAddressSelect
                    selectedDivision={division}
                    selectedDistrict={district}
                    selectedUpazila={upazila}
                    setSelectedDistrict={setDistrict}
                    setSelectedDivision={setDivision}
                    setSelectedUpazila={setUpazila}
                    profileImage={profileImage}
                    setProfileImage={setProfileImage}
                    className={"flex flex-col gap-1"}
                  />
                </div>

                <div className=" flex items-start flex-col md:flex-row gap-5 mt-5">
                  <div className="w-full ">
                    <label htmlFor="" className=" text-sm mb-1 font-semibold">
                      NID Front Image
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1 px-2 rounded-md">
                      <FaImage className=" text-green-500 text-[20px]" />
                      <label
                        htmlFor="nidFrontImage"
                        className="cursor-pointer text-sm text-gray-400 py-2.5"
                      >
                        {nidFrontImageUploading
                          ? "Uploading..."
                          : "Add NID front image"}
                      </label>
                      <input
                        type="file"
                        id="nidFrontImage"
                        onChange={handleNidFrontImageUpload}
                        className="hidden bg-transparent text-sm  py-2 pr-3 outline-none w-full"
                      />
                    </div>

                    {nidFrontImageUrl && (
                      <div className="  w-[100%] h-[150px] p-1 bg-white shadow-md rounded-md mt-3 ">
                        <img
                          src={nidFrontImageUrl}
                          width={500}
                          height={500}
                          alt="NID front image"
                          className="w-full h-full object-contain "
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-full ">
                    <label htmlFor="" className=" text-sm mb-1 font-semibold">
                      NID Back Image
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1 px-2 rounded-md">
                      <FaImage className=" text-green-500 text-[20px]" />
                      <label
                        htmlFor="nidBackImage"
                        className="cursor-pointer text-sm text-gray-400 py-2.5"
                      >
                        {nidBackImageUploading
                          ? "Uploading..."
                          : "Add NID back image"}
                      </label>
                      <input
                        type="file"
                        id="nidBackImage"
                        onChange={handleNidBackImageUpload}
                        className="hidden bg-transparent text-sm py-2 pr-3 outline-none w-full"
                      />
                    </div>

                    {nidBackImageUrl && (
                      <div className="  w-[100%] h-[150px] p-1 bg-white shadow-md rounded-md mt-3 ">
                        <img
                          src={nidBackImageUrl}
                          width={500}
                          height={500}
                          alt="NID back image"
                          className="w-full h-full object-contain "
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className=" flex items-center justify-between my-4">
                  <div className="relative mb-4 mt-1 flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={()=>setAgreeTerms(!agreeTerms)}
                      className="text-[25px] py-4 cursor-pointer size-4"
                    />
                    <label
                      htmlFor="checkbox"
                      className="flex cursor-pointer items-center gap-1 text-sm text-black/80"
                    >
                      I agree to the{" "}
                      <Link
                        target="_blank"
                        href={"/privacy-policy"}
                        className=" underline hover:text-primary"
                      >
                        Terms and Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  disabled={isLoading || !agreeTerms}
                  type="submit"
                  className={`${!agreeTerms?'bg-primary/20':'bg-primary '} duration-300 w-full text-white px-6 py-2 rounded-md text-xl`}
                >
                  {isLoading ? "Loading..." : " Register"}
                </button>

                <div className=" flex items-center mt-4 gap-2 text-sm justify-center">
                  <p>Already have an account?</p>
                  <Link
                    href={"/auth/login"}
                    className=" text-sm text-green-500 underline"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
