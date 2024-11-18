"use client"

import React, { useContext } from "react";

import Image from "next/image";
import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";

const BlogProperties = () => {
  const { filterData } = useContext(ContextData);

  const router = useRouter()


  return (
    <div className=" bg-white shadow-sm rounded-md p-5">
      <h2 className=" text-base font-medium">Latest Properties</h2>

      <div className=" flex items-center gap-4 flex-col mt-3">
        {filterData?.data?.data?.slice(0,6).map((item, index) => {
          return (
            <div
              key={index}
              className="shadow w-full hover:shadow hover:shadow-blue-100 sm:gap-2  p-1 flex items-center flex-row duration-200 border rounded-md bg-white "
            >
              <div
                onClick={() => router.push(`/property/${item?._id}`)}
                className="relative md:w-[40%] w-full h-[100px] overflow-hidden border rounded-md"
              >
                <Image
                  src={item?.images?.[0]}
                  width={800}
                  height={800}
                  alt="properties"
                  className=" w-full cursor-pointer h-full object-cover rounded-md"
                />
              </div>
              <div className="p-1 md:w-[60%] w-full">
                <h2
                  onClick={() => router.push(`/property/${item?._id}`)}
                  className="font-semibold hover:text-primary text-base duration-300 cursor-pointer"
                >
                  {item.title}
                </h2>
                <div className=" flex items-center justify-between mt-2">
                  <h2 className=" text-base text-primary font-bold flex items-center">
                    <span className="text-[15px]">{"৳"}</span>
                    {item.price}
                    {item?.purpose === "rent" && (
                      <span className=" font-medium text-[12px] mt-2">
                        /month
                      </span>
                    )}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogProperties;
