"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import { sellerDashboardSidebarData } from "@/utils/dashboard/sellerDashboardSidebarData";

const SellerDashboardSidebar = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const pathname = usePathname();
  const router = useRouter()
  const isActive = (href) => {
    return pathname === href;
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };


  return (
    <div className=" w-[16rem] max-w-[15rem] bg-white text-gray border-r border-r-gray-300 h-screen relative">
      <div className=" pt-5 flex items-center flex-col justify-center">
        <div className=" m-2 w-[45px] h-[45px] relative rounded-full shadow-lg bg-gray-200 flex items-center gap-5 ">
          <img
            src={
              user?.profile_image
                ? user?.profile_image
                :"/assets/user1.jpeg"
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
      </div>

      <div>
        <ul className=" px-3 mt-6 flex items-start w-full flex-col gap-2">
          {sellerDashboardSidebarData.map((item, index) => (
            <li key={index} className=" w-full">
              <Link
                href={item?.url}
                className={`flex items-center text-sm py-3 relative group rounded-lg  font-semibold px-5 gap-2 ${
                  isActive(item.url)
                    ? " bg-primary text-white"
                    : "text-slate-500 hover:bg-gray-200"
                }`}
              >
                {item?.icon}
                <span>{item?.name}</span>
              </Link>
            </li>
          ))}
          <button onClick={()=>handleLogout()} className="text-slate-500  font-semibold px-5 w-full flex items-center gap-2 text-sm py-3 rounded-lg  hover:bg-gray-200">
            <LuLogOut size={16} className={" min-w-max"} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SellerDashboardSidebar;
