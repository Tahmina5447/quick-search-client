import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OtpModal from "./OtpModal";
import { IoMdClose } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { resentOtp } from "../../../apis/auth.api";
import { phoneChangeOtp, userPatch } from "../../../apis/user.api";
import { toast } from "react-toastify";

const NewPhoneModal = ({ modalOPen, setModalOpen, setUpdate, id,token }) => {
  const [loading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const body = {
      phoneNumber: data?.phoneNumber,
    };
    const res = await userPatch(body, id, token);
    if (res.statusCode === 200) {
      setUpdate(Math.random());
      setIsLoading(false);
      setModalOpen(false)
      reset()
      toast.success("Phone Number Change Successfully...");
    } else {
        setIsLoading(false);
      toast.error("Please try again!");
    }
    console.log(res);
  };

  const modalStyle = {
    padding: 0,
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
                Change Phone Number
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="  text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:text-[#FF5959] text-[#68769F]"
              >
                <IoMdClose />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className=" flex items-start flex-col justify-between py-3">
                <label
                  htmlFor=""
                  className="mb-1.5 font-semibold text-sm text-dark-gray"
                >
                  New Phone Number
                </label>

                <div className=" bg-[#edf5ec] w-full flex items-center gap-1 mt-1 px-3 rounded-md">
                  <FiPhone className=" text-green-500 text-[20px] " />
                  <input
                    type="tel"
                    placeholder="Enter your Phone Number"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Phone must consist of digits only.",
                      },
                    })}
                    onKeyUp={(e) => {
                      trigger("phoneNumber");
                    }}
                    className="bg-[#edf5ec] w-full py-3 px-1 outline-none border-none"
                  />
                </div>
                <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                  {errors?.phoneNumber?.message}
                </small>
              </div>

              <div className="mt-[20px] flex items-center gap-5">
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
    </>
  );
};

export default NewPhoneModal;
