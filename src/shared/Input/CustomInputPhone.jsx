import React from "react";

const CustomInputPhone = ({
  label,
  type,
  register,
  error,
  placeholder,
  onKeyUp,
  required = true,
}) => {
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
        id="otp"
        {...register}
        onKeyUp={onKeyUp}
      />
      <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
        {error?.message}
      </small>
    </div>
  );
};

export default CustomInputPhone;
