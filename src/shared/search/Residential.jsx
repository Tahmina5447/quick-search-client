"use client";

import React, { useContext, useEffect, useState } from "react";
import { Popover } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { ContextData } from "../../../context/dataProviderContext";

function Residential({ data1, activeBuy, setActiveBuy }) {
  const [popupShow, setPopupShow] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const {setCommercialTypeFilter,setResidentialTypeFilter,setPropertyTypeFilter,active2, setActive2} = useContext(ContextData)

  const data = [
    {
      title: "apartment",
      key: "residential",
    },
    {
      title: "penthouse",
      key: "residential",
    },
    {
      title: "plaza",
      key: "residential",
    },
    {
      title: "plot",
      key: "residential",
    },
    {
      title: "room",
      key: "residential",
    },
    {
      title: "duplex",
      key: "residential",
    },
    {
      title: "building",
      key: "residential",
    },
    {
      title: "office",
      key: "commercial",
    },
    {
      title: "floor",
      key: "commercial",
    },
    {
      title: "duplex",
      key: "commercial",
    },
    {
      title: "building",
      key: "commercial",
    },
    {
      title: "warehouse",
      key: "commercial",
    },
    {
      title: "shop",
      key: "commercial",
    },
    {
      title: "apartment",
      key: "commercial",
    },
    {
      title: "plaza",
      key: "commercial",
    },
    {
      title: "plot",
      key: "commercial",
    },
    {
      title: "factory",
      key: "commercial",
    },
  ];

  useEffect(() => {
    if (activeBuy) {
      const update = data.filter((item) => item.key === activeBuy);
      setFilterData(update);
    }else{
      const update = data.filter((item) => item.key === "residential");
      setFilterData(update);
    }
  }, [activeBuy]);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };


  const addFilter = ()=>{
    if(activeBuy){
      setPropertyTypeFilter(activeBuy)
      if(activeBuy==="residential"){
        setResidentialTypeFilter(active2)
        console.log("residential")
      }
      if(activeBuy==="commercial"){
        setCommercialTypeFilter(active2)
        console.log("commercial")
      }
    }
    setPopupShow(false)
  }

  const closeFilter = ()=>{
    setPropertyTypeFilter("")
    setResidentialTypeFilter("")
    setCommercialTypeFilter("")
    setActiveBuy("")
    setPopupShow(false)
  }


  const content = (
    <div className=" w-[275px] p-0">
      <h2 className=" text-base mb-2 font-medium">Property Type</h2>
      <div className=" border-b border-gray-300  flex items-center gap-1 justify-between">
        {data1.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveBuy(item.title)}
              className={`w-full capitalize  py-1 duration-300  ${
                item?.title === activeBuy
                  ? " border-b-2 border-b-primary text-primary"
                  : " border-b-2 border-b-transparent"
              }`}
            >
              {item?.title}
            </button>
          );
        })}
      </div>

      <div className=" mt-5">
        <div className=" rounded-md grid grid-cols-2 gap-3 flex-wrap justify-start p-1">
          {filterData.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setActive2(item.title);
                }}
                className={` px-5 w-full capitalize text-sm border py-1 duration-300 rounded-full  ${
                  item.title === active2
                    ? " bg-primary/10 text-primary border-primary"
                    : "hover:bg-gray-200 border-gray-300"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className=" flex items-center gap-3 mt-5">
        <button onClick={()=>closeFilter()} className=" w-full py-2 text-primary rounded-md px-5 text-sm font-semibold border border-primary">
          Reset
        </button>
        <button onClick={()=>addFilter()} className=" w-full py-2 text-white bg-primary rounded-md px-5 text-sm font-semibold border border-primary">
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
      <button className=" bg-white capitalize border border-gray-300 w-full py-2 px-5 text-gray-700 text-sm rounded-md flex items-center justify-between">
        <span>{activeBuy ? activeBuy : "Property Type"}</span>
        <IoMdArrowDropdown
          className={`text-gray-700 text-[25px] duration-300" ${
            popupShow ? " rotate-180" : ""
          }`}
        />
      </button>
    </Popover>
  );
}

export default Residential;
