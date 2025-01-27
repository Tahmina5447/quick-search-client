import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";

const StatusButton = ({ status }) => {
  return (
    <div className="flex gap-2 justify-center">
      <p
        className={`${
          status === "pending" ? "bg-warning" : "bg-success"
        } rounded text-xs py-0.5 text-white font-semibold flex items-center  justify-center uppercase w-16`}
      >
        {status}
      </p>
      <button
        className={`${
          status === "active" ? "text-warning" : "text-success"
        } text-base`}
      >
        {status === "pending" ? <MdOutlineDone /> : <MdOutlinePending />}
      </button>
    </div>
  );
};

export default StatusButton;
