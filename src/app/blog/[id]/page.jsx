import BlogDetails from "@/components/BlogPage/BlogDetails";
import React from "react";

const page = ({params}) => {

  const path = params.id;

  return (
    <div className="relative pt-14">
      <BlogDetails path={path}/>
    </div>
  );
};

export default page;
