"use client";

import React, { useState } from "react";
import { Popover } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbFilter } from "react-icons/tb";

function MoreFilters({ activeBuy, setActiveBuy, data }) {
  const [popupShow, setPopupShow] = useState(false);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [active2, setActive2] = useState();

  const data2 = ["Video tours", "Virtual tours"];

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const content = (
    <div className=" w-[275px] p-0">
      <div className=" flex items-center gap-3 w-full">
        <div>
          <label htmlFor="">Minimum sqft</label>
          <input
            type="text"
            name=""
            id=""
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="0"
            className=" bg-white border w-full text-sm mt-1 rounded-md border-gray-200 outline-none py-2 px-5"
          />
        </div>
        <div>
          <label htmlFor="">Minimum sqft</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="0"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className=" bg-white w-full border text-sm rounded-md mt-1 border-gray-200 outline-none py-2 px-5"
          />
        </div>
      </div>

      <div className=" mt-4">
        <label htmlFor="" className="text-base mt-4 font-medium">
          {" "}
          Keywords
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Keywords"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className=" bg-white w-full border text-sm rounded-md mt-1 border-gray-200 outline-none py-2 px-5"
        />
      </div>

      <div>
        <h2 className="text-base mb-2 mt-4 font-medium">Tour Type </h2>
        <div className=" rounded-md flex items-center gap-3 flex-wrap justify-start p-1">
          {data2.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setActive2(item)}
                className={` px-5 font-semibold border py-1 duration-300 rounded-full  ${
                  item === active2
                    ? " bg-primary/10 text-primary border-primary"
                    : "hover:bg-gray-200 border-gray-300"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className=" flex items-center gap-3 mt-5">
        <button className=" w-full py-2 text-primary rounded-md px-5 text-sm font-semibold border border-primary">
          Reset
        </button>
        <button className=" w-full py-2 text-white bg-primary rounded-md px-5 text-sm font-semibold border border-primary">
          Done
        </button>
      </div>
    </div>
  );

  return (
    <Popover
      open={popupShow}
      onOpenChange={handleOpenChange}
      content={content}
      placement="bottomRight"
      trigger="click"
    >
      <button className=" bg-white w-full border border-gray-300 py-2 px-5 text-gray-700 text-sm font-medium rounded-md flex items-center justify-between">
        <span>More Filters</span>{" "}
        <TbFilter className={`text-gray-700 text-[24px] duration-300`} />
      </button>
    </Popover>
  );
}

export default MoreFilters;
