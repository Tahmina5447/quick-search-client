"use client";

import Image from "next/image";
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";

function PropertyTop() {
  const { setCompletionStatusForSell, setPropertyTypeFilter, setRentFilter } =
    useContext(ContextData);

  const router = useRouter();

  const filteredGallery = [
    {
      title: "Selling",
      type: "purpose",
      value: "sell",
    },
    {
      title: "Residential",
      type: "propertyType",
      value: "residential",
    },
    {
      title: "Commercial",
      type: "propertyType",
      value: "commercial",
    },
    {
      title: "Land",
      type: "propertyType",
      value: "land",
    },
    {
      title: "Rent ",
      type: "purpose",
      value: "rent",
    },
    {
      title: "Ready ",
      type: "completionStatusForSell",
      value: "ready",
    },
    {
      title: "Under Construction ",
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

    router.push("/property");
  };

  return (
    <div className="md:my-[50px] my-5">
      <div className="max-container">
        <div className=" flex items-center md:flex-row flex-col gap-5 justify-between">
          <div className=" flex w-full md:items-center md:flex-row flex-col gap-6">
            <div>
              <Image
                src={"/assets/5-500x328.webp"}
                width={600}
                height={500}
                alt="home"
                className=" md:w-[400px] w-full rounded-md"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <h2 className=" text-[25px] font-semibold">Quick Search</h2>
              {/* <div className=" flex items-center gap-5 text-lg">
                <FaFacebookF />
                <FaYoutube />
                <IoLogoInstagram />
                <FaLinkedinIn />
                <FaPinterest />
              </div> */}
              <h3 className=" text-sm text-[#5c727d] w-[70%] font-medium">
                <span className=" text-gray-600">Address:</span>14/B,Level-3,BTI
                Primer Plaza, Plot-Cha 90/A Progoti Sarani, North Badda,
                Dhaka-1212, Bangladesh
              </h3>
              <h3 className="text-sm text-[#5c727d] font-medium">
                <span className=" text-gray-600">Email:</span>{" "}
                deshthikanaltd@gmail.com
              </h3>
              <h3 className="text-sm text-[#5c727d] font-medium">
                <span className=" text-gray-600">Mobile:</span> 01772808071
              </h3>
              {/* <h3 className="text-sm text-[#5c727d] font-medium">
                <span className=" text-gray-600">Phone:</span> 989 8988 8887
              </h3> */}
              <Link href="#contactUsButtonClick" smooth={true} duration={500}>
                <button className=" bg-primary duration-300 text-white py-2 px-5 rounded-md text-sm">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-[40%] w-full">
            <div className=" flex items-center gap-3 flex-wrap">
              {filteredGallery.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handelClick(item)}
                  className=" bg-primary/10 border border-primary  text-sm rounded-full py-2 px-5 hover:bg-primary hover:text-white duration-300"
                >
                  {item?.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex items-center mt-8 justify-between gap-10 flex-col w-full md:flex-row">
          <div className="w-full md:w-[70%] ">
            <p className=" text-[#5c727d] text-base ">
              Quick Search is a trusted name in the real estate industry. Our
              platform is designed to cater to the needs of property seekers and
              owners alike. Whether you are looking for your dream home, an
              investment opportunity, or a rental property, Quick Search
              provides a user-friendly and efficient solution.
            </p>
          </div>
          <div className=" md:w-[28%] flex flex-col gap-2 w-full justify-end">
            <h3 className=" text-base text-[#5c727d] font-medium">
              <span className=" text-gray-600">Website:</span>
              www.deshthikana.com
            </h3>
            <h3 className=" text-base text-[#5c727d] font-medium">
              <span className=" text-gray-600">comSkype:</span> myskypeid
            </h3>
            <h3 className=" text-base text-[#5c727d] font-medium">
              <span className=" text-gray-600">License:</span>TEXT 19977 8764
              656
            </h3>
            <h3 className=" text-base text-[#5c727d] font-medium">
              <span className=" text-gray-600">Our Taxes:</span> 0% taxes for
              all transaction
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyTop;
