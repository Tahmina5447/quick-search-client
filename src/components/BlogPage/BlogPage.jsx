"use client";

import React, { useEffect, useState } from "react";
import { blog, blogCategory } from "./BlogHome";
import BlogCard from "./BlogCard";
import { multiFilterBlogs } from "../../../apis/blog.api";
import BlogSkeleton from "@/shared/Skeleton/BlogSkeleton";

const BlogPage = () => {
  const [active, setActive] = useState();
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(16);

  useEffect(() => {
    setLoading(true);
    const filterFun = async () => {
      const data = {isPublished:true, limit, category: active };
      const res = await multiFilterBlogs(data);
      if (res) {
        setFilterData(res);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    filterFun();
  }, [limit, active]);

  const blogData = filterData?.data?.data;

  return (
    <div className="md:my-10 my-5">
      <div className="max-container">
        <div>
          <h2 className=" text-[25px] font-semibold">Blog Posts List</h2>
        </div>
        <div className=" flex items-center gap-3 flex-wrap justify-center md:justify-start mt-5 ">
          <button
            onClick={() => setActive("")}
            className={`py-2.5 px-5 md:w-[130px] w-auto rounded-md hover:text-primary duration-300 hover:bg-primary/20 md:text-sm text-xs font-medium bg-primary/10 ${
             active === "" ? "bg-primary/20 text-primary" : ""
            }`}
          >
            All
          </button>

          {blogCategory?.map((item, index) => (
            <button
              onClick={() => setActive(item?.title)}
              className={`py-2.5 px-5 md:w-[130px] w-auto rounded-md hover:text-primary duration-300 hover:bg-primary/20 md:text-sm text-xs font-medium bg-primary/10 ${
                item?.title === active ? "bg-primary/20 text-primary" : ""
              }`}
              key={index}
            >
              {item?.title}
            </button>
          ))}
        </div>

        <div className=" mt-8">
          {loading ? (
            <>
              <BlogSkeleton />
            </>
          ) : (
            <>
              {blogData?.length ? (
                <>
                  <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 ">
                    {blogData?.map((item, index) => (
                      <BlogCard key={index} item={item} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className=" w-full flex flex-col items-center justify-center h-full">
                    <div className=" w-full flex flex-col items-center justify-center mt-20">
                      <h2 className="font-medium text-error">No Blogs Found</h2>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className=" flex items-center justify-center py-5">
          {filterData?.data?.meta?.total >= limit && (
            <button
              onClick={() => setLimit(limit + 4)}
              className=" border-2 flex items-center gap-2 border-primary text-sm hover:bg-primary hover:text-white duration-200 font-semibold py-1 px-5 rounded-md"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
