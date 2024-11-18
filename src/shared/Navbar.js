// components/Navbar.js
"use client";
import React, { useContext, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import NavbarAvatar from "./NavbarAvatar";
// import { ContextData } from "../../context/dataProviderContext";
import { CiHome } from "react-icons/ci";
import { FaRegHeart, FaUsers } from "react-icons/fa";
import {
  MdOutlineContactPage,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { AiTwotonePropertySafety } from "react-icons/ai";
import CustomDrawer from "./Drawer/CustomDrawer";
import { CgMenuGridO } from "react-icons/cg";
import { TbLogs } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const link = [
    {
      title: "Home",
      url: "/",
      icon: <CiHome className=" text-[16px]" />,
    },
    {
      title: "About",
      url: "/about",
      icon: <FaUsers className=" text-[16px]" />,
    },
    {
      title: "Property",
      url: "/property",
      icon: <AiTwotonePropertySafety className=" text-[16px]" />,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: <TbLogs className=" text-[16px]" />,
    },
    {
      title: "Contact Us",
      url: "/contact",
      icon: <MdOutlineContactPage className=" text-[16px]" />,
    },
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleLogut = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div
      className={`${active
          ? " fixed bg-white top-0 left-0 w-full h-[80px] text-gray-700 z-[99] border-b shadow-sm transition duration-500 "
          : `w-full top-0 left-0 z-[99] h-[80px] text-gray-700 ${pathname === "/"
            ? " text-white"
            : " bg-white shadow-sm text-gray-700 z-[99]"
          }`
        }`}
    >
      <nav className={` `}>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-container">
          <div className="flex justify-between items-center h-[80px]">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="logo"
                  className=" w-[80px]"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 ">
                {link?.map((item, index) => (
                  <Link
                    key={index}
                    href={item?.url}
                    className={`px-1 py-2 text-sm font-semibold hover:text-success duration-200 ${item?.url === pathname
                        ? " text-success border-b-2 border-success rounded-b pb-1 rounded-none"
                        : ""
                      } `}
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className=" flex items-center gap-5">
              {/* {wishlist?.items?.length ? (
                <div className="relative md:block hidden">
                  <Link
                    href={"/wishlist"}
                    className=" text-[28px] relative font-bold mt-2"
                  >
                    <FaRegHeart />
                    <span className="w-[20px] absolute top-[-9px] right-[-8px] h-[20px] bg-primary text-white text-[11px] rounded-full flex items-center justify-center">
                      {wishlist?.items?.length}
                    </span>
                  </Link>
                </div>
              ) : (
                <></>
              )} */}

              <div className=" hidden md:block">
                <NavbarAvatar />
              </div>

              <div className="md:hidden flex items-center gap-3">
                <button
                  onClick={toggleDrawer}
                  className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  {pathname === "/" ? (
                    <CgMenuGridO
                      className={`text-3xl ${active ? " text-gray-700" : "text-white "
                        }`}
                    />
                  ) : (
                    <CgMenuGridO className={`text-3xl text-black`} />
                  )}
                </button>
                <div>
                  <NavbarAvatar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomDrawer
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          className=""
          width={247}
        >
          <div className=" relative h-screen p-5">
            <div className=" flex items-center flex-col justify-center">
              <div className=" m-2 w-[45px] h-[45px] rounded-full shadow-lg bg-gray-200 flex items-center gap-5 ">
                <Image
                  src={
                    user?.profile_image
                      ? user?.profile_image
                      : "/assets/user1.jpeg"
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

            <div className=" flex flex-col gap-1 mt-4 ">
              {link?.map((item, index) => (
                <Link
                  key={index}
                  href={item?.url}
                  className={`px-3 py-2 flex items-center gap-2 hover:text-white text-sm font-semibold rounded-md ${item?.url === pathname
                      ? " bg-primary text-white"
                      : " hover:bg-gray-300"
                    } `}
                >
                  {item?.icon} {item?.title}
                </Link>
              ))}
              <Link
                href={"/wishlist"}
                className={`px-3 py-2 flex items-center gap-2 hover:text-white text-sm font-semibold rounded-md ${pathname === "/wishlist"
                    ? " bg-primary text-white"
                    : " hover:bg-gray-300"
                  } `}
              >
                <FaRegHeart /> Wishlist
              </Link>
            </div>

            <div className=" absolute bottom-2 left-5 w-[82%]">
              <button
                onClick={() => handleLogut()}
                className=" duration-300 font-semibold px-5 w-full flex items-center gap-2 text-sm py-2 rounded-lg bg-primary/20 text-primary"
              >
                <LuLogOut size={16} className={" min-w-max mt-1"} />
                Logout
              </button>
            </div>
          </div>
        </CustomDrawer>
      </nav>
    </div>
  );
};

export default Navbar;
