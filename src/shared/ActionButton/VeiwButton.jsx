import Link from "next/link";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";

const VeiwButton = () => {
    const handleView=()=>{

    }
  return (
    <>
      <Link href={''}>
        <IoEyeSharp className="text-base" />
      </Link>
    </>
  );
};

export default VeiwButton;
