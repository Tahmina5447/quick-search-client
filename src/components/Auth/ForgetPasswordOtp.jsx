"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TbLockExclamation } from "react-icons/tb";
import ResentOtp from "./ResentOtp";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { verifyOtp, VerifyOtp, verifyOtp2 } from "../../../apis/auth.api";
import NewPassword from "./NewPassword";

const ForgetPasswordOtp = ({
  setOtpOpen,
  setOtpData,
  otpData,
  setIsActive,
  isActive,
  length = 4,
  onOtpSubmit = () => {},
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(false);

  const router = useRouter();

  const { handleSubmit } = useForm();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };
  // --------end otp-------------

  const onSubmit = async () => {
    const verifyNumberData = Object.values(otp).join("");
    setLoading(true);

    const body = {
      phoneNumber: otpData?.phoneNumber,
      verificationCode: verifyNumberData,
    };

    const res = verifyOtp2(body, setLoading, setPassword);
    console.log(res);
  };

  const goBackFun = ()=>{
    setOtpOpen(false)
    localStorage.removeItem("otp")
  }

  return (
    <>
      {password ? (
        <>
         <NewPassword otpData={otpData}/>
        </>
      ) : (
        <>
          <div className="w-full p-5 md:px-14">
            <div className=" w-full flex items-start gap-3 py-5">
              <div className=" flex items-center justify-center  w-[50px] h-[50px] bg-gray-200 text-yellow-600 text-[35px]">
                <TbLockExclamation />
              </div>
              <div className="w-[90%]">
                <h2 className=" text-xl font-semibold">Verify Otp</h2>
                <p className=" font-normal text-sm text-wrap">
                   Please enter your otp and verify
                </p>
              </div>
            </div>
            <div className=" mt-5  flex items-center justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div>
                  <p className="text-normal text-base text-info">
                    Please Enter OTP That Sent To {otpData?.phoneNumber} (otp=
                    {otpData?.verificationCode})
                  </p>
                  <div className=" flex items-center justify-center w-full mt-5">
                    <h1 className="text-lg font-medium text-dark-gray mb-4">
                      Enter OTP
                    </h1>
                  </div>
                  <div className="flex items-center py-2 gap-9  mx-auto w-[280px]">
                    {otp.map((value, index) => {
                      return (
                        <input
                          key={index}
                          type="text"
                          ref={(input) => (inputRefs.current[index] = input)}
                          value={value}
                          onChange={(e) => handleChange(index, e)}
                          onClick={() => handleClick(index)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="border border-gray-400 text-center outline-none focus:border-primary w-14 h-14 rounded-[10px]"
                        />
                      );
                    })}
                  </div>
                  <ResentOtp
                    setIsActive={setIsActive}
                    isActive={isActive}
                    otpData={otpData}
                    setOtpData={setOtpData}
                  />
                </div>
                <div className="mt-[30px] flex items-center gap-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-[500] text-[14px] h-[45px] w-full bg-primary duration-300 px-5 rounded-[4px] text-white hover:bg-primary hover:text-white"
                  >
                    {loading ? "Loading..." : "Send"}
                  </button>
                </div>

                <div className=" flex items-center mt-4 gap-2 text-sm justify-center">
                  <button onClick={() => goBackFun()}>Go back</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ForgetPasswordOtp;
