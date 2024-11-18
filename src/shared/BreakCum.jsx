import Image from "next/image";
import Link from "next/link";
import React from "react";

const BreakCum = ({ title }) => {
  return (
    <div className="">
      <div className=" relative">

        <Image src={"/assets/inner-pagebg.jpg"} width={1200} height={500} alt="banner" className=" w-full h-[250px]" />

        <div className=" absolute bg-black/45 text-white top-0 left-0 w-full h-full flex items-center justify-center gap-5 flex-col py-10">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Link href={"/"}>Home</Link> /{" "}
            <h3 className=" text-gray-300">{title}</h3>
          </div>
          <h2 className=" md:text-5xl text-2xl font-semibold mt-4">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default BreakCum;
