"use client";

import CustomTable from "@/shared/Table/CustomTable";
import Image from "next/image";
import React, { useState } from "react";
import BlogAction from "./BlogAction";
import BlogStatus from "./BlogStatus";

const BlogTable = ({ tableData, token, setUpdate, pageSize, currentPage }) => {
  const startIndex = (currentPage - 1) * pageSize;

  const columns = [
    {
      title: "S/N",
      key: "id",
      render: (row, record, index) => (
        <span className=" text-[14px] font-normal text-info">
          {startIndex + index + 1}
        </span>
      ),
      width: "20px",
    },
    {
      title: "Image",
      render: (row) => (
        <>
          <Image
            src={row?.images ? row?.images : "/assets/user1.jpeg"}
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
        <span className=" text-[14px] font-normal text-info">{row?.title}</span>
      ),
    },

    {
      title: "Category",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row?.category}</span>
      ),
    },

    {
      title: " Sort Description",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row?.shortDescription?.slice(0,38)}...</span>
      ),
    },

    {
      title: "Date",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row?.publishDate.slice(0,10)}</span>
      ),
    },

    {
      title: "Blog Status",
      key: "id",
      render: (row) => (
        <BlogStatus row={row} token={token} setUpdate={setUpdate} />
      ),
    },

    {
      title: "Action",
      key: "id",
      render: (row) => (
        <BlogAction row={row} token={token} setUpdate={setUpdate} />
      ),
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-1">
        <CustomTable
          tableData={tableData}
          columns={columns}
          scroll={{
            x: "1200px",
          }}
        />
      </div>
    </>
  );
};

export default BlogTable;
