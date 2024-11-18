import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../../context/dataProviderContext";
import { propertiesGet } from "../../../../apis/properties.api";
import PropertySearch from "@/shared/search/PropertySearch";
import Loader from "@/shared/Loader";
import { Drawer, Pagination } from "antd";
import MyPropertyAdminTable from "./MyPropertyAdminTable";
import { IoIosAddCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import BreakCame from "@/shared/BreakCame";
import { TbFilter } from "react-icons/tb";

const MyProperty = ({ user, type, data }) => {
  const router = useRouter();
  const {
    searchQuery,
    currentlyLoggedIn,
    clearFilter,
    token,
    limit,
    page,
    setPage,
  } = useContext(ContextData);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState();
  const [totalItems, setTotalItems] = useState(10);
  const [client, setClient] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    const GetData = async () => {
      setLoading(true);
      const query = `userDetails=${currentlyLoggedIn?._id}&${searchQuery}`;
      // const query = `${searchQuery}`;
      const res = await propertiesGet(query);
      if (res) {
        setFilterData(res);
        setTotalItems(res?.data?.meta?.total);
        setLoading(false);
      }else{
        setLoading(false);
      }
    };

    GetData();
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
          <h2 className=" text-[25px] font-semibold">My Properties</h2>
          <BreakCame type={type} data={data} />
        </div>
        <div className=" flex flex-col gap-2 items-end">
          <button
            onClick={() =>
              router.push(
                user === "admin"
                  ? "/admin/add-properties"
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
                    user={user}
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

export default MyProperty;
