import React from "react";

const CustomInputDisable = ({ label, type, register, error, placeholder,required=true,}) => {
  return (
    <div className="flex flex-col items-start w-full mt-3">
      <label
        htmlFor="otp"
        className="mb-1.5 font-normal text-sm text-dark-gray"
      >
        {label}
      </label>
      <input
        className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
        type={type}
        placeholder={placeholder}
        disabled={true}
        id="otp"
        {...register}
      />
      <label className="label">
        {error?.type === "required" && (
          <span className=" text-sm mt-1 text-red-500">{error.message}</span>
        )}
      </label>
    </div>
  );
};

export default CustomInputDisable;