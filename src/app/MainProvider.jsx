"use client";

import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

const MainProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <Provider store={store}>
      <>
        {pathName.includes("dashboard") ||
        pathName.includes("auth") ? (
          <></>
        ) : (
          <div className="absolute top-0 z-50 w-full">
            <Navbar />
          </div>
        )}

        {children}

        {/* {pathName.includes("admin") ||
        pathName.includes("user") ||
        pathName.includes("auth") ? (
          <></>
        ) : (
          <Footer />
        )} */}
      </>
    </Provider>
  );
};

export default MainProvider;
