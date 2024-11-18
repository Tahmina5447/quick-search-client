"use client";

import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../../context/dataProviderContext";
import { propertiesGet } from "../../../../apis/properties.api";
import PropertySearch from "@/shared/search/PropertySearch";
import MyPropertyAdminTable from "@/components/Dashboard/Properties/MyPropertyAdminTable";
import Loader from "@/shared/Loader";
import { Drawer, Pagination } from "antd";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import BreakCame from "@/shared/BreakCame";
import { TbFilter } from "react-icons/tb";

function MyProperties() {
  const router = useRouter();

  const {
    searchQuery,
    currentlyLoggedIn,
    clearFilter,
    limit,
    page,
    setPage,
    token,
  } = useContext(ContextData);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState();
  const [client, setClient] = useState(false);
  const [totalItems, setTotalItems] = useState(10);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const user="admin"

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const query = `${searchQuery}`;
      const res = await propertiesGet(query);
      if (res) {
        setFilterData(res);
        setLoading(false);
        setTotalItems(res?.data?.meta?.total);
      } else {
        setLoading(false);
      }
    };

    GetData();

    // if (currentlyLoggedIn) {
    //   GetData();
    // }else{
    //   setLoading(false);
    // }
  }, [currentlyLoggedIn, searchQuery, update]);

  const PagenationChange = (page, pageSiz) => {
    setPage(page);
  };

  return (
    <div>
      <div className=" flex items-center justify-between">
        <div>
          <h3 className=" text-[17px] font-medium">
            Welcome, {currentlyLoggedIn?.name}
          </h3>
          <h2 className=" text-[25px] font-semibold">All Properties</h2>
          <BreakCame
            type="/admin"
            data={[{ title: "All Properties", url: "all-properties" }]}
          />
        </div>
        <div className=" flex flex-col gap-2 items-end">
          <button
            onClick={() =>
              router.push(
                user === "admin"
                  ? "/admin/properties/add"
                  : "/user/add-properties"
              )
            }
            className=" flex items-center gap-1 py-2 px-3 text-sm bg-primary rounded-md hover:bg-blue-600 duration-300 text-white"
          >
            <IoIosAddCircle className=" text-lg" /> Add Property
          </button>
          <button
            onClick={() => toggleDrawer()}
            className=" md:hidden border flex items-center gap-2 border-gray-300 rounded-md py-2 hover:bg-primary hover:text-white duration-300 px-5 text-sm font-semibold"
          >
            Filter <TbFilter />
          </button>
        </div>
      </div>

      <div className=" bg-white shadow-sm rounded-md mt-5">
        <div className=" hidden md:block p-5">
          <PropertySearch />
        </div>

        {client ? (
          <>
            <div>
              {loading ? (
                <div className=" h-[400px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : (
                <div>
                  <MyPropertyAdminTable
                    tableData={filterData?.data?.data}
                    token={token}
                    setUpdate={setUpdate}
                    user="admin"
                    pageSize={limit}
                    currentPage={page}
                    userType="admin"
                  />
                </div>
              )}
              {
                <div className=" py-4 flex items-center justify-between px-4">
                  <div className="text-light-black font-medium text-[14px] text-[#68769F]">
                    {`Showing ${page * limit - limit + 1} - ${Math.min(
                      page * limit,
                      totalItems
                    )} of ${totalItems}`}
                  </div>
                  <Pagination
                    defaultCurrent={page}
                    total={totalItems}
                    pageSize={limit}
                    onChange={PagenationChange}
                    showSizeChanger={false}
                  />
                </div>
              }
            </div>
          </>
        ) : (
          <></>
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
          <PropertySearch />
        </div>
      </Drawer>
    </div>
  );
}

export default MyProperties;
