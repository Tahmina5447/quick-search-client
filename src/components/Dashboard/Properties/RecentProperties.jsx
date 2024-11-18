"use client";

import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../../context/dataProviderContext";
import { multiFilterProduct } from "../../../../apis/properties.api";
import Loader from "@/shared/Loader";
import PropertyResentTable from "./PropertyResentTable";

const RecentProperties = () => {
  const {
    limit,
    page,
    token,
    setPublishStatus,
  } = useContext(ContextData);

  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState();
  const [client, setClient] = useState(false);
  const [totalItems, setTotalItems] = useState(7);

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
        limit:7,
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

  return (
    <div>
      {loading ? (
        <div className=" h-[400px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div>
          <PropertyResentTable
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
    </div>
  );
};

export default RecentProperties;
