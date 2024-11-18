"use client";

import React, { useContext, useState } from "react";
import { Popover } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextData } from "../../../context/dataProviderContext";

function BedsBaths({ activeBuy, setActiveBuy, data }) {
  const [popupShow, setPopupShow] = useState(false);
  const [active2, setActive2] = useState("");
  const [active, setActive] = useState("");
  const { setBedroomFilter, setBathroomFilter } = useContext(ContextData);

  const data1 = ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12"];
  const data2 = ["1", "2", "3", "4", "5", "6","7", "8","9","10","11","12" ];

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  // const addFilter = () => {
  //   if (active2) {
  //     SetBedroomFilter(active2);
  //   }

  //   if(active){
  //     SetBathroomFilter(active)
  //   }

  //   setPopupShow(false)
  // };

  // const closeFilter = () => {
  //   SetBedroomFilter("")
  //   SetBathroomFilter("")
  //   setPopupShow(false)
  // };

  const content = (
    <div className=" w-[275px] p-0">
      <div>
        <h2 className="text-base mb-2 font-medium">Beds</h2>
        <div className=" rounded-md flex items-center gap-3 flex-wrap justify-start p-1">
          {data1.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {setActive2(item);setBedroomFilter(item);setPopupShow(false)}}
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

      <div className=" mt-5">
        <h2 className="text-base mb-2 font-medium">Baths</h2>
        <div className=" rounded-md flex items-center gap-3 flex-wrap justify-start p-1">
          {data2.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {setActive(item);setBathroomFilter(item);setPopupShow(false)}}
                className={` px-5 font-semibold border py-1 duration-300 rounded-full  ${
                  item === active
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

      {/* <div className=" flex items-center gap-3 mt-5">
        <button onClick={()=>closeFilter()} className=" w-full py-2 text-primary rounded-md px-5 text-sm font-semibold border border-primary">
          Reset
        </button>
        <button onClick={()=>addFilter()} className=" w-full py-2 text-white bg-primary rounded-md px-5 text-sm font-semibold border border-primary">
          Done
        </button>
      </div> */}
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
      <button className=" bg-white border border-gray-300 w-full py-2 px-3 text-gray-700 text-sm rounded-md flex items-center justify-between">
        <span>
          {active2 || active2 ? "" : "Beds & Baths"}
          {active2 ? active2 + "Beds" : ""}
          {active2 && active2 ? "/" : ""}
          {active ? active + "Baths" : ""}
        </span>{" "}
        <IoMdArrowDropdown
          className={`text-gray-700 text-[25px] duration-300" ${
            popupShow ? " rotate-180" : ""
          }`}
        />
      </button>
    </Popover>
  );
}

export default BedsBaths;
