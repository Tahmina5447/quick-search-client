"use client";

import React, { useContext, useState } from "react";
import { Popover } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextData } from "../../../context/dataProviderContext";

function PriceSearch({ activeBuy, setActiveBuy, data }) {
  const [popupShow, setPopupShow] = useState(false);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const {setMinPrice,minPrice,maxPrice,setMaxPrice} = useContext(ContextData)
  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };


  const addFilter = ()=>{

    if(input1){
      setMinPrice(input1)
    }

    if(input2){
      setMaxPrice(input2)
    }

    setPopupShow(false)
  }

  const closeFilter = ()=>{
    setMinPrice("")
    setMaxPrice("")
    setInput2("")
    setInput1("")
    setPopupShow(false)
  }

  const content = (
    <div className=" w-[275px] p-0">
      <div className=" flex items-center gap-3 w-full">
        <div>
          <label htmlFor="">Minimum </label>
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
          <label htmlFor="">Maximum </label>
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
    <Popover
      open={popupShow}
      onOpenChange={handleOpenChange}
      content={content}
      placement="bottomRight"
      trigger="click"
    >
      <button className=" bg-white border border-gray-300 w-full py-2 px-5 text-gray-700 text-sm rounded-md flex items-center justify-between">
        <span>
          {minPrice || maxPrice ? "" : "Price (BDT)"}
          {minPrice ? minPrice : ""}
          {minPrice || maxPrice ? "-" : ""}
          {maxPrice ? maxPrice : ""}
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

export default PriceSearch;
