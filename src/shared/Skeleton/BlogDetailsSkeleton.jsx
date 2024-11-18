import React from "react";

const BlogDetailsSkeleton = () => {
  return (
    <div className="p-2">
      <div className=" flex items-center md:flex-row flex-col justify-between"></div>

      <div className=" flex my-5 items-start flex-col md:flex-row gap-5 justify-between">
        <div className=" md:w-[70%] w-full space-y-5">
          <div className=" md:h-[450px]  h-[200px] w-full mx-auto rounded-md skeleton"></div>
          <div className="w-[90%] h-[24px] my-3 rounded skeleton"></div>
          <div className="w-[70%] h-[17px] my-3 rounded skeleton"></div>

          <div>
            <div className="w-[100%] h-[15px] my-3 mt-10 rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
            <div className="w-[100%] h-[15px] my-3  rounded skeleton"></div>
          </div>
        </div>
        <div className=" md:w-[30%] w-full sticky top-[90px]">
          <div className=" border rounded-md p-5">
            <div className="w-[100%] h-[65px] my-3 rounded skeleton"></div>
            <div className="w-[100%] h-[65px] my-3 rounded skeleton"></div>
            <div className="w-[100%] h-[65px] my-3 rounded skeleton"></div>
            <div className="w-[100%] h-[65px] my-3 rounded skeleton"></div>
            <div className="w-[100%] h-[65px] my-3 rounded skeleton"></div>
            <div className="w-[100%] h-[65px] my-3 rounded skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSkeleton;
