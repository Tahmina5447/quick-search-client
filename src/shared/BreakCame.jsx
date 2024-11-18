import Link from "next/link";
import React from "react";

const BreakCame = ({ type, data }) => {
  return (
    <div className="mt-2 flex text-sm gap-1 text-gray-500">
      <Link href={type} className=" text-gray-400">Dashboard</Link>
      {data?.length >= 1 ? " / " : null}
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          {data?.length - 1 === index ? (
            <span className=" text-gray-900">{item.title}</span>
          ) : (
            <Link className=" text-gray-400" href={`${type}/${item?.url}`}>{item.title}</Link>
          )}
          {index < data?.length - 1 && data?.length === 2 ? " / " : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreakCame;
