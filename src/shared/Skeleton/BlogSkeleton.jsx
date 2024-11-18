import React from "react";

const BlogSkeleton = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <div key={index} className="p-2 rounded-md border">
          <div className="  h-[200px] w-full mx-auto rounded-md skeleton"></div>
          <div className=" w-full p-2 mx-auto">
            <div className=" flex items-center gap-2 justify-between">
              <div className="w-8/12 h-[15px] my-3 rounded skeleton"></div>
            </div>
            <div className="w-[90%] h-[10px] my-3 rounded skeleton"></div>
            <div className="w-10/12 h-[7px] my-3 rounded skeleton"></div>
            <div className=" flex items-center gap-2 justify-between">
              <div className="w-8/12 h-[15px] my-3 rounded skeleton"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
