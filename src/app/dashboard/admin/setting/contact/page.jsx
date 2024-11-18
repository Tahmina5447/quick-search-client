"use client";

import BreakCame from "@/shared/BreakCame";
import React, { useContext, useEffect, useState } from "react";
// import { ContextData } from "../../../../../context/dataProviderContext";
import { useForm } from "react-hook-form";
import CustomInput from "@/shared/Input/CustomInput";
// import { contactPost, getContact } from "../../../../../apis/dashboard.api";
import { toast } from "react-toastify";
// import { getOneBlogs } from "../../../../../apis/blog.api";
import CustomInputPhone from "@/shared/Input/CustomInputPhone";

const ContactAdd = () => {
  // const { currentlyLoggedIn, token } = useContext(ContextData);
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState();
  const [update,setUpdate]=useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getContact();
        setContact(res?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [update]);

  useEffect(()=>{
    if(contact){
      setValue("phoneNumber",contact?.phoneNumber)
      setValue("wpNumber",contact?.wpNumber)
      setValue("email",contact?.email)
    }
  },[contact])
  

  const onSubmit = async (values) => {
    setLoading(true);
    const res = await contactPost(values, token);
    if (res.statusCode === 201) {
      setLoading(false);
      toast.success("Contact Added Successfully!");
      setUpdate(Math.random())
    } else {
      setLoading(false);
      toast.error("Something went wrong, Please try again!");
    }
  };

  return (
    <div>
      {/* <div className="mb-8">
        <h3 className=" text-[17px] font-medium">
          Welcome, {currentlyLoggedIn?.name}
        </h3>
        <h2 className=" text-[25px] font-semibold">Add Property Contact</h2>
        <BreakCame
          type={"admin"}
          data={[{ title: "Add Property Contact", url: "setting/contact" }]}
        />
      </div> */}

      {/* <div className=" max-container">
        <div className=" bg-white shadow-md rounded-xl lg:p-8 md:p-5 p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
            <div>

              <div className=" flex items-start gap-5 md:flex-row flex-col mt-[-5px]">
              <CustomInputPhone
                  label={"Phone Number"}
                  type={"text"}
                  register={register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Please add whatsapp Number",
                    },
                    minLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    maxLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Number must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("phoneNumber");
                  }}
                  error={errors.phoneNumber}
                  placeholder={"Enter Phone Number"}
                />
                <CustomInputPhone
                  label={"Whatsapp Number"}
                  type={"text"}
                  register={register("wpNumber", {
                    required: {
                      value: true,
                      message: "Please add whatsapp Number",
                    },
                    minLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    maxLength: {
                      value: 11,
                      message: "Number must be 11 digit.",
                    },
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Number must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("wpNumber");
                  }}
                  error={errors.wpNumber}
                  placeholder={"Enter Whatsapp Number"}
                />


              </div>

              <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
                <CustomInput
                  label={"Email"}
                  type={"email"}
                  register={register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                  })}
                  error={errors.email}
                  placeholder={"Enter email"}
                />
                <div className=" w-full"></div>
              </div>

              <div className=" mt-6">
                <button
                  type="submit"
                  className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
                >
                  {loading ? "Loading..." : "Add Contact"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default ContactAdd;
