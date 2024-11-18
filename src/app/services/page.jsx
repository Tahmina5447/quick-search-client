import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

const Service = () => {
  return (
    <> 
      <div className="flex items-center justify-center h-[80vh] bg-gray-100 pt-20">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is under development. Check back soon!
          </p>
          <div className="flex justify-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Service;
