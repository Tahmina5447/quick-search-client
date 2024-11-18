"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { multiFilterBlogs } from "../../../apis/blog.api";
import BlogSkeleton from "@/shared/Skeleton/BlogSkeleton";
import { useRouter } from "next/navigation";

export const blog = [
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    images: ["/assets/blog/blog.webp"],
    status: "published",
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    status: "published",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    status: "published",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    status: "published",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten ...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    status: "published",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten ...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    status: "published",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten ...",
  },
  {
    _id: 123,
    title: "Search widget on the right",
    date: "September 8, 2017",
    status: "published",
    images: ["/assets/blog/blog.webp"],
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten ...",
  },
];

export const blogCategory = [
  {
    title: "Residential",
    value: "Residential",
  },
  {
    title: "Land",
    value: "Land",
  },
  {
    title: "Commercial",
    value: "Commercial",
  },
  {
    title: "Office",
    value: "Office",
  },
  {
    title: "Shop",
    value: "Shop",
  },
  {
    title: "Apartment",
    value: "Apartment",
  },
  {
    title: "Building",
    value: "Building",
  },
  {
    title: "Factory",
    value: "Factory",
  },
  {
    title: "Duplex",
    value: "Duplex",
  },
  {
    title: "Restaurant",
    value: "Restaurant",
  },
  {
    title: "Hostel",
    value: "Hostel",
  },
  {
    title: "Villa",
    value: "Villa",
  },
  {
    title: "Bungalow",
    value: "Bungalow",
  },
];


const BlogHome = () => {
  const [active, setActive] = useState();
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(8);
  const router = useRouter()

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
    <div className=" py-5 md:py-10 bg-white">
      <div className="max-container">
        <div className=" text-center">
          <h2 className="md:text-4xl mt-3 text-xl font-semibold text-center">
            Latest Blog
          </h2>
          <p className="text-sm md:text-base max-w-[700px] mx-auto text-center text-black/80 mt-3">
            These are the latest blog in the Sales category. You can create the
            list using the “latest listing shortcode” and show items by specific
            categories.
          </p>
        </div>

        <div className=" flex items-center gap-3 flex-wrap justify-center mt-5 ">
          {blogCategory?.slice(0,8)?.map((item, index) => (
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

            <button
              onClick={() => router.push("/blog")}
              className=" border-2 flex items-center gap-2 border-primary text-sm hover:bg-primary hover:text-white duration-200 font-semibold py-1 px-5 rounded-md"
            >
              See More
            </button>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
