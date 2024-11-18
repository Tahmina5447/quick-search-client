"use client";

import React, { useContext, useState } from "react";
import { ContextData } from "../../../../context/dataProviderContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AUTH_URL } from "../../../../apis/url";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { useRouter } from "next/navigation";

function LoginComponent() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUpdate } = useContext(ContextData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    const { phone, password } = values;
    setLoading(true);
    const body = {
      phoneNumber: phone,
      password,
    };

    axios
      .post(`${AUTH_URL}/login`, body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // navigate(from, { replace: true })

          console.log(res);
          localStorage.setItem("token", res?.data?.data?.accessToken);
          router.push("/");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1500);
          setLoading(false);
          setUpdate("updateLogin");
        } else {
          setLoading(false);
          setError("Incorrect Email or Password!");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Incorrect Email or Password!");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-1 mt-5">
        <div>
          <label htmlFor="" className="mb-1 font-semibold">
            Phone
          </label>
          <div className=" bg-[#edf5ec] flex items-center gap-1  px-3 rounded-md">
            <FiPhone className=" text-green-500 text-[20px] " />
            <input
              type="phone"
              placeholder="Phone Number"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Please add phone",
                },
              })}
              className="bg-[#edf5ec] w-full text-lg py-2 px-1 outline-none border-none"
            />
          </div>
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className=" text-sm mt-1 text-red-500">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>

        <div className=" mt-5">
          <label htmlFor="" className=" text-lg mb-1 font-semibold">
            Password
          </label>
          <div className=" bg-[#edf5ec] flex items-center gap-1 px-3 rounded-md">
            <IoMdLock className=" text-green-500 text-[20px] " />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please add password",
                },
              })}
              className=" bg-[#edf5ec] w-full text-lg py-2 px-1 outline-none"
            />
            <div>
              <span className=" cursor-pointer" onClick={() => setShow(!show)}>
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

        <div className=" flex items-center justify-between py-3">
          <div className="relative mt-1 flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox"
              // name="user_email"
              className="cursor-pointer size-4"
            />
            <label
              htmlFor="checkbox"
              className="flex cursor-pointer items-center gap-1 text-sm text-black/80"
            >
              Remember me
            </label>
          </div>

          <Link
            href={"/auth/forgot"}
            className=" text-sm text-green-500 underline"
          >
            Forgot password?
          </Link>
        </div>

        <div className=" flex items-center justify-center ">
          {error && (
            <span className=" text-red-500 text-sm mb-2 font-semibold">
              {error ? error : ""}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary hover:bg-primary duration-300 w-full text-white px-6 py-2 rounded-md text-xl"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
