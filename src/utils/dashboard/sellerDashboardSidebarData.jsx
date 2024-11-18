import { MdOutlineAddBox, MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import {IoHomeOutline } from "react-icons/io5";

export const sellerDashboardSidebarData = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard size={16} className={" min-w-max"} />,
    url: "/user",
    role: "user",
  },
  {
    name: "My Profile",
    icon: <FaRegUser size={16} className={" min-w-max"} />,
    url: "/user/my-profile",
    role: "user",
  },
  {
    name: "My Properties List",
    icon: <IoHomeOutline size={16} className={" min-w-max"} />,
    url: "/user/my-properties",
    role: "user",
  },
  {
    name: "Add New Properties",
    icon: <MdOutlineAddBox size={16} className={" min-w-max"} />,
    url: "/dashboard/sellers/add-properties",
    role: "user",
  },
  {
    name: "Change Password",
    icon: <RiLockPasswordLine size={16} className={" min-w-max"} />,
    url: "/user/change-password",
    role: "user",
  },
];
