import { MdOutlineAddBox, MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { TbHomeCog } from "react-icons/tb";

export const adminDashboardSidebar = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard size={16} className={" min-w-max"} />,
    url: "/admin",
    role: "admin",
  },
  {
    name: "My Profile",
    icon: <FaRegUser size={16} className={" min-w-max"} />,
    url: "/admin/my-profile",
    role: "admin",
  },
  {
    name: "All Users",
    icon: <LuUsers size={16} className={" min-w-max"} />,
    url: "/admin/all-user",
    role: "admin",
  },
  {
    name: "All Properties",
    icon: <TbHomeCog size={16} className={" min-w-max"} />,
    url: "/admin/all-properties",
    role: "admin",
  },
  {
    name: "My Properties List",
    icon: <IoHomeOutline size={16} className={" min-w-max"} />,
    url: "/admin/my-properties",
    role: "admin",
  },
  {
    name: "Add New Properties",
    icon: <MdOutlineAddBox size={16} className={" min-w-max"} />,
    url: "/admin/add-properties",
    role: "admin",
  },
  {
    name: "Change Password",
    icon: <RiLockPasswordLine size={16} className={" min-w-max"} />,
    url: "/admin/change-password",
    role: "admin",
  },
];
