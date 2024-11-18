import React from "react";

import Image from "next/image";

const FeaturedCard = ({ data }) => {
  return (
    <div className="flex gap-3.5 mt-5">
      <div className="w-[55%]">
        <Image
          width={1000}
          height={1000}
          alt={"FeaturedCard"}
          className="h-[80px] w-full rounded object-cover"
          src={data?.image}
        />
      </div>
      <div className="">
        <h1 className="text-sm font-medium mb-.5">{data?.title}</h1>
        <p className="text-[13px] font-medium text-primary">{data?.price}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
