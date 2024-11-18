"use client";

import MyPropertyAdminTable from "@/components/Dashboard/Properties/MyPropertyAdminTable";
import Loader from "@/shared/Loader";
import PropertySearch from "@/shared/search/PropertySearch";
import { Drawer, Pagination } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../../../context/dataProviderContext";
import { propertiesGet } from "../../../../../apis/properties.api";
import BreakCame from "@/shared/BreakCame";
import { TbFilter } from "react-icons/tb";

const page = ({ params }) => {
  const id = params.id;
  const searchParams = useSearchParams();
  const search = searchParams.get("name");

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

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const query = `userDetails=${id}&${searchQuery}`;
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
  }, [id, searchQuery, update]);

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
          <h2 className=" text-[25px] font-semibold">{search} Properties</h2>
          <div className="md:block hidden">
            <BreakCame
              type={"/admin"}
              data={[
                { title: "All users", url: "users" },
                { title: "View Users Properties", url: "" },
              ]}
            />
          </div>
        </div>
        <button
          onClick={() => toggleDrawer()}
          className=" md:hidden border flex items-center gap-2 border-gray-300 rounded-md py-2 hover:bg-primary hover:text-white duration-300 px-5 text-sm font-semibold"
        >
          Filter <TbFilter />
        </button>
      </div>

      <div className=" bg-white shadow-sm rounded-md mt-5">
        <div className=" md:block hidden p-5">
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
                    defaultCurrent={1}
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
};

export default page;
