"use client";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ContextData } from "../../../context/dataProviderContext";
import { AUTH_URL } from "../../../apis/url";
import axios from "axios";
import BreakCame from "@/shared/BreakCame";

function ChangePassword({type,data}) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { currentlyLoggedIn, token } = useContext(ContextData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async(values) => {
    setLoading(true);
    const body = {
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    };

    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    axios
      .post(`${AUTH_URL}/change-password`, body, config)
      .then((res) => {
        console.log("hello",res?.data?.message);
        if (res.status === 200) {
          console.log(res);
          setTimeout(() => {
            setSuccess("");
          }, 1500);
          setLoading(false);
          setSuccess("Password Change Successful...");
          setError("");
          reset()
        } else {
          setLoading(false);
          setError("Please try again!");
        }
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setLoading(false);
        setError(err?.response?.data?.message);
      });
  };

  return (
    <div>
      <div>
        <h3 className=" text-[17px] font-medium">
          Welcome, {currentlyLoggedIn?.name}
        </h3>
        <h2 className=" text-[25px] font-semibold">Change Password</h2>
        <BreakCame type={type} data={data} />
      </div>

      <div className=" mt-8">
        <div className=" bg-white shadow-md rounded-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
            <div className=" flex items-center gap-5 md:flex-row flex-col">
              <div className="w-full mt-5">
                <label htmlFor="" className=" text-sm mb-1 font-normal">
                  Old Password
                </label>
                <div className=" relative">
                  <input
                    type={show2 ? "text" : "password"}
                    placeholder="Password"
                    {...register("oldPassword", {
                      required: {
                        value: true,
                        message: "Please add password",
                      },
                    })}
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  />
                  <div className=" absolute top-[15px] right-[15px]">
                    <span
                      className=" cursor-pointer"
                      onClick={() => setShow2(!show2)}
                    >
                      {show2 ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                </div>
                <label className="label">
                  {errors.oldPassword?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.oldPassword.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className=" flex items-center md:flex-row md:gap-5 flex-col">
              <div className="w-full mt-5">
                <label htmlFor="" className=" text-sm mb-1 font-normal">
                  New Password
                </label>
                <div className=" relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    {...register("newPassword", {
                      required: {
                        value: true,
                        message: "Please add password",
                      },
                    })}
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  />
                  <div className="absolute top-[15px] right-[15px]">
                    <span
                      className=" cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                </div>
                <label className="label">
                  {errors.newPassword?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.newPassword.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="w-full mt-5">
                <label htmlFor="" className="text-sm  mb-1 font-normal">
                  confirmation Password
                </label>
                <div className=" relative">
                  <input
                    type={show1 ? "text" : "password"}
                    placeholder="Confirmation Password"
                    {...register("confirm_password", {
                      required: true,
                      validate: (val) => {
                        if (watch("newPassword") !== val) {
                          return "Your passwords do no match";
                        }
                      },
                    })}
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  />
                  <div className="absolute top-[15px] right-[15px]">
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

            <div className=" mt-6">
              <div className="">
                {error && (
                  <p className=" text-red-500 text-center text-sm pb-2 font-semibold">
                    {error ? error : ""}
                  </p>
                )}
                {success && (
                  <p className=" bg-green-500 w-full text-white rounded-md py-1 px-3 text-start text-sm mb-4 font-semibold">
                    {success ? success : ""}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
              >
                {loading ? "Loading..." : "Change Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
