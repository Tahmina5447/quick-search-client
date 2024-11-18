"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import Footer from "@/shared/Footer";
import { LuUser } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import {
  FaImage,
  FaRegAddressBook,
  FaRegEye,
  FaRegEyeSlash,
  FaWhatsapp,
} from "react-icons/fa";
import BdAddressSelect from "@/shared/BdAddressSelect";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegisterComponent = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    setLoading(true);
    const body = {
      name,
      email,
      phoneNumber,
      password,
    };

    axios
      .post(`${USER_URL}`, values)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          // navigate(from, { replace: true })
          router.push("/auth/login");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1500);
          setLoading(false);
        } else {
          setLoading(false);
          setError("Please try again!");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Please try again!");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-4 h-[350px] overflow-y-auto"
      >
        <div className=" flex items-center gap-5 flex-col">
          <div className="w-full">
            <label htmlFor="" className=" text-base mb-1 font-semibold">
              Full name
            </label>
            <div className=" bg-[#edf5ec] flex items-center gap-1  px-2 rounded-md">
              <LuUser className=" text-green-500 text-[20px]" />
              <input
                type="text"
                placeholder="Your Full name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please add Name",
                  },
                })}
                className=" bg-transparent text-base  py-2 pr-3 outline-none w-full"
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
            <label htmlFor="" className=" mb-1 font-semibold">
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
                    message: "Please add Email",
                  },
                })}
                className=" bg-transparent text-base py-2 pr-3 outline-none w-full"
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

        <div className=" flex items-center gap-5 mt-5">
          <div className=" w-full">
            <label htmlFor="" className=" text-base  mb-1 font-semibold">
              Phone
            </label>
            <div className=" bg-[#edf5ec] flex items-center gap-1 px-2 rounded-md">
              <FiPhone className=" text-green-500 text-[20px]" />
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Please add phone Number",
                  },
                })}
                className=" bg-transparent text-base  py-2 pr-3 outline-none w-full"
              />
            </div>
            <label className="label">
              {errors.phoneNumber?.type === "required" && (
                <span className=" text-sm mt-1 text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className=" flex items-center flex-col">
          <div className="w-full mt-5">
            <label htmlFor="" className=" text-base mb-1 font-semibold">
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
                    message: "Please add password",
                  },
                })}
                className=" bg-transparent text-base  py-2 pr-3 outline-none w-full"
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

          <div className="w-full mt-5">
            <label htmlFor="" className="text-base  mb-1 font-semibold">
              Password confirmation
            </label>
            <div className=" bg-[#edf5ec] flex items-center gap-1  px-2 rounded-md">
              <IoMdLock className=" text-green-500 text-[20px]" />
              <input
                type={show1 ? "text" : "password"}
                placeholder="Password confirmation"
                {...register("confirm_password", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                className=" bg-transparent text-base  py-2 pr-3 outline-none w-full"
              />
              <div>
                <span
                  className=" cursor-pointer"
                  onClick={() => setShow1(!show1)}
                >
                  {show1 ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>
            {errors?.confirm_password?.message && (
              <p className=" text-red-500 text-sm mt-1">
                Your passwords does not match!
              </p>
            )}
          </div>
        </div>

        <div className=" flex items-center justify-between my-4">
          <div className="relative mb-4 mt-1 flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox"
              // name="user_email"
              className="text-[25px] py-4 cursor-pointer size-4"
            />
            <label
              htmlFor="checkbox"
              className="flex cursor-pointer items-center gap-1 text-sm text-black/80"
            >
              I agree to the Terms and Privacy Policy
            </label>
          </div>

          {/* <Link
                    href={"/"}
                    className=" text-lg text-green-500 underline"
                  >
                    Forgot password?
                  </Link> */}
        </div>
        <button
          disabled={loading}
          type="submit"
          className="bg-primary hover:bg-primary duration-300 w-full text-white px-6 py-2 rounded-md text-xl"
        >
          {loading ? "Loading..." : " Register"}
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
  );
};

export default RegisterComponent;
