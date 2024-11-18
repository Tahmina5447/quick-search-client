"use client";

import React, { useContext, useState } from "react";
import { Popover } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextData } from "../../../context/dataProviderContext";

function RentBuy({ activeBuy, setActiveBuy, data }) {
  const [popupShow, setPopupShow] = useState(false);
  const { setRentFilter, setCompletionStatusForSell, active3, setActive3 } =
    useContext(ContextData);
  const data2 = ["Ready", "Under Construction"];

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const addFilter = () => {
    if (activeBuy) {
      setRentFilter(activeBuy);
      if (activeBuy === "sell") {
        if (active3) {
          setCompletionStatusForSell(
            active3 === "Ready" ? "ready" : "underConstruction"
          );
        }
      } else {
        setCompletionStatusForSell("");
      }
      setPopupShow(false);
    }
  };

  const closeFilter = () => {
    setActiveBuy("");
    setActive3("");
    setRentFilter("");
    if (activeBuy === "rent") {
      setCompletionStatusForSell("");
    }
    setPopupShow(false);
  };

  const content = (
    <div className="p-0 w-[275px]">
      <h2 className=" text-base mb-2 font-medium">Purpose</h2>
      <div className="w-full rounded-md flex items-center justify-between ">
        {data.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveBuy(item.title)}
              className={`w-full py-2 duration-300 border capitalize  ${
                item?.title === activeBuy
                  ? " bg-primary/20 text-primary"
                  : "hover:bg-gray-200"
              }`}
            >
              {item?.title}
            </button>
          );
        })}
      </div>

      {activeBuy === "sell" && (
        <div className="w-full">
          <h2 className="text-base mb-2 mt-4 font-medium">Completion Status</h2>
          <div className=" rounded-md sm:flex items-center gap-3 sm:flex-wrap justify-start p-1 sm:space-y-0 space-y-3 w-full">
            {data2.map((item, index) => {
              return (
                <div>
                  <button
                    key={index}
                    onClick={() => setActive3(item)}
                    className={` px-5  border py-1 duration-300 rounded-full  ${
                      item === active3
                        ? " bg-primary/10 text-primary border-primary"
                        : "hover:bg-gray-200 border-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
          <span>{activeBuy ? activeBuy : "Purpose"}</span>
          <IoMdArrowDropdown
            className={`text-gray-700 text-[25px] duration-300" ${
              popupShow ? " rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
    </div>
  );
}

export default RentBuy;
