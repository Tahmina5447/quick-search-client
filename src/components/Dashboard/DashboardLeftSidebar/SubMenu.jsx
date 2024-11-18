"use client";

import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ContextData } from "../../../../context/dataProviderContext";

const SubMenu = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => {
    return pathname.slice(0, data?.active) === href;
  };

  const isActive2 = (href) => {
    return pathname === href;
  };

  const activeStyle = {
    // your active style

    color: "rgb(0, 106, 60)",
    background: "rgba(0, 106, 60, 0.08)",
    borderRight: "3px solid rgb(0, 106, 60)",
  };

  return (
    <>
      <li className={`w-full`} onClick={() => setSubMenuOpen((pre) => !pre)}>
        <div
          className={`flex items-center text-sm w-full cursor-pointer py-3 relative group rounded-lg  font-semibold px-5 gap-2 ${
            isActive(data?.activeData)
              ? " bg-primary text-white"
              : "text-slate-500 hover:bg-gray-200"
          }`}
        >
          <data.icon size={16} className="min-w-max" />
          <p className="flex-1 capitalize">{data.name}</p>
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        </div>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-3 rounded-md font-normal overflow-hidden"
      >
        {data.menus?.map((menu) => (
          <li key={menu} onClick={() => {setSubMenuOpen(true)}} className="">
            <Link
              href={menu?.link ? menu?.link : "/"}
              className={`flex items-center text-sm py-3 group relative group rounded-lg  px-5 gap-2 hover:bg-success/10 mb-1 duration-200 ${
                isActive2(menu?.link) ? " font-semibold bg-success/10" : " text-slate-500"
              }`}
            >
              <div className={` ${isActive2(menu?.link) ? "  " : "text-gray-500 "}`}>{menu?.icon}</div>
              {menu?.title}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
