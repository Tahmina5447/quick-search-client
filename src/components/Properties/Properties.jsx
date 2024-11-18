import {
  AppstoreOutlined,
  HomeOutlined,
  KeyOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React, { act, useEffect, useState } from "react";
import Image from "next/image";
import PropertiesCard from "./PropertiesCard";
import { FilterPropertyHome } from "../../../apis/properties.api";
import Loader from "@/shared/Loader";
import PropertySkeleton from "@/shared/Skeleton/PropertySkeleton";
import { FaLandmark } from "react-icons/fa";
import SmallLoader from "@/shared/SmallLoader";

const Properties = () => {
  const [active, setActive] = useState("rent");
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [purpose, setPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [limit, setLimit] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");

  const category = [
    {
      title: "rent",
      icon: <KeyOutlined className="text-[18px]" />,
      id: 1,
    },
    {
      title: "buy",
      icon: <AppstoreOutlined className="text-[18px]" />,
      id: 2,
    },
    {
      title: "land",
      icon: <FaLandmark className="text-[18px]" />,
      id: 3,
    },
  ];

  const filtersProperty = filterData?.data?.data;

  useEffect(() => {
    setLoading(true);
    const filterFun = async () => {
      const data = {
        publishStatus: "published",
        limit,
        purpose,
        propertyType,
        searchTerm,
      };
      const res = await FilterPropertyHome(data);
      if (res) {
        setFilterData(res);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    filterFun();
  }, [limit, propertyType, purpose, searchTerm]);

  const handelFilter = (title) => {
    setActive(title);
    if (title === "land") {
      setPropertyType("land");
    } else {
      if (title === "buy") {
        setPurpose("sell");
        setPropertyType("");
      } else {
        setPurpose("rent");
        setPropertyType("");
      }
    }
  };

  return (
    <div className="md:mt-36 mt-10">
      <div className="max-container">
        <div>
          <h2 className="md:text-4xl text-3xl font-semibold text-center">
            Latest Properties
          </h2>
          <h2 className="text-gray-500 mt-2 md:w-[60%] mx-auto text-center">
            These are the latest properties in the Sales category. You can
            create the list using the “latest listing shortcode” and show items
            by specific categories.
          </h2>
        </div>

        <div className=" flex items-center flex-col md:flex-row justify-between gap-5 my-5">
          <div className=" border-2 border-primary bg-white shadow-md flex items-center md:gap-4 justify-between rounded-full p-1.5">
            {category?.map((item, index) => {
              return (
                <button
                  onClick={() => handelFilter(item.title)}
                  key={index}
                  className={`flex md:text-base text-sm font-bold capitalize items-center justify-between gap-1 py-2 px-5 rounded-full ${
                    item?.title === active
                      ? " bg-primary text-white"
                      : " border border-transparent text-gray-400"
                  }`}
                >
                  {item.icon} {item.title}
                </button>
              );
            })}
          </div>
          <div className=" md:w-auto  w-full relative md:flex hidden">
            <div className="p-1.5 border-2 border-primary bg-white shadow-md shadow-primary/10 rounded-full">
              <SearchOutlined className=" text-xl font-semibold absolute top-[20px] left-[15px]" />
              <input
                type="text"
                className=" pl-10 bg-transparent border-none outline-none md:w-[350px] w-full"
                placeholder="Search.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        {loading ? (
          <>
            <PropertySkeleton />
          </>
        ) : (
          <>
            {filtersProperty?.length ? (
              <>
                <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
                  {filtersProperty?.map((item, index) => (
                    <PropertiesCard key={index} item={item} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className=" w-full flex flex-col items-center justify-center h-full">
                  <div className=" w-full flex flex-col items-center justify-center mt-20">
                    <h2 className="font-medium text-error">
                      No Properties Found
                    </h2>
                  </div>
                </div>
              </>
            )}
          </>
        )}

        <div className=" flex items-center justify-center py-5">
          {filterData?.data?.meta?.total >= limit && (
            <button
              onClick={() => setLimit(limit + 4)}
              className=" border-2 flex items-center gap-2 border-primary text-sm hover:bg-primary hover:text-white duration-200 font-semibold py-1 px-5 rounded-md"
            >
              Load More
              {/* {loading ?  <SmallLoader /> :  ""} */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
