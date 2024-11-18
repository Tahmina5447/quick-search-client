"use client";

import { Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import NavbarAvatar, { adminLinkData, sellerLinkData } from "@/shared/NavbarAvatar";
import { useRouter } from "next/navigation";

function DashboardNav() {
  const [popupShow, setPopupShow] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));


  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  const sellerContent = (
    <div className=" w-[250px] p-0">
      <div>
        <ul className="flex items-start w-full flex-col gap-2">
          {sellerLinkData.map((item, index) => (
            <li key={index} className=" w-full">
              <button
                onClick={() => router.push(item?.url)}
                className={`flex items-center w-full hover:pl-7 text-sm py-3 hover:bg-primary  hover:text-white  relative group rounded-lg duration-200  font-semibold px-5 gap-2`}
              >
                {item?.icon}
                <span className="">{item?.name}</span>
              </button>
            </li>
          ))}
          <button
            onClick={() => handleLogout()}
            className="text-slate-500 duration-300 hover:pl-7 font-semibold px-5 w-full flex items-center gap-2 text-sm py-3 rounded-lg  hover:bg-primary hover:text-white"
          >
            <LuLogOut size={16} className={" min-w-max"} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );

  const adminContent = (
    <div className=" w-[250px] p-0">
      <div>
        <ul className="flex items-start w-full flex-col gap-2 duration-200">
          {adminLinkData.map((item, index) => (
            <li key={index} className=" w-full">
              <button
                onClick={() => router.push(item?.url)}
                className={`flex items-center hover:pl-7 w-full text-sm py-3 hover:bg-primary hover:text-white m-0 relative group rounded-lg duration-300  font-semibold px-5 gap-2`}
              >
                {item?.icon}
                <span>{item?.name}</span>
              </button>
            </li>
          ))}
          <button
            onClick={() => handleLogout()}
            className="text-slate-500 hover:pl-7  duration-300 font-semibold px-5 w-full flex items-center gap-2 text-sm py-3 rounded-lg  hover:bg-primary hover:text-white"
          >
            <LuLogOut size={16} className={" min-w-max"} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-full flex items-center justify-center h-[80px] bg-white shadow-lg">
      <div className=" flex items-center w-full justify-between px-5 gap-2">
        <Link href={"/"}>
          <Image
            src={"/assets/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className=" w-[60px]"
          />
        </Link>

        <div className="flex justify-center items-center gap-3">
          <div className="first-letter:uppercase bg-primary/15 px-3 text-sm py-1 text-gray-500 rounded-full">
            {user?.user_role}
          </div>
          <div className=" hidden md:block">
            {user?.user_role === "seller" ? (
              <>
                <Popover
                  open={popupShow}
                  onOpenChange={handleOpenChange}
                  content={sellerContent}
                  placement="bottomRight"
                  trigger="click"
                >
                  <img
                    src={
                      user?.profile_image
                        ? user?.profile_image
                        : "/assets/user1.jpeg"
                    }
                    width={60}
                    height={60}
                    alt="user"
                    className=" object-cover cursor-pointer w-[35px] h-[35px] rounded-full"
                  />
                </Popover>
              </>
            ) : (
              <>
                <Popover
                  open={popupShow}
                  onOpenChange={handleOpenChange}
                  content={adminContent}
                  placement="bottomRight"
                  trigger="click"
                >
                  <Image
                    src={
                      user?.profile_image
                        ? user?.profile_image
                        : "/assets/user1.jpeg"
                    }
                    width={60}
                    height={60}
                    alt="user"
                    className=" object-cover cursor-pointer w-[35px] h-[35px] rounded-full"
                  />
                </Popover>
              </>
            )}
          </div>
          <button
            onClick={() => setDrawerVisible(true)}
            className=" block md:hidden"
          >
            <Image
              src={
                user?.profile_image
                  ? user?.profile_image
                  : "/assets/user1.jpeg"
              }
              width={60}
              height={60}
              alt="user"
              className=" object-cover cursor-pointer w-[35px] h-[35px] rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
