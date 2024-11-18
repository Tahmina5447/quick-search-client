"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { MdChevronRight } from "react-icons/md";

const BlogCard = ({ item }) => {
  const router = useRouter();

  const dateObj = new Date(item?.publishDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString(undefined, options); 

  return (
    <div className=" shadow hover:shadow-lg hover:shadow-blue-100 duration-200 border p-1 rounded-md bg-white ">
      <div onClick={() => router.push(`/blog/${item?.path}`)} className=" overflow-hidden rounded-md">
        <Image
          src={item?.images}
          width={500}
          height={500}
          alt="properties"
          className=" w-full h-[200px] cursor-pointer hover:scale-105 duration-300 object-cover rounded-md"
        />
      </div>
      <div className="p-3">
        <h2
          onClick={() => router.push(`/blog/${item?.path}`)}
          className="font-semibold mt-2  cursor-pointer hover:text-primary duration-300 "
        >
          {item?.title}{" "}
        </h2>
        <p className=" text-xs font-normal text-gray-400 mt-2">{formattedDate}</p>

        <p className=" text-sm font-normal text-gray-400 mt-2">
          {item?.shortDescription?.slice(0,85)}...
        </p>
        <button onClick={() => router.push(`/blog/${item?.path}`)} className=" mt-3 font-medium text-sm flex items-center gap-1 hover:text-primary duration-300">
          Continue Reading <MdChevronRight className=" text-[18px] mt-[2px]"/>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
