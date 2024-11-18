"use client"

import React, { useEffect, useState } from "react";
import home1 from "../../../public/assets/home/home1.avif";
import home2 from "../../../public/assets/home/home2.avif";
import PropertiesCard from "../Properties/PropertiesCard";
import { FilterPropertyHome, propertiesGet } from "../../../apis/properties.api";

function SimilarListings({ data }) {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const body = {
        propertyType:data?.propertyType
      }
      const res = await FilterPropertyHome(body);
      if (res) {
        setFilterData(res);
        setLoading(false);
      }
    };

    if (data) {
      GetData();
    }
  }, [data]);

  return (
    <div className=" my-8">
      <h2 className=" text-xl font-semibold">Similar Listings</h2>
      <div className=" grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10 mt-5 ">
        {filterData?.data?.data?.slice(0,2)?.map((item, index) => (
          <PropertiesCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SimilarListings;
