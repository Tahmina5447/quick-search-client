"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSigninMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";

const Login = () => {
  const [show, setShow] = useState(false);
  const [signin, { isLoading }] = useSigninMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = async (values) => {
    try {
      const { email, password } = values;
      const body = {
        email,
        password,
      };
      const response = await signin(body).unwrap();
      if (response?.data?.token) {
        toast.success("Successfully loged in.");
        if(response?.data?.user?.user_role==='admin'){
          router.push("/dashboard/admin");
        }else{
          router.push("/dashboard/sellers");
        }
        
      }
    } catch (err) {
      toast.error(err?.data?.message || "Login failed. Try again!");
    }
  };

  return (
    <div className="">
      <div className="bg-cover bg-center bg-no-repeat  ">
        <div className=" flex items-center justify-center">
          <div className="flex h-screen  items-center gap-5 w-full overflow-hidden ">
            <div className="w-full hidden md:block">
              <Image
                src={"/assets/home/home6.jpg"}
                width={800}
                height={800}
                alt="bb"
                className=" w-full h-screen object-cover"
              />
            </div>
            <div className="p-2 md:px-14 px-5 w-full">
              <div className=" w-full flex items-start gap-3 py-5">
                <div className=" flex items-center justify-center  w-[50px] h-[50px] bg-gray-200 text-yellow-600 text-[35px]">
                  <IoMdLock />
                </div>
                <div className="w-[90%]">
                  <h2 className=" md:text-xl text-base font-semibold">
                    Login to your account
                  </h2>
                  <p className=" font-normal md:text-sm text-[12px] md:text-justify">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="py-1">
                <div>
                  <label htmlFor="" className="mb-1 font-semibold">
                    Email
                  </label>
                  <div className=" bg-[#edf5ec] flex items-center gap-1 mt-1 px-3 rounded-md">
                    <MdOutlineMail className=" text-green-500 text-[20px] " />
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email Number required",
                        },
                      })}
                      onKeyUp={(e) => {
                        trigger("email");
                      }}
                      className="bg-[#edf5ec] w-full py-2 px-1 outline-none border-none"
                    />
                  </div>
                  <label className="label">
                    <span className=" text-sm mt-1 text-red-500">
                      {errors?.email?.message}
                    </span>
                  </label>
                </div>

                <div className=" mt-5">
                  <label htmlFor="" className="mb-1 font-semibold">
                    Password
                  </label>
                  <div className=" bg-[#edf5ec] flex items-center mt-1 gap-1 px-3 rounded-md">
                    <IoMdLock className=" text-green-500 text-[20px] " />
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Enter your Password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required!",
                        },
                      })}
                      className=" bg-[#edf5ec] w-full py-2 px-1 outline-none"
                    />
                    <div>
                      <span
                        className=" cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
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

                {/* <div className="mb-3 mt-5">
                  {error && (
                    <span className=" text-red-500 font-bold text-sm">
                      {error?error?.data?.message: ""}
                    </span>
                  )}
                </div> */}

                <div className=" flex items-center justify-between mb-2 py-3">
                  <Link
                    href={"/auth/forgot"}
                    className=" text-sm text-green-500 underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary duration-300 w-full text-white px-6 py-2 rounded-md text-xl"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>

                <div className="flex items-center mt-6 gap-2 justify-center mb-5 text-sm">
                  <p>Don't have an Account?</p>
                  <Link
                    href={"/auth/signup"}
                    className=" text-sm text-green-500 underline"
                  >
                    Register now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
