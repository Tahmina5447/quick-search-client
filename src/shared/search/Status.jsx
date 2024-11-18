"use client";

import { Popover } from "antd";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextData } from "../../../context/dataProviderContext";
import {
  MdOutlinePending,
  MdOutlinePublishedWithChanges,
  MdOutlineUnpublished,
} from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { SiDavinciresolve } from "react-icons/si";

const Status = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [value,setValue]=useState("")
  const { publishStatus, setPublishStatus } = useContext(ContextData);

  const data = [
    {
      title: "Published",
      value: "published",
      icon: <MdOutlinePublishedWithChanges className="text-[16px]" />,
    },
    {
      title: "Un Published",
      value: "unPublished",
      icon: <MdOutlineUnpublished className="text-[16px]" />,
    },
    {
      title: "Pending",
      value: "pending",
      icon: <MdOutlinePending className="text-[18px]" />,
    },
    {
      title: "Rejected",
      value: "rejected",
      icon: <FaBan className="text-[16px]" />,
    },
    {
      title: "Sold Out",
      value: "sold-out",
      icon: <SiDavinciresolve className="text-[16px]" />,
    },
  ];

  const addFilter = ()=>{
    setPublishStatus(value)
    setPopupShow(false)
  }

  const closeFilter = ()=>{
    setPublishStatus("")
    setValue("")
    setPopupShow(false)
  }

  const content = (
    <div className="p-0 w-[250px] lg:w-[270px]">
      <h2 className=" text-base mb-2 font-medium">Property Status</h2>
      <div className=" grid grid-cols-2 w-full items-center gap-2 flex-col">
        {data?.map((item, index) => (
          <button
            onClick={() => {
              setValue(item?.value);
            }}
            className={`py-1.5 px-5 w-full border flex items-center text-center  gap-2 justify-center rounded-md hover:bg-gray-200 text-sm ${
              item.value === value
                ? " bg-primary/15 border-primary text-primary"
                : " border-gray-300"
            }`}
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
          <span> {publishStatus ? publishStatus : "Status"}</span>
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

export default Status;
