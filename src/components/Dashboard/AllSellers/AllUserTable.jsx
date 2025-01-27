"use client";

import CustomTable from "@/shared/Table/CustomTable";
import Image from "next/image";
import React, { useState } from "react";
import UserAction from "./UserAction";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import RoleUpdate from "./RoleUpdate";
import { useRouter } from "next/navigation";
import UpdateVerified from "./UpdateVerified";
import { LuView } from "react-icons/lu";
import DeleteModal from "@/shared/Modal/DeleteModal";
import { USER_URL } from "../../../../apis/url";
import axios from "axios";
import UserStatus from "./UserStatus";
import UserTypeUpdate from "./UserTypeUpdate";

const AllUserTable = ({
  tableData,
  token,
  setUpdate,
  pageSize,
  currentPage,
}) => {
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
            src={row?.profileImgURL ? row?.profileImgURL : "/assets/user1.jpeg"}
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
      title: "Full Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row?.name}</span>
      ),
      width: "220px",
    },

    {
      title: "Email",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row?.email}</span>
      ),
    },
    {
      title: "Phone",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.phoneNumber}
        </span>
      ),
    },
    {
      title: "Address",
      key: "id",
      render: (row) => (
        <div className=" flex items-start flex-col">
          <span className=" text-[14px] font-normal text-info">
            {row?.address}
          </span>
          <div className=" flex items-start gap-1">
            <span className=" text-[14px] font-normal text-info">
              {row?.upazila}
            </span>
            <span className=" text-[14px] font-normal text-info">
              {row?.district},
            </span>
          </div>
          <span className=" text-[14px] font-normal text-info">
              {row?.division},
            </span>
        </div>
      ),
    },

    {
      title: "User Role",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] capitalize font-normal text-info">
          {row?.userRole}
        </span>
      ),
      width:"150px"
    },

    {
      title: "User Type",
      key: "id",
      render: (row) => (
        <UserTypeUpdate row={row} token={token} setUpdate={setUpdate} />
      ),
      width:"220px"
    },

    {
      title: "User Status",
      key: "id",
      render: (row) => (
        <UserStatus row={row} token={token} setUpdate={setUpdate} />
      ),
    },

    {
      title: "Action",
      key: "id",
      render: (row) => (
        <UserAction row={row} token={token} setUpdate={setUpdate} />
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
            x: "1300px",
          }}
        />
      </div>
    </>
  );
};

export default AllUserTable;
