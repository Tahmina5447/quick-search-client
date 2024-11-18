import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  const data = [
    {
      type: "Email",
      value: "example@gmail.com",
      icons: <MdOutlineMail />,
    },
    {
      type: "Phone",
      value: "01773372120",
      icons: <FaPhoneAlt />,
    },
    {
      type: "Address",
      value: "Dhaka,bangladesh",
      icons: <IoLocationSharp />,
    },
  ];

  return (
    <div className=" md:my-[60px] my-5">
      <div className="max-container">
        <div className=" flex items-center gap-4 w-full">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" bg-white py-10 shadow-sm flex items-center flex-col gap-4 w-full p-5 rounded-md"
              >
                <div className=" text-[30px]">{item.icons}</div>
                <div>
                  <h2 className=" text-center font-semibold md:text-[20px]">
                    {item.type}
                  </h2>
                  <p className=" text-center text-base text-info font-medium">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
