"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { TbLockExclamation } from "react-icons/tb";
import { newPass } from "../../../apis/auth.api";

const NewPassword = ({otpData}) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async(values) => {
    console.log(values)

    const body = {
      password:values?.password,
      phoneNumber:otpData?.phoneNumber,
    }
    const res = await newPass(body,setLoading,router)
    console.log(res)
  };

  return (
    <div className="p-5 w-full px-14">
      <div className=" w-full flex items-start gap-3 py-5">
        <div className=" flex items-center justify-center  w-[50px] h-[50px] bg-gray-200 text-yellow-600 text-[35px]">
          <TbLockExclamation />
        </div>
        <div className="w-[90%]">
          <h2 className=" text-xl font-semibold">Add New Password</h2>
          <p className=" font-normal text-sm text-wrap">
            Please add a new password
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="py-1">
        <div className=" flex items-center gap-5 flex-col">
          <div className="w-full mt-5">
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
                    message: "Please add password",
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

          <div className="w-full">
            <label htmlFor="" className="text-sm  mb-1 font-semibold">
              Confirm  Password
            </label>
            <div className=" bg-[#edf5ec] flex items-center gap-1  px-2 rounded-md">
              <IoMdLock className=" text-green-500 text-[20px]" />
              <input
                type={show1 ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                className=" bg-transparent text-sm  py-2.5 pr-3 outline-none w-full"
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

        <button
          type="submit"
          disabled={loading}
          className="bg-primary hover:bg-primary mt-7 duration-300 w-full text-white px-6 py-2 rounded-md text-xl"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
