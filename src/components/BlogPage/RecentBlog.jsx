"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { multiFilterBlogs } from "../../../apis/blog.api";

const RecentBlog = () => {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(8);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const filterFun = async () => {
      const data = { limit };
      const res = await multiFilterBlogs(data);
      if (res) {
        setFilterData(res);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    filterFun();
  }, [limit]);

  return (
    <div className=" bg-white shadow-sm rounded-md p-5 mt-7">
      <h2 className=" text-base font-medium">Latest blog</h2>

      <div className=" flex items-center gap-4 flex-col mt-3">
        {filterData?.data?.data?.slice(0, 6).map((item, index) => {
          return (
            <div
              key={index}
              className="shadow w-full hover:shadow hover:shadow-blue-100 sm:gap-2  p-1 flex items-center flex-row duration-200 border rounded-md bg-white "
            >
              <div
                onClick={() => router.push(`/blog/${item?.path}`)}
                className="relative md:w-[40%] w-full h-[80px] overflow-hidden border rounded-md"
              >
                <Image
                  src={item?.images}
                  width={800}
                  height={800}
                  alt="properties"
                  className=" w-full cursor-pointer h-full object-cover rounded-md"
                />
              </div>
              <div className="p-1 md:w-[60%] w-full">
                <h2
                  onClick={() => router.push(`/blog/${item?.path}`)}
                  className="font-semibold hover:text-primary text-base duration-300 cursor-pointer"
                >
                  {item.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlog;
