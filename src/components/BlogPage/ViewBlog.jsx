"use client";

import React, { useEffect, useState } from "react";
import BlogImageSlyder from "./BlogImageSlyder";
import { MdOutlineDateRange } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { BLOG_URL } from "../../../apis/url";
import { getOneBlogs } from "../../../apis/blog.api";
import Loader from "@/shared/Loader";

const ViewBlog = ({ id }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await getOneBlogs(id);

        if (res) {
          setBlog(res?.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className=" flex my-5 max-w-[900px] mx-auto items-start flex-col md:flex-row gap-5 justify-between">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className=" w-full space-y-5 relative">
          <div className=" bg-white p-7 rounded-md shadow-md">
            <BlogImageSlyder blog={blog} />
            <div className=" mt-5">
              <h2 className=" md:text-[30px] text-lg font-semibold">
                {blog?.title}
              </h2>
              <div className=" flex items-center gap-5 my-4">
                <div className=" flex items-center gap-3">
                  <div className=" w-[25px] h-[25px] bg-gray-200 flex items-center justify-center rounded-full">
                    <MdOutlineDateRange className=" text-gray-500 text-sm" />
                  </div>
                  <h3 className=" text-sm text-info">
                    Posted by {blog?.userDetails?.name} on{" "}
                    {blog?.publishDate?.slice(0, 10)}
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
                    dangerouslySetInnerHTML={{ __html: blog?.description }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBlog;
