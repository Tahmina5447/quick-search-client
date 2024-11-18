"use client";

import React, { useContext, useState } from "react";
import PropertiesCard from "../Properties/PropertiesCard";
import { TbFilter } from "react-icons/tb";
import { Drawer } from "antd";
import { ContextData } from "../../../context/dataProviderContext";
import Loader from "@/shared/Loader";
import PropertySearchHome from "./PropertySearchHome";
import SmallLoader from "@/shared/SmallLoader";
import PropertySkeleton from "@/shared/Skeleton/PropertySkeleton";

function PropertyList() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { loading, filterData, clearFilter, limit2, setLimit2 } =
    useContext(ContextData);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const filtersProperty = filterData?.data?.data;

  return (
    <div className="md:py-[30px] py-5 bg-[#F8F8F8] ">
      <div className="max-container md:bg-white rounded-xl md:shadow">
        <div className="  py-3  md:mb-5">
          <div className="  flex items-center justify-between mb-3">
            <h2 className=" text-xl font-semibold">Property List</h2>

            <button
              onClick={() => toggleDrawer()}
              className=" md:hidden border flex items-center gap-2 border-gray-300 rounded-md py-2 hover:bg-primary hover:text-white duration-300 px-5 text-sm font-semibold"
            >
              Filter <TbFilter />
            </button>
          </div>

          <div className="hidden md:block">
            <PropertySearchHome />
          </div>

          <div className="md:flex justify-end hidden">
            <div className=" flex items-center my-4 justify-end gap-4 ">
              <h2 className="text-sm font-semibold">
                Total {filtersProperty?.length ? filtersProperty?.length : 0}{" "}
                {filtersProperty?.length ? "Properties" : "Property"} found
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-container md:bg-white rounded-xl min-h-[40vh]">
        <div className="py-5">
          {loading ? (
            <>
              <PropertySkeleton />
            </>
          ) : (
            <>
              {filtersProperty?.length ? (
                <>
                  <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        {/* <div className="py-5">
          {loading ? (
            <div className=" h-[300px] flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <>
              {filterData?.data?.data?.length ? (
                <>
                  <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
                    {filterData?.data?.data?.map((item, index) => (
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
        </div> */}

        {!loading && (
          <div className=" flex items-center justify-center py-5">
            {filterData?.data?.meta?.total >= limit2 && (
              <button
                onClick={() => setLimit2(limit2 + 16)}
                className=" border-2 flex items-center gap-2 border-primary text-sm hover:bg-primary hover:text-white duration-200 font-semibold py-1 px-3 rounded-md"
              >
                Load More
                {/* {loading ? <SmallLoader /> : ""} */}
              </button>
            )}
          </div>
        )}
      </div>
      <Drawer
        title="Filter Properties"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <div className="p-5">
          <PropertySearchHome />
        </div>
      </Drawer>
    </div>
  );
}

export default PropertyList;
