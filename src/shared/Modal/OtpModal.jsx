"use client";

import { Modal } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../apis/url";
import { userPatch } from "../../../apis/user.api";
import { ContextData } from "../../../context/dataProviderContext";
import axios from "axios";
import ResentOtp from "@/components/Auth/ResentOtp";
import NewPhoneModal from "./NewPhoneModal";
import { useRouter } from "next/navigation";

const OtpModal = ({
  modalOPen,
  setModalOpen,
  otpData,
  setOtpData,
  setIsActive,
  isActive,
  setUpdate,
  id,
  length = 4,
  onOtpSubmit = () => {},
}) => {

  const {token,currentlyLoggedIn} = useContext(ContextData)

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useForm();
  const [phoneModal,setPhoneModal]=useState(false)

  const router = useRouter()

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
    setLoading(true)
    const body = {
      phoneNumber: currentlyLoggedIn?.phoneNumber,
      verificationCode: verifyNumberData,
    };

    axios
      .post(`${BASE_URL}/auth/verify`, body)
      .then((res) => {
        if (res.status === 200) {
          successFun()
        } else {
          toast.error("Please try again!");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err?.response?.data?.message);
      });
  };


  const successFun = async () => {

    const body = {
      phoneNumber: otpData?.phoneNumber,
    };
    const res = await userPatch(body, currentlyLoggedIn?._id, token);
    if (res.statusCode === 200) {
      setUpdate(Math.random());
      setLoading(false);
      setModalOpen(false)
      setOtp(new Array(length).fill(""))
      router.push("/auth/login")
      toast.success("Phone Number Change Successfully! Please login again");
    } else {
      setLoading(false);
      toast.error("Please try again!");
    }
    console.log(res);
  };


  const modalStyle = {
    padding: 0, // Set padding to 0 for the Modal component
  };
  return (
    <>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={560}
        className={``}
        style={modalStyle}
      >
        <div>
          <div className="z-[50000000] rounded-[20px] bg-white">
            <div className=" flex items-center justify-between">
              <h2 className=" text-[25px] font-semibold text-dark-gray">
                Verify Number
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="  text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:text-[#FF5959] text-[#68769F]"
              >
                <IoMdClose />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div>
                <p className="text-normal text-base text-info">
                  Please Enter OTP That Sent To {otpData?.phoneNumber} {"otp=" +  otpData?.verificationCode}
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
                        className="border border-dark-gray/20 text-center outline-none focus:border-primary w-10 h-11 rounded-[10px]"
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
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-[500] text-[14px] h-[45px] w-full bg-[#664DFF]/10 duration-300 px-5 rounded-[4px] text-primary hover:bg-primary hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="font-[500] text-[14px] h-[45px] w-full bg-primary duration-300 px-5 rounded-[4px] text-white hover:bg-primary hover:text-white"
                >
                  {loading ? "Loading..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <NewPhoneModal modalOPen={phoneModal} setModalOpen={setPhoneModal} setUpdate={setUpdate} id={id} token={token}/>
    </>
  );
};

export default OtpModal;
