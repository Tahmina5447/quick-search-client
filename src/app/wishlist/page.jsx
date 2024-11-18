"use client";

import React, { useContext } from "react";
import { ContextData } from "../../../context/dataProviderContext";
import BreakCum from "@/shared/BreakCum";
import PropertiesCard2 from "@/components/UserDashboard/MyProperties/PropertiesCard2";
import { useRouter } from "next/navigation";

const Page = () => {
  const { wishlist } = useContext(ContextData);
  const router = useRouter()

  return (
    <div className="pt-20">
      <BreakCum title={"Wishlist"}></BreakCum>
      <div className="md:my-10 my-5">
        <div className="max-container">
          <h2 className=" text-[20px] font-semibold">My Wishlist</h2>
          <div>
            {wishlist?.items?.length ? (
              <div className=" grid lg:grid-cols-2 my-5 grid-cols-1 md:grid-cols-2 gap-7">
                {wishlist?.items?.map((item, index) => (
                  <PropertiesCard2 key={index} item={item} />
                ))}
              </div>
            ) : (
              <div className=" my-20 flex items-center flex-col justify-center">
                <h2 className=" text-[25px] font-semibold text-gray-500">
                  Wishlist Not Found!
                </h2>
                <button
                  onClick={() => router.push("/property")}
                  className="bg-success text-white px-5 py-3 rounded-full text-sm"
                >
                  View Properties
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
