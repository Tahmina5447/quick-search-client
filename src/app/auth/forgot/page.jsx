"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { TbLockExclamation } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { resentOtp } from "../../../../apis/auth.api";
import { FiPhone } from "react-icons/fi";
import ForgetPasswordOtp from "@/components/Auth/ForgetPasswordOtp";

const Forgot = () => {
  const [loading, setIsLoading] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpData, setOtpData] = useState();
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  useEffect(() => {
    const getFun = () => {
      const phone = localStorage.getItem("phone");
      const open = localStorage.getItem("otp");
      const data = {
        phoneNumber: phone,
      };

      console.log(open);
      setOtpData(data);
      setOtpOpen(open);
      setIsActive(open);
    };
    getFun();
  }, []);

  const onSubmit = async (values) => {
    setIsLoading(true);
    const body = {
      phoneNumber: values?.phone,
    };
    setIsActive(true);
    const res = await resentOtp(
      body,
      setIsLoading,
      setOtpData,
      setIsActive,
      setOtpOpen
    );
    console.log(res);
  };

  return (
    <div>
      <div className=" flex items-center justify-center">
        <div className=" flex h-screen  items-center gap-5 w-full overflow-hidden ">
          <div className="w-full hidden md:block">
            <Image
              src={"/assets/home/home6.jpg"}
              width={800}
              height={800}
              alt="bb"
              className=" w-full h-screen object-cover"
            />
          </div>
          {otpOpen ? (
            <>
              <ForgetPasswordOtp
                setOtpOpen={setOtpOpen}
                setOtpData={setOtpData}
                otpData={otpData}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </>
          ) : (
            <>
              <div className="p-5 w-full md:px-14 px-5">
                <div className=" w-full flex items-start gap-3 py-5">
                  <div className=" flex items-center justify-center  w-[50px] h-[50px] bg-gray-200 text-yellow-600 text-[35px]">
                    <TbLockExclamation />
                  </div>
                  <div className="w-[90%]">
                    <h2 className=" text-xl font-semibold">Forgot Password</h2>
                    <p className=" font-normal text-sm text-wrap">
                      Lost your password? Please enter your phone number.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="py-1">
                  <div>
                    <label htmlFor="" className="mb-1 font-semibold">
                      Phone Number
                    </label>
                    <div className=" bg-[#edf5ec] flex items-center gap-1 mt-1 px-3 rounded-md">
                      <FiPhone className=" text-green-500 text-[20px] " />
                      <input
                        type="tel"
                        placeholder="Enter your Phone Number"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "phone Number required",
                          },
                          // minLength: {
                          //   value: 11,
                          //   message: "Phone number must be 11 digit.",
                          // },
                          // maxLength: {
                          //   value: 11,
                          //   message: "Phone number must be 11 digit.",
                          // },
                          pattern: {
                            value: /^[0-9]{11}$/,
                            message:
                              "Phone number must consist of digits only.",
                          },
                        })}
                        onKeyUp={(e) => {
                          trigger("phone");
                        }}
                        className="bg-[#edf5ec] w-full py-2 px-1 outline-none border-none"
                      />
                    </div>
                    <label className="label">
                      <span className=" text-sm mt-1 text-red-500">
                        {errors?.phone?.message}
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary hover:bg-primary mt-7 duration-300 w-full text-white px-6 py-2 rounded-md text-xl"
                  >
                    {loading ? "Loading..." : "Send"}
                  </button>

                  <div className="flex items-center mt-6 gap-2 justify-center mb-5 text-sm">
                    <p>Don't have an Account?</p>
                    <Link
                      href={"/auth/register"}
                      className=" text-sm text-green-500 underline"
                    >
                      Register now
                    </Link>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgot;
