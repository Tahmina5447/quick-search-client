"use client";

import React, { useEffect, useState } from "react";
import BlogImageSlyder from "./BlogImageSlyder";
import { MdOutlineDateRange } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { blog } from "./BlogHome";
import BlogCard from "./BlogCard";
import BlogProperties from "./BlogProperties";
import { getOneByPath } from "../../../apis/blog.api";
import RelatedBlogs from "./RelatedBlogs";
import BlogDetailsSkeleton from "@/shared/Skeleton/BlogDetailsSkeleton";
import Link from "next/link";
import RecentBlog from "./RecentBlog";

const BlogDetails = ({ path }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await getOneByPath(path);

        if (res) {
          setBlog(res?.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path]);

  const dateObj = new Date(blog?.publishDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString(undefined, options);

  return (
    <div className=" mt-10">
      <div className="max-container">
        {loading ? (
          <>
            <BlogDetailsSkeleton />
          </>
        ) : (
          <>
            <div className=" flex pt-3 items-center text-sm font-medium text-gray-400 gap-1">
              <Link href={"/"}>Home</Link> / <Link href={"/blog"}>Blogs</Link> /{" "}
              <h2 className=" cursor-pointer text-gray-700">{blog?.title}</h2>
            </div>
            <div className=" flex my-5 items-start flex-col md:flex-row gap-5 justify-between">
              <div className=" md:w-[70%] w-full space-y-5 relative">
                <div className=" bg-white p-7 rounded-md shadow-md">
                  <BlogImageSlyder blog={blog} />
                  <div className=" mt-5">
                    <h2 className=" md:text-[30px] text-lg font-semibold">
                      {blog?.title}
                    </h2>
                    <div className=" flex md:items-center flex-col md:flex-row gap-5 my-4">
                      <div className=" flex items-center gap-3">
                        <div className=" w-[25px] h-[25px] bg-gray-200 flex items-center justify-center rounded-full">
                          <MdOutlineDateRange className=" text-gray-500 text-sm" />
                        </div>
                        <h3 className=" text-sm text-info">
                          Posted by {blog?.userDetails?.name} on {formattedDate}
                        </h3>
                      </div>
                      <div className=" flex items-center gap-3">
                        <div className=" w-[25px] h-[25px] bg-gray-200 flex items-center justify-center rounded-full">
                          <BsFileEarmarkText className=" text-gray-500 text-sm" />
                        </div>
                        <h3 className=" text-sm text-info">
                          {blog?.tags.map((item, index) => (
                            <span key={index}>{item}</span>
                          ))}
                        </h3>
                      </div>
                    </div>

                    <div className=" mt-5">
                      {blog?.description && (
                        <div
                          className="p-1 product-description"
                          dangerouslySetInnerHTML={{
                            __html: blog?.description,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
                <RelatedBlogs category={blog?.category} />
              </div>
              <div className=" md:w-[30%] w-full sticky top-[90px]">
                <div className="">
                  <div>
                    <BlogProperties />
                  </div>
                  <RecentBlog />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
