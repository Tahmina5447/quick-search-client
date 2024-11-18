"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";

function BestProject() {
  const { setCompletionStatusForSell, setPropertyTypeFilter, setRentFilter } =
    useContext(ContextData);

    const router = useRouter()

  const filteredGallery = [
    {
      title: "Selling Properties",
      image: "/assets/home/home1.avif",
      type: "purpose",
      value: "sell",
    },
    {
      title: "Residential Properties",
      image: "/assets/home/home3.avif",
      type: "propertyType",
      value: "residential",
    },
    {
      title: "Commercial Properties",
      image: "/assets/home/home4.avif",
      type: "propertyType",
      value: "commercial",
    },
    {
      title: "Land",
      image: "/assets/home/home5.jpg",
      type: "propertyType",
      value: "land",
    },
    {
      title: "Rent Properties",
      image: "/assets/home/home7.jpg",
      type: "purpose",
      value: "rent",
    },
    {
      title: "Ready Properties",
      image: "/assets/home/home2.avif",
      type: "completionStatusForSell",
      value: "ready",
    },
    {
      title: "Under Construction Properties",
      image: "/assets/home/home7.jpg",
      type: "completionStatusForSell",
      value: "underConstruction",
    },
  ];

  const handelClick = (value) => {
    if (value?.type === "purpose") {
      setRentFilter(value?.value);
    }
    if (value?.type === "propertyType") {
      setPropertyTypeFilter(value?.value);
    }

    if (value?.type === "completionStatusForSell") {
      setCompletionStatusForSell(value?.value);
    }

    router.push("/property")

  };

  return (
    <div className=" md:my-10 py-5">
      <div className="max-container">
        <div className=" text-center">
          <h2 className="md:text-4xl mt-3 text-xl font-semibold text-center">
            Properties by Category
          </h2>
          <p className="text-gray-500 mt-2 md:w-[60%] mx-auto">
            Highlight the best of your properties by using the List Category
            shortcode. You can list specific properties categories, types,
            cities, areas.
          </p>
        </div>

        <div className=" mt-10">
          <div className="gallery" id="gallery">
            <div className="box-container">
              {filteredGallery?.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handelClick(item)}
                    className="relative img"
                  >
                    <Image
                      src={item?.image}
                      width={600}
                      height={600}
                      alt="baba"
                      className="w-full box h-full object-cover rounded-md shadow-xl"
                    />
                    <h1 className="font-bold lg:text-3xl md:text-xl text-white  title absolute bottom-3 left-5 right-0 mx-auto gallery-title">
                      {item?.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProject;
