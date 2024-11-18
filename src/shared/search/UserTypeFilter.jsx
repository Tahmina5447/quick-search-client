"use client";

import { Popover } from "antd";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextData } from "../../../context/dataProviderContext";

const UserTypeFilter = ({priority, setPriority}) => {
  const [popupShow, setPopupShow] = useState(false);
  const [value,setValue]=useState("")

  const data = [
    {
      title: "Regular",
      value: "regular",
    },
    {
      title: "Gold",
      value: "gold",
    },
  ];

  const addFilter = ()=>{
    setPriority(value)
    setPopupShow(false);
  }

  const closeFilter = ()=>{
    setPriority("")
    setValue("")
    setPopupShow(false);
  }

  const content = (
    <div className="p-0 w-[250px] lg:w-[270px]">
      <h2 className=" text-base mb-2 font-medium">User Type</h2>
      <div className=" flex w-full items-center">
        {data?.map((item, index) => (
          <button
            onClick={() => {
              setValue(item?.value);
            }}
            className={`w-full py-2 duration-300 border capitalize ${item.value===value ? " bg-primary/20" : ""}`}
            key={index}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className=" flex items-center gap-3 mt-5">
        <button
          onClick={() => closeFilter()}
          className=" w-full py-2 text-primary rounded-md px-5 text-sm font-semibold border border-primary"
        >
          Reset
        </button>
        <button
          onClick={() => addFilter()}
          className=" w-full py-2 text-white bg-primary rounded-md px-5 text-sm font-semibold border border-primary"
        >
          Done
        </button>
      </div>
    </div>
  );

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  return (
    <div className="w-full">
      <Popover
        open={popupShow}
        onOpenChange={handleOpenChange}
        content={content}
        placement="bottomRight"
        trigger="click"
      >
        <button className=" bg-white capitalize border border-gray-300   w-full py-2 text-sm px-5 text-gray-700 font-normal rounded-md flex items-center justify-between">
          <span> {priority ? priority : "User Type"}</span>
          <IoMdArrowDropdown
            className={`text-gray-700 text-[25px] duration-300" ${
              popupShow ? " rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
    </div>
  );
};

export default UserTypeFilter;
