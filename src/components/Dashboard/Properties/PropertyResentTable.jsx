"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CustomTable from "@/shared/Table/CustomTable";
import MyPropertyAction from "./MyPropertyAction";
import PropertyStatus from "./PropertyStatus";
import ContactTypeChange from "./ContactTypeChange";

const PropertyResentTable = ({
  tableData,
  token,
  setUpdate,
  user,
  pageSize,
  currentPage,
  userType,
}) => {
  const startIndex = (currentPage - 1) * pageSize;

  const columns = [
    // {
    //   title: "S/N",
    //   key: "id",
    //   render: (row, record, index) => (
    //     <span className=" text-[14px] font-normal text-info">
    //       {startIndex + index + 1}
    //     </span>
    //   ),
    //   width: "50px",
    // },
    {
      title: "Image",
      render: (row) => (
        <>
          <Image
            src={row?.images[0]}
            width={50}
            height={50}
            alt="logo"
            className=" w-[40px] h-[40px] rounded-md"
          />
        </>
      ),
      width: "70px",
    },
    {
      title: "Title",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.title?.slice(0, 30)}...
        </span>
      ),
      width: "250px",
    },

    {
      title: "Author ",
      key: "purpose",
      render: (row) => (
        <span className="text-[14px] capitalize font-normal text-info">
          {row?.userDetails?.name}
        </span>
      ),
      width: "220px",
    },

    // {
    //   title: "Purpose",
    //   key: "id",
    //   render: (row) => (
    //     <span className=" text-[14px] capitalize font-normal text-info">
    //       {row?.purpose}
    //     </span>
    //   ),
    //   width: "120px",
    // },
    {
      title: "Price",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] w-[400px] font-normal text-info">
          <span className=" text-2xl mr-1 font-semibold">৳</span>
          {row?.price}
        </span>
      ),
      width: "120px",
    },
    {
      title: "Area",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.area} sqft
        </span>
      ),
      width: "120px",
    },
    {
      title: "Priority",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] capitalize font-normal text-info">
          {row?.priority}
        </span>
      ),
      width: "120px",
    },
    {
      title: "Address",
      key: "id",
      render: (row) => (
        <div className=" flex items-start flex-col">
          <span className=" text-[14px] font-normal text-info first-letter:uppercase">
            {row?.address?.location}
          </span>
          <span className=" text-[14px] font-normal text-info first-letter:uppercase">
            {row?.address?.upazila}
          </span>
          <span className=" text-[14px] font-normal text-info first-letter:uppercase">
            {row?.address?.district},
          </span>
          {/* <div className=" flex items-start gap-1">
            <span className=" text-[14px] font-normal text-info first-letter:uppercase">
              {row?.address?.division},
            </span>
          </div> */}
        </div>
      ),
    },

    {
      title: "Property Type",
      key: "id",
      render: (row) => (
        <div className=" flex items-start flex-col">
          <span className=" text-[14px] font-normal text-info first-letter:uppercase">
            {row?.propertyType}
          </span>
          <div className=" flex items-start gap-1">
            <span className=" text-[14px] font-normal text-info first-letter:uppercase">
              {row?.residentialType}
            </span>
            <span className=" text-[14px] font-normal text-info first-letter:uppercase">
              {row?.commercialType}
            </span>
          </div>
        </div>
      ),
      width: "200px",
    },

    {
      title: "Status",
      key: "id",
      render: (row) => (
        <>
          <PropertyStatus
            row={row}
            token={token}
            setUpdate={setUpdate}
            user={user}
          />
        </>
      ),
      width: "200px",
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-1">
        <CustomTable
          tableData={tableData}
          columns={columns}
          scroll={{
            x: "900px",
          }}
        />
      </div>
    </>
  );
};

export default PropertyResentTable;
