"use client";

import BreakCame from "@/shared/BreakCame";
import ColumnChart from "@/shared/Chart/ColumnChart";
import DashboardCard from "@/shared/DashboardCard";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineGold } from "react-icons/ai";
import { FaBan, FaCartArrowDown, FaLandmark, FaSellcast } from "react-icons/fa";
import {
  MdOutlinePendingActions,
  MdOutlinePublishedWithChanges,
  MdOutlineUnpublished,
} from "react-icons/md";
import { TbIrregularPolyhedron } from "react-icons/tb";
import { useRouter } from "next/navigation";
// import { dashboardData, dashboardDataUser } from "../../../apis/dashboard.api";
import Loader from "@/shared/Loader";
import UserColumnChart from "@/shared/Chart/UserColumnChart";
import PieChart from "@/shared/Chart/PieChart";

function SellersDashboard() {
  const router = useRouter();

  return (
    <div>
      hello seller dashboard!
      {/* {loading ? (
        <div className=" h-[500px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div>
          <div>
            <h3 className=" text-[17px] font-medium">Welcome, Roy</h3>
            <h2 className=" text-[25px] font-semibold"> Account Overview</h2>
            <BreakCame type={"/user"} data={[]} />
          </div>

          <div className=" mt-8">
            <h2 className=" text-base mb-2 font-semibold">Properties </h2>
            <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 md:gap-5">
              <DashboardCard
                {...{
                  iconColor: "bg-green-500",
                  title: "Total Properties",
                  className: "border-b-green-500",
                  amount: data?.totalProperties,
                  icon: <FaLandmark className=" text-white text-[20px]" />,
                }}
                value=""
                handelClick={add}
              />
              <DashboardCard
                {...{
                  iconColor: "bg-red-500",
                  title: "Pending Properties",
                  className: "border-b-red-500",
                  amount: data?.pendingProperties,
                  icon: <MdOutlinePendingActions className=" text-white" />,
                }}
                value="pending"
                handelClick={add}
              />
              <DashboardCard
                {...{
                  iconColor: "bg-blue-500",
                  title: "Publish Properties",
                  className: "border-b-blue-500",
                  amount: data?.publishedProperties,
                  icon: (
                    <MdOutlinePublishedWithChanges className=" text-white" />
                  ),
                }}
                value="published"
                handelClick={add}
              />

              <DashboardCard
                {...{
                  iconColor: "bg-lime-700",
                  title: "Un Publish Properties",
                  className: "border-b-lime-700",
                  amount: data?.unpublishedProperties,
                  icon: <MdOutlineUnpublished className=" text-white" />,
                }}
                value="unPublished"
                handelClick={add}
              />

              <DashboardCard
                {...{
                  iconColor: "bg-red-700",
                  title: "Rejected Properties",
                  className: "border-b-red-700",
                  amount: data?.rejectedProperties,
                  icon: <FaBan className=" text-white" />,
                }}
                value="rejected"
                handelClick={add}
              />

              <DashboardCard
                {...{
                  iconColor: "bg-indigo-500",
                  title: "Sold  Properties",
                  className: "border-b-indigo-500",
                  amount: data?.soldOutProperties,
                  icon: <FaCartArrowDown className=" text-white" />,
                }}
                value="sold-out"
                handelClick={add}
              />
            </div>
          </div>

          {client && (
            <div className=" flex items-center md:flex-row flex-col gap-5 my-10">
              <div className=" bg-white shadow-md md:w-[60%] w-full rounded-lg p-2 md:p-5">
                <h2>Properties Status</h2>
                <div className=" grid grid-cols-1">
                  {chart1Data && <UserColumnChart data={chart1Data} />}
                </div>
              </div>
              <div className=" bg-white shadow-md md:w-[40%] w-full rounded-lg p-5">
                <h2>Properties Purpose</h2>
                <div className=" grid grid-cols-1">
                  <PieChart data={chart2} />
                </div>
              </div>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
}

export default SellersDashboard;
