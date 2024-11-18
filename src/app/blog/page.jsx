"use client"

import BlogPage from "@/components/BlogPage/BlogPage";
import BreakCum from "@/shared/BreakCum";
import React, { useState } from "react";

const Blog = () => {


  return (
    <div className="pt-20">
      <BreakCum title={"Blog"}></BreakCum>
      <BlogPage />
    </div>
  );
};

export default Blog;
