"use client"

import React, { useContext } from "react";
import CustomDrawer from "@/shared/Drawer/CustomDrawer";
import sellerAuth from "@/shared/SecureRoute/sellerAuth";
import DashboardNav from "@/components/Dashboard/DashboardNav/DashboardNav";
import SellerDashboardSidebar from "@/components/Dashboard/DashboardLeftSidebar/SellerDashboardSidebar";

function Layout({ children }) {

  // const {drawerVisible,setDrawerVisible} = useContext(ContextData)

  return (
    <div className=" flex items-start bg-[#f9faff]">
      <div className=" hidden lg:block">
        <SellerDashboardSidebar />
      </div>

      {/* <CustomDrawer
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
        className=""
        width={247}
      >
        <DashboardSidebarUser />
      </CustomDrawer> */}

      <div className=" w-full h-screen overflow-y-auto">
        <DashboardNav />
        <div className="md:px-8 px-3 py-8">{children}</div>
      </div>
    </div>
  );
}

export default sellerAuth(Layout);
