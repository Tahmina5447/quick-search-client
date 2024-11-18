"use client";

import React, { useEffect, useState } from "react";
import { resentOtp } from "../../../apis/auth.api";

const ResentOtp = ({setIsActive,isActive,otpData,setOtpData}) => {
  const [isLoading,setIsLoading]=useState(false)

  const [time, setTime] = useState(5); // 2 minutes in seconds

  useEffect(() => {
    let timerId;
    if (isActive && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timerId); // Clear interval on component unmount
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const onSubmit = async () => {
    setIsLoading(true)
    const body = {
      phoneNumber: otpData?.phoneNumber,
    };

    const res = await resentOtp(body,setIsLoading,setOtpData,setIsActive)
    console.log("hello",res)
    setTime(5)

  };

  return (
    <div>
      <div>
        <div className="text-center text-info text-sm flex items-center gap-1 justify-center font-medium mt-4">
          Didn't get the code?{" "}

          {
            time === 0 ? <button
            type="button"
            disabled={isLoading}
            onClick={() => onSubmit()}
            className={`font-bold underline ${
              isLoading ? " text-gray-500" : "text-primary "
            }`}
          >
            Click to resend
          </button> : <p>{formatTime(time)}s</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ResentOtp;
