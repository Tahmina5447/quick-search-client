"use client"
import { useForm } from "react-hook-form";
import { IoCallSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { sendEmail } from "../../../apis/sendEmail";
import React, { useRef } from 'react';
import { useState,useEffect } from 'react';

function PropertyContactUs1() {
  const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const form = useRef();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const sendMail = () => {
        sendEmail(form,setLoading,reset,setSuccessMessage,setErrorMessage)
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
      <div className=" bg-white shadow rounded-md p-7 my-8 ">
        <h2 className=" text-base font-semibold mb-4">Contact Us</h2>

        <div className=" w-full">
        {successMessage &&
            
            <div className={`${successMessage?'bg-green-600':'bg-green-600'} text-white text-xs font-medium py-2 px-3 rounded-md mb-4`}><p>{successMessage}</p></div>
            }
            {errorMessage &&
            
            <div className={`${errorMessage?'bg-red-600':'bg-red-600'} text-white text-sm font-medium py-2 px-3 rounded-md mb-4`}><p>{errorMessage}</p></div>
            }
          <form ref={form} onSubmit={handleSubmit(sendMail)} action="">
            <div className=" w-full flex items-center gap-5">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className=" w-full text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                className=" w-full text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              />
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Your Phone"
                className=" w-full text-base py-2 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              />
            </div>
            <textarea
              name=""
              {...register("message", { required: true })}
              placeholder="I'm interested in [ Modern Condo for Sale ]"
              className=" mt-5 w-full h-[150px] text-base py-3 rounded-md  px-5 bg-transparent border border-gray-300 outline-none focus:bg-gray-100"
              id=""
            ></textarea>
            <div className=" flex items-start flex-col md:flex-row w-full gap-5 mt-6">
              <button className=" border-2 w-full md:w-auto border-primary  bg-primary text-white py-2 px-5 rounded-md text-base hover:bg-blue-600 duration-300">
              {loading?'Loading...':'Send Email'}
              </button>
              <a href="tel:+8801757545447" className=" w-full md:w-auto border-2 text-primary  border-primary hover:text-white py-2 px-5 rounded-md text-base hover:bg-primary flex items-center justify-center gap-1 duration-300">
              <IoCallSharp /> Call 017733725120
              </a>
              <a href={"https://wa.me/+8801757545447"} target="_blank" rel="noopener noreferrer" className=" w-full md:w-auto border-2 text-primary  border-primary hover:text-white py-2 px-5 rounded-md text-base hover:bg-primary flex items-center justify-center gap-1 duration-300">
              <RiWhatsappFill /> WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PropertyContactUs1;
