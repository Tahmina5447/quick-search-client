"use client";

import { Popover } from "antd";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PublishFilter = ({ data, value, setValue, title }) => {
  const [popupShow, setPopupShow] = useState(false);

  const content = (
    <div className="p-0 w-[250px] lg:w-[270px]">
      <div className=" flex w-full flex-col items-start">
        {data?.map((item, index) => (
          <button
            onClick={() => {
              setValue(item?.value);
              setPopupShow(false)
            }}
            className={`w-full py-2 duration-300 text-start px-4 rounded-md hover:bg-gray-300 capitalize ${
              item.value === value ? " bg-primary/20" : ""
            }`}
            key={index}
          >
            {item.title}
          </button>
        ))}
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
          <span> {value ? value==="true" ? "Published" : "Hidden" : title}</span>
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

export default PublishFilter;
