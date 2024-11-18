import React from "react";

const DashboardCard = ({ title, amount, className, icon, iconColor = "" ,value="",handelClick=()=>{}}) => {
  return (
    <div onClick={()=>handelClick(value)} className={`bg-white p-3 border hover:scale-105 duration-300 cursor-pointer shadow-md rounded-md border-b-2 ${className}`}>
      <div className=" flex items-center justify-between">
        <div className="">
          <p className="md:text-sm text-xs text-slate-600 uppercase">{title}</p>
          <p className="font-bold md:text-[20px]"> {amount}</p>
        </div>
        <div>
          <div
            className={`${iconColor} h-12 w-12 rounded-md  flex justify-center items-center`}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
