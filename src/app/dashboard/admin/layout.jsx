"use client";

import DashboardSidebarAdmin from "@/components/Dashboard/DashboardLeftSidebar/AdminDashboardSidebar";
import CustomDrawer from "@/shared/Drawer/CustomDrawer";
import React from "react";
import AdminAuth from "@/shared/SecureRoute/adminAuth";
import DashboardNav from "@/components/Dashboard/DashboardNav/DashboardNav";

function Layout({ children }) {
  return (
    <div className=" flex items-start bg-[#f9faff]">
      <div className=" hidden lg:block">
        <DashboardSidebarAdmin />
      </div>

      {/* <CustomDrawer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} className="" width={247}>
        <DashboardSidebarAdmin />
      </CustomDrawer> */}

      <div className=" w-full h-screen overflow-y-auto">
        <DashboardNav/>
        <div className="md:px-8 px-3 pt-8  pb-10">{children}</div>
      </div>
    </div>
  );
}

export default AdminAuth(Layout);
