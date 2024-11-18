"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { sendEmail } from "../../../apis/sendEmail";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendMail = () => {
    sendEmail(form, setLoading, reset, setSuccessMessage, setErrorMessage);
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
    <div id="contact" className="">
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
      <form ref={form} onSubmit={handleSubmit(sendMail)}>
        <div className="flex md:flex-row flex-col items-center gap-4 ">
          <div className=" w-full mb-4">
            <label htmlFor="name" className="leading-7 text-xs font-bold ">
              Full name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              placeholder="Full name"
              className="w-full rounded-md text-sm input border border-gray-300 px-4 py-2.5"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="phone" className="leading-7 text-xs font-bold">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              className="w-full rounded-md text-sm input border  border-gray-300 px-4 py-2.5"
            />
          </div>
        </div>
        <div className=" p mb-4">
          <label htmlFor="emil" className="leading-7 text-xs font-bold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            {...register("email", { required: true })}
            className="w-full rounded-md text-sm input border border-gray-300 px-4 py-2.5"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-xs font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            {...register("message", { required: true })}
            className="w-full rounded-md text-sm input border border-gray-300 px-4 py-2.5 h-[150px]"
            defaultValue={""}
          />
        </div>
        <div className="relative mb-4 mt-1 flex items-center gap-2">
          <input
            type="checkbox"
            // id="email"
            // name="user_email"
            // className="w-full rounded-md text-sm input border border-gray-300 px-4 py-2.5"
          />
          <div className="flex items-center gap-1 text-sm text-black/80">
            <p>You agree to our friendly</p>
            <Link href="#" className="underline ">
              privacy policy
            </Link>
          </div>
        </div>

        <input
          className="text-white btn bg-primary border-0  px-6 text-xs font-bold w-full rounded-md py-3.5 cursor-pointer"
          type="submit"
          value={loading ? "Loading..." : `Send Message`}
        />
      </form>
    </div>
  );
};

export default ContactForm;
