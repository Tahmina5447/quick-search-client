"use client";
import { useForm } from "react-hook-form";
import { IoCallSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import React, { useContext, useRef } from "react";
import { sendEmail } from "../../../apis/sendEmail";
import { useState, useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { ContextData } from "../../../context/dataProviderContext";
import { sendMailData } from "../../../apis/contact.api";

const PropertyContactUs2 = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const form = useRef();
  const { contact } = useContext(ContextData);

  const productUrl = `https://www.deshthikana.com/property/${data?._id}`;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendMail = async (formData) => {
    setLoading(true);
    const response = await sendMailData(
      formData,
      productUrl, 
    );

    console.log(response)

    if(response?.data?.statusCode === 201) {
      setSuccessMessage('Message sent successfully');
      setLoading(false);
      reset();
    } else {
      setErrorMessage('Failed to send message. Please try again.');
      setLoading(false);
    } 
  };

  useEffect(() => {
    if (successMessage) {
      const interval = setInterval(() => {
        setSuccessMessage(null);
      }, 5000); // 3 seconds interval

      return () => clearInterval(interval);
    }
    if (errorMessage) {
      const interval = setInterval(() => {
        setErrorMessage(null);
      }, 5000); // 3 seconds interval

      return () => clearInterval(interval);
    }
  }, [successMessage, errorMessage]);

  return (
    <div>
      <div className=" bg-white shadow rounded-md p-7 ">
        <h2 className=" text-lg font-semibold mb-4">Contact Us</h2>

        <div className=" w-full">
          {successMessage && (
            <div
              className={`${
                successMessage ? "bg-green-600" : "bg-green-600"
              } text-white text-xs font-medium py-2 px-3 rounded-md mb-4`}
            >
              <p>{successMessage}</p>
            </div>
          )}
          {errorMessage && (
            <div
              className={`${
                errorMessage ? "bg-red-600" : "bg-red-600"
              } text-white text-sm font-medium py-2 px-3 rounded-md mb-4`}
            >
              <p>{errorMessage}</p>
            </div>
          )}
          <form ref={form} onSubmit={handleSubmit(sendMail)} action="">
            <div className=" w-full flex flex-col items-center gap-3">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className=" w-full text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              />

              <input
                type="phone"
                placeholder="Your Phone Number"
                {...register("phone", { required: true })}
                className=" w-full text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              />
              <input
                type="text"
                placeholder="Offer Price"
                {...register("offer_price")}
                className=" w-full text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              />
            </div>
            <textarea
              name=""
              {...register("message", { required: true })}
              placeholder="Write your message"
              className=" mt-5 w-full h-[100px] text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              id=""
            ></textarea>

            <div className=" flex items-start flex-col w-full gap-5 mt-3">
              <button className=" border w-full border-primary  bg-primary text-white py-2 px-5 rounded-md text-base hover:bg-blue-600 duration-300">
                {loading ? "Loading..." : "Send Email"}
              </button>
              <div className=" w-full flex items-center gap-4">
                <a
                  href={`tel:+88${
                    data?.contactType === "seller"
                      ? data?.contact?.wpNumber
                      : contact?.wpNumber
                  }`}
                  className=" w-full  border text-primary  border-primary hover:text-white py-2 px-5 rounded-md text-sm hover:bg-primary flex items-center justify-center gap-1 duration-300"
                >
                  <IoCallSharp /> Call
                </a>
                {/* <a href={'https://wa.me/+8801757545447'} target="_blank" rel="noopener noreferrer" className=" w-full border text-primary  border-primary hover:text-white py-2 px-5 rounded-md text-sm hover:bg-primary flex items-center justify-center gap-1 duration-300">
                  <RiWhatsappFill /> WhatsApp
                </a> */}

                <WhatsAppButton
                  productUrl={productUrl}
                  productName={data?.title}
                  productPrice={data?.price}
                  number={
                    data?.contactType === "seller"
                      ? data?.contact?.wpNumber
                      : contact?.wpNumber
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyContactUs2;
