"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuLogOut, LuUsers } from "react-icons/lu";
import { MdOutlineContactPage, MdOutlineDashboard, MdOutlinePending } from "react-icons/md";
import { GiKnightBanner } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { TbHomeCog } from "react-icons/tb";
import SubMenu from "./SubMenu";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { RiAddCircleLine, RiBloggerLine, RiLockPasswordLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";

const DashboardSidebarAdmin = (props) => {
  const pathname = usePathname();
  const user=useSelector(selectUser)

  const router = useRouter()

  const isActive = (href) => {
    return pathname === href;
  };

  const subMenusList = [
    {
      name: "Manage Properties",
      icon: TbHomeCog,
      active: 17,
      activeData: "/dashboard/admin/properties",
      menus: [
        {
          title: "Add Properties",
          link: "/dashboard/admin/properties/add",
          icon: <RiAddCircleLine />,
        },
        {
          title: "All Properties",
          link: "/dashboard/admin/properties",
          icon: <TbHomeCog />,
        },
        {
          title: "My Properties",
          link: "/dashboard/admin/properties/my-properties",
          icon: <IoHomeOutline />,
        },
        {
          title: "Pending Properties",
          link: "/dashboard/admin/properties/pending",
          icon: <MdOutlinePending />,
        },
      ],
    },
  ];

  const subMenusListUser = [
    {
      name: "Manage Users",
      icon: LuUsers,
      active: 12,
      activeData: "/dashboard/admin/users",
      menus: [
        {
          title: "All Users",
          link: "/dashboard/admin/users",
          icon: <HiOutlineUserGroup />,
        },
        {
          title: "Gold Member",
          link: "/dashboard/admin/users/gold-member",
          icon: <FiUserCheck />,
        },
        {
          title: "Regular Member",
          link: "/dashboard/admin/users/regular-member",
          icon: <FiUser />,
        },
      ],
    },
  ];

  const subMenusListBlog = [
    {
      name: "Manage Blogs",
      icon: RiBloggerLine,
      active: 12,
      activeData: "/dashboard/admin/blogs",
      menus: [
        {
          title: "All Blogs",
          link: "/dashboard/admin/blogs",
          icon: <RiBloggerLine />,
        },
        {
          title: "Add Blog",
          link: "/dashboard/admin/blogs/add",
          icon: <RiAddCircleLine />,
        },
      ],
    },
  ];

  const subMenusListSetting = [
    {
      name: "Setting",
      icon: IoSettingsOutline,
      active: 14,
      activeData: "/dashboard/admin/setting",
      menus: [
        {
          title: "Banner Setting",
          link: "/dashboard/admin/setting/banner",
          icon: <GiKnightBanner  />,
        },
        {
          title: "Add property Contact",
          link: "/dashboard/admin/setting/contact",
          icon: <MdOutlineContactPage  />,
        },
        {
          title: "Change Password",
          link: "/dashboard/admin/setting/change-password",
          icon: <RiLockPasswordLine  />,
        },
      ],
    },
  ];

  const logoutFun = () => {
    localStorage.removeItem("token");
    setUpdate(Math.random());
    localStorage.removeItem("role");
    router.push("/");
  };


  return (
    <div className=" w-[17rem] max-w-[15rem] bg-white text-gray overflow-y-auto  md:h-screen h-full relative">
      <div className=" pt-5 flex items-center flex-col justify-center">
        <div className=" m-2 w-[45px] h-[45px] rounded-full shadow-lg bg-gray-200 flex items-center gap-5 ">
          <Image
            src={
              user?.profile_image
                ? user?.profile_image
                : '/assets/user1.jpeg'
            }
            width={60}
            height={60}
            alt="user"
            className=" rounded-full w-full h-full object-cover"
          />
        </div>
        <h2 className=" font-semibold text-gray-500">
          {user?.full_name}
        </h2>
        <h2 className="text-sm text-gray-500 first-letter:uppercase">
          {user?.email}
        </h2>
      </div>

      <div>
        <ul className=" px-3 mt-6 flex items-start w-full flex-col gap-2">
         

          <li className=" w-full">
            <Link
              href={"/admin"}
              className={`flex items-center text-sm py-3 relative group rounded-lg  font-semibold px-5 gap-2 ${
                isActive("/admin")
                  ? " bg-primary text-white"
                  : "text-slate-500 hover:bg-gray-200"
              }`}
            >
              <MdOutlineDashboard size={16} className={" min-w-max"} />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className=" w-full">
            <Link
              href={"/admin/my-profile"}
              className={`flex items-center text-sm py-3 relative group rounded-lg  font-semibold px-5 gap-2 ${
                isActive("/admin/my-profile")
                  ? " bg-primary text-white"
                  : "text-slate-500 hover:bg-gray-200"
              }`}
            >
              <FaRegUser size={16} className={" min-w-max"} />
              <span>My Profile</span>
            </Link>
          </li>
          {subMenusListUser?.map((menu,index) => (
            <div key={index} className="flex w-full flex-col gap-1">
              <SubMenu data={menu} />
            </div>
          ))}

          {subMenusList?.map((menu,index) => (
            <div key={index} className="flex w-full flex-col gap-1">
              <SubMenu data={menu} />
            </div>
          ))}

          {subMenusListBlog?.map((menu,index) => (
            <div key={index} className="flex w-full flex-col gap-1">
              <SubMenu data={menu} />
            </div>
          ))}

          {subMenusListSetting?.map((menu,index) => (
            <div key={index} className="flex w-full flex-col gap-1">
              <SubMenu data={menu} />
            </div>
          ))}

          <button onClick={()=>logoutFun()} className="text-slate-500  font-semibold px-5 w-full flex items-center gap-2 text-sm py-3 rounded-lg  hover:bg-gray-200">
            <LuLogOut size={16} className={" min-w-max"} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebarAdmin;
