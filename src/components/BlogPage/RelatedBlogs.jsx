"use client";

import React, { useEffect, useState } from "react";
import { multiFilterBlogs } from "../../../apis/blog.api";
import BlogCard from "./BlogCard";

const RelatedBlogs = ({ category }) => {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const filterFun = async () => {
      const data = { category:category};
      const res = await multiFilterBlogs(data);
      if (res) {
        setFilterData(res);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    filterFun();
  }, [category]);

  const blogData = filterData?.data?.data;

  return (
    <div className=" pb-8">
      <h2 className=" text-2xl font-semibold">Related Posts</h2>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-4">
        {blogData?.slice(0,3).map((item, index) => (
        <BlogCard key={index} item={item} />
      ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
