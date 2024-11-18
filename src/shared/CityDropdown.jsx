"use client";

import { Popover } from "antd";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CityDropdown = ({
  data,
  handleDivisionChange,
  selectedDivision,
  title,
  error,
}) => {
  const [popupShow, setPopupShow] = useState(false);


  const content = (
    <div className="p-0 w-[250px] lg:w-[270px]">
      <div className=" flex w-full items-center max-h-[250px] overflow-y-auto flex-col">
        {data?.length ? (
          <>
            {data?.map((item, index) => (
              <button
                onClick={() => {
                  handleDivisionChange(item?.name);
                  setPopupShow(false);
                }}
                className="py-1 px-5 w-full text-start rounded-md hover:bg-gray-200 text-sm"
                key={index}
              >
                {item.name} - {item?.bn_name}
              </button>
            ))}
          </>
        ) : (
          <>
            <button className="py-1 px-5 w-full text-start text-error rounded-md hover:bg-gray-200 text-sm">
              {error}
            </button>
          </>
        )}
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
          <span> {selectedDivision ? selectedDivision : title}</span>
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

export default CityDropdown;
