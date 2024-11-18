"use client";
import { Popover } from "antd";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaRegHeart, FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LuLogOut, LuUsers } from "react-icons/lu";
import { MdOutlineAddBox, MdOutlineDashboard } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
// import { ContextData } from "../../context/dataProviderContext";
import AuthModal from "./Modal/AuthModal/AuthModal";
import profileImg from "../../public/assets/team/agent-dallas-4-500x328.webp";
import { adminDashboardSidebar } from "@/utils/dashboard/adminSidebar";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "@/redux/features/auth/authSlice";

export const sellerLinkData = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard size={16} className={" min-w-max"} />,
    url: "/dashboard/seller",
  },
  {
    name: "My Profile",
    icon: <FaRegUser size={16} className={" min-w-max"} />,
    url: "/dashboard/seller/my-profile",
  },
  {
    name: "Manage Properties",
    icon: <IoHomeOutline size={16} className={" min-w-max"} />,
    url: "/dashboard/seller/my-properties",
  },
];

export const adminLinkData = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard size={16} className={" min-w-max"} />,
    url: "/dashboard/admin",
  },
  {
    name: "My Profile",
    icon: <FaRegUser size={16} className={" min-w-max"} />,
    url: "/dashboard/admin/my-profile",
  },
  {
    name: "Manage Users",
    icon: <LuUsers size={16} className={" min-w-max"} />,
    url: "/dashboard/admin/users",
  },
  {
    name: "Manage Properties",
    icon: <IoHomeOutline size={16} className={" min-w-max"} />,
    url: "/dashboard/admin/properties",
  },
];

function NavbarAvatar() {
  const [popupShow, setPopupShow] = useState(false);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const user = useSelector(selectUser);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };
 
  const handleLogout = () => {
    dispatch(logout());
    router.push('/')
    
  };

  const contentSeller = (
    <div className=" w-[200px] p-0">
      <div>
        <ul className="flex items-start w-full flex-col gap-2">
          {sellerLinkData.map((item, index) => (
            <li key={index} className=" w-full">
              <button
                onClick={() => router.push(item?.url)}
                className={`flex items-center w-full hover:pl-7  text-sm py-3 hover:bg-primary  hover:text-white  relative group rounded-lg duration-200  font-semibold px-5 gap-2`}
              >
                {item?.icon}
                <span className="">{item?.name}</span>
              </button>
            </li>
          ))}
          <button
            onClick={() => handleLogout()}
            className="text-slate-500 hover:pl-7 duration-300 font-semibold px-5 w-full flex items-center gap-2 text-sm py-3 rounded-lg  hover:bg-primary hover:text-white"
          >
            <LuLogOut size={16} className={" min-w-max"} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );

  const contentAdmin = (
    <div className=" w-[200px] p-0">
      <div>
        <ul className="flex items-start w-full flex-col gap-2 duration-200">
          {adminLinkData.map((item, index) => (
            <li key={index} className=" w-full">
              <button
                onClick={() => router.push(item?.url)}
                className={`flex items-center hover:pl-7 w-full  text-sm py-3 hover:bg-primary hover:text-white m-0 relative group rounded-lg duration-300  font-semibold px-5 gap-2`}
              >
                {item?.icon}
                <span>{item?.name}</span>
              </button>
            </li>
          ))}
          <button
            onClick={() => handleLogout()}
            className="text-slate-500 hover:pl-7 duration-300 font-semibold px-5 w-full flex items-center gap-2 text-sm py-3 rounded-lg  hover:bg-primary hover:text-white"
          >
            <LuLogOut size={16} className={" min-w-max"} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      {!user?.user_role ? (
        <>
          <div className="flex items-center gap-2">
            <Link
              href={"/auth/register"}
              className=" px-2 py-1.5 text-sm font-medium bg-primary text-white rounded-md"
            >
              Sale Property
            </Link>

            <Link
              href={"/auth/login"}
              className="px-2 py-1.5 text-sm font-medium bg-primary text-white rounded-md"
            >
              {/* <FaUserCircle className=" text-[28px]" /> */}
              Login
            </Link>
          </div>
        </>
      ) : (
        <>
          {user?.user_role === "seller" ? (
            <>
              <Popover
                open={popupShow}
                onOpenChange={handleOpenChange}
                content={contentSeller}
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
                content={contentAdmin}
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
          )}
        </>
      )}
    </div>
  );
}

export default NavbarAvatar;
