"use client";

import BreakCame from "@/shared/BreakCame";
import ColumnChart from "@/shared/Chart/ColumnChart";
import PieChart from "@/shared/Chart/PieChart";
import DashboardCard from "@/shared/DashboardCard";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineGold, AiOutlineUserSwitch } from "react-icons/ai";
import {
  FaBan,
  FaCartArrowDown,
  FaLandmark,
  FaRegUser,
  FaSellcast,
  FaUserCheck,
  FaUserClock,
  FaUsers,
} from "react-icons/fa";
import {
  MdOutlineBedroomParent,
  MdOutlinePendingActions,
  MdOutlinePublishedWithChanges,
  MdOutlineUnpublished,
} from "react-icons/md";
import { RiShieldUserFill } from "react-icons/ri";
import { TbIrregularPolyhedron } from "react-icons/tb";
// import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";
import withAuth from "@/shared/SecureRoute/adminAuth";
// import { dashboardData, dashboardUserTotal } from "../../../apis/dashboard.api";
import Loader from "@/shared/Loader";
import AdminColumnChart from "@/shared/Chart/AdminColumnChart";
import RecentProperties from "@/components/Dashboard/Properties/RecentProperties";

function Admin() {
  const [client, setClient] = useState(false);
  // const {
  //   setPublishStatus,
  //   setPriority,
  //   token,
  //   currentlyLoggedIn,
  //   setStatus,
  //   setUserType,
  // } = useContext(ContextData);
  // const router = useRouter();
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const GetData = async () => {
  //     setLoading(true);
  //     const res = await dashboardData(token);
  //     const res2 = await dashboardUserTotal(token);
  //     if (res && res2) {
  //       setData(res?.data);
  //       setUser(res2?.data);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //     }
  //   };

  //   GetData();
  // }, [token]);

  // const chartData = data?.divisionWiseProperties?.map((item) => {
  //   return {
  //     day: item?._id,
  //     value: item?.properties,
  //   };
  // });

  // const chart1Data = [
  //   {
  //     day: "Pending",
  //     value: data?.pendingProperties,
  //   },
  //   {
  //     day: "Published",
  //     value: data?.publishedProperties,
  //   },
  //   {
  //     day: "Unpublished",
  //     value: data?.unpublishedProperties,
  //   },
  //   {
  //     day: "Rejected ",
  //     value: data?.rejectedProperties,
  //   },
  //   {
  //     day: "SoldOut ",
  //     value: data?.soldOutProperties,
  //   },
  //   {
  //     day: "gold",
  //     value: data?.goldProperties,
  //   },
  //   {
  //     day: "Regular",
  //     value: data?.regularProperties,
  //   },
  //   {
  //     day: "Rent ",
  //     value: data?.goldProperties,
  //   },
  //   {
  //     day: "Sale ",
  //     value: data?.regularProperties,
  //   },
  // ];

  // const chart2 = [
  //   {
  //     type: "Gold Users",
  //     value: user?.goldUsers || 0,
  //     amount: user?.goldUsers || 0,
  //   },
  //   {
  //     type: "Regular Users",
  //     value: user?.regularUsers || 0,
  //     amount: user?.regularUsers || 0,
  //   },
  // ];

  // useEffect(() => {
  //   setClient(true);
  // }, []);

  // const add = (value) => {
  //   router.push("/admin/properties");
  //   setPublishStatus(value);
  // };

 

  // const goldFunction = (value) => {
  //   router.push("/admin/properties");
  //   setPriority(value);
  // };

  // const userFun = (value) => {
  //   router.push("/admin/users");
  //   setUserType(value);
  // };

  // const userFun2 = (value) => {
  //   router.push("/admin/users");
  //   setStatus(value);
  // };

  return (
    <div>
      HELLO ADMIN DASHBOARD.
      {/* {loading ? (
        <div className=" h-[500px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div>
            <div>
              <h3 className=" text-[17px] font-medium">
                Welcome, {currentlyLoggedIn?.name}
              </h3>
              <h2 className=" text-[25px] font-semibold"> Account Overview</h2>
              <BreakCame type={"/admin"} data={[]} />
            </div>

            <div className=" mt-8">
              <h2 className=" text-base mb-2 font-semibold">Properties </h2>
              <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-5">
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
                    iconColor: "bg-primary",
                    title: "Publish Properties",
                    className: "border-b-primary",
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
                    title: "unPublished Properties",
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

                <DashboardCard
                  {...{
                    iconColor: "bg-pink-500",
                    title: "Regular Properties",
                    className: "border-b-pink-500",
                    amount: data?.regularProperties,
                    icon: <TbIrregularPolyhedron className=" text-white" />,
                  }}
                  value="regular"
                  handelClick={goldFunction}
                />

                <DashboardCard
                  {...{
                    iconColor: "bg-violet-500",
                    title: "Gold Properties",
                    className: "border-b-violet-500",
                    amount: data?.goldProperties,
                    icon: <AiOutlineGold className=" text-white" />,
                  }}
                  value="gold"
                  handelClick={goldFunction}
                />
              </div>
            </div>

            <div className=" mt-5">
              <h2 className=" text-base mb-2 font-semibold">Users </h2>
              <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-5">
                <DashboardCard
                  {...{
                    iconColor: "bg-lime-500",
                    title: "Total Users",
                    className: "border-b-lime-500",
                    amount: user?.totalUsers,
                    icon: <FaUsers className=" text-white text-[20px]" />,
                  }}
                  value=""
                  handelClick={userFun}
                />

                <DashboardCard
                  {...{
                    iconColor: "bg-cyan-500",
                    title: "Total Seller ",
                    className: "border-b-cyan-500",
                    amount: user?.totalSellers,
                    icon: <AiOutlineUserSwitch className=" text-white" />,
                  }}
                  value=""
                  handelClick={userFun}
                />

                <DashboardCard
                  {...{
                    iconColor: "bg-amber-500",
                    title: "Gold Users",
                    className: "border-b-amber-500",
                    amount: user?.goldUsers,
                    icon: <RiShieldUserFill className=" text-white " />,
                  }}
                  value="gold"
                  handelClick={userFun}
                />
                <DashboardCard
                  {...{
                    iconColor: "bg-cyan-700",
                    title: "Regular Users",
                    className: "border-b-cyan-700",
                    amount: user?.regularUsers,
                    icon: <FaRegUser className=" text-white" />,
                  }}
                  value="regular"
                  handelClick={userFun}
                />
               
              </div>
            </div>

            {client && (
              <div className=" flex items-center md:flex-row flex-col gap-5 my-10">
                <div className=" bg-white shadow-md md:w-[60%] w-full rounded-lg p-2 md:p-5">
                  <h2>Properties Chart</h2>
                  <div className=" grid grid-cols-1">
                    {chartData && <ColumnChart data={chartData} />}
                  </div>
                </div>
                <div className=" bg-white shadow-md md:w-[40%] w-full rounded-lg p-5">
                  <h2>User Chart</h2>
                  <div className=" grid grid-cols-1">
                    <PieChart data={chart2} />
                  </div>
                </div>
              </div>
            )}

            {client && (
              <div className=" flex items-center md:flex-row flex-col gap-5 my-10">
                <div className=" bg-white shadow-md w-full rounded-lg ">
                  <div className=" p-5">
                    <h2>Recent Pending Properties</h2>
                  </div>
                  <div className=" grid grid-cols-1">
                    <RecentProperties />
                  </div>
                </div>
              </div> 
            )}
          </div>
        </>
      )} */}
    </div>
  );
}

export default withAuth(Admin);
