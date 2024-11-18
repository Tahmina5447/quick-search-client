"use client";

import React, { useContext, useEffect, useState } from "react";

import { Pagination } from "antd";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import BreakCame from "@/shared/BreakCame";
import { ContextData } from "../../../../../context/dataProviderContext";
import Loader from "@/shared/Loader";
import MyPropertyAdminTable from "@/components/Dashboard/Properties/MyPropertyAdminTable";
import {
  multiFilterProduct,
  propertiesGet,
} from "../../../../../apis/properties.api";

function Pending() {
  const router = useRouter();

  const {
    searchQuery,
    currentlyLoggedIn,
    clearFilter,
    limit,
    page,
    setPage,
    token,
    setPublishStatus,
  } = useContext(ContextData);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState();
  const [client, setClient] = useState(false);
  const [totalItems, setTotalItems] = useState(10);

  useEffect(() => {
    setClient(true);
    setPublishStatus("pending");
  }, []);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const data = {
        publishStatus: "pending",
        page,
        limit,
      };
      const res = await multiFilterProduct(data);
      if (res) {
        setFilterData(res);
        setLoading(false);
        setTotalItems(res?.data?.meta?.total);
      } else {
        setLoading(false);
      }
    };

    GetData();
  }, [page, limit, update]);

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
          <h2 className=" text-[25px] font-semibold">Pending Properties</h2>
          <BreakCame
            type="/admin"
            data={[{ title: "Pending Properties", url: "all-properties" }]}
          />
        </div>
        {/* <div>
          <button onClick={()=>router.push("/admin/add-properties")} className=" flex items-center gap-2 py-3 px-5 text-sm bg-primary rounded-md hover:bg-blue-600 duration-300 text-white">
            <IoIosAddCircle  className=" text-lg"/> Add Property
          </button>
        </div> */}
      </div>

      <div className=" bg-white shadow-sm rounded-md mt-5">
        {/* <div className=" p-5">
          <PropertySearch />
        </div> */}

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
    </div>
  );
}

export default Pending;
