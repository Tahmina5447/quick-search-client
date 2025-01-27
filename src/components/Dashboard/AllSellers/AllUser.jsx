"use client";

import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../../context/dataProviderContext";
import BdAddressSelectFilter from "@/shared/BdAddressSelectFilter";
import AllUserTable from "./AllUserTable";
import Loader from "@/shared/Loader";
import { multiFilterUser } from "../../../../apis/user.api";
import CustomFilter from "@/shared/search/CustomFilter";
import UserTypeFilter from "@/shared/search/UserTypeFilter";
import { Drawer, Pagination } from "antd";
import BreakCame from "@/shared/BreakCame";
import { TbFilter } from "react-icons/tb";

const AllUser = () => {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState();
  const {
    currentlyLoggedIn,
    token,
    upazilaFilter,
    setUpazilaFilter,
    divisionFilter,
    setDivisionFilter,
    districtFilter,
    setDistrictFilter,
    clearFilter,
    status,
    setStatus,
    userType,
    setUserType,
  } = useContext(ContextData);
  const [isVerified, setIsVerified] = useState("");
  const [search, setSearch] = useState("");
  const [userRole, setUserRole] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(10);
  const [client, setClient] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    setClient(true);
  }, []);

  const statusData = [
    {
      title: "Pending",
      value: "pending",
    },
    {
      title: "Approved",
      value: "approved",
    },
    {
      title: "Blocked",
      value: "blocked",
    },
  ];

  const roleData = [
    {
      title: "Admin",
      value: "admin",
    },
    {
      title: "Seller",
      value: "seller",
    },
    {
      title: "User",
      value: "user",
    },
  ];

  useEffect(() => {
    setLoading(true);
    const data = {
      division: divisionFilter,
      district: districtFilter,
      upazila: upazilaFilter,
      searchTerm: search,
      userType,
      isVerified,
      status,
      userRole,
      limit,
      page,
    };

    const GetData = async () => {
      const res = await multiFilterUser(data);
      if (res) {
        setFilterData(res);
        setTotalItems(res?.data?.meta?.total);
        setLoading(false);
      }
    };
    GetData();
  }, [
    districtFilter,
    divisionFilter,
    upazilaFilter,
    update,
    userType,
    isVerified,
    search,
    status,
    userRole,
    limit,
    page,
  ]);

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
          <h2 className=" text-[25px] font-semibold">All Users</h2>
          <BreakCame
            type={"/admin"}
            data={[{ title: "All Users", url: "users" }]}
          />
        </div>
        <button
          onClick={() => toggleDrawer()}
          className=" md:hidden border flex items-center gap-2 border-gray-300 rounded-md py-2 hover:bg-primary hover:text-white duration-300 px-5 text-sm font-semibold"
        >
          Filter <TbFilter />
        </button>
      </div>

      <div className=" bg-white shadow-sm rounded-md mt-5">
        <div className=" p-5 pb-8 hidden md:grid md:grid-cols-4 grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="search by email or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-[10px] h-[43px] px-[10px] font-normal text-gray-700 bg-white border border-gray-300  rounded-[5px] w-full text-sm outline-none "
          />

          <BdAddressSelectFilter
            selectedDivision={divisionFilter}
            selectedDistrict={districtFilter}
            selectedUpazila={upazilaFilter}
            setSelectedDistrict={setDistrictFilter}
            setSelectedDivision={setDivisionFilter}
            setSelectedUpazila={setUpazilaFilter}
          />
          <UserTypeFilter priority={userType} setPriority={setUserType} />

          <CustomFilter
            data={statusData}
            value={status}
            setValue={setStatus}
            title="User Status"
          />

          <CustomFilter
            data={roleData}
            value={userRole}
            setValue={setUserRole}
            title="User Role"
          />

          <div>
            <button
              onClick={() => {
                clearFilter();
                setUserRole("");
                setStatus("");
                setSearch("");
                setStatus("");
                setUserType("");
              }}
              className={` w-full h-[43px] border hover:bg-error duration-300 rounded-md text-sm hover:text-white ${
                divisionFilter ||
                districtFilter ||
                upazilaFilter ||
                userRole ||
                status ||
                search ||
                userType
                  ? " bg-red-500 text-white"
                  : ""
              }`}
            >
              Clear Filter
            </button>
          </div>
        </div>

        {client ? (
          <div>
            {loading ? (
              <div className=" h-[400px] flex items-center justify-center">
                <Loader />
              </div>
            ) : (
              <div>
                <AllUserTable
                  tableData={filterData?.data?.data}
                  token={token}
                  setUpdate={setUpdate}
                  pageSize={limit}
                  currentPage={page}
                />
              </div>
            )}

            <div>
              {loading ? (
                <></>
              ) : (
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
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Drawer
        title="Filter User"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <div className="p-5">
          <div className=" p-5 pb-8 grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="search by email or name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-[10px] h-[43px] px-[10px] font-normal text-gray-700 bg-white border border-gray-300  rounded-[5px] w-full text-sm outline-none "
            />

            <BdAddressSelectFilter
              selectedDivision={divisionFilter}
              selectedDistrict={districtFilter}
              selectedUpazila={upazilaFilter}
              setSelectedDistrict={setDistrictFilter}
              setSelectedDivision={setDivisionFilter}
              setSelectedUpazila={setUpazilaFilter}
            />
            <UserTypeFilter priority={userType} setPriority={setUserType} />

            <CustomFilter
              data={statusData}
              value={status}
              setValue={setStatus}
              title="User Status"
            />

            <CustomFilter
              data={roleData}
              value={userRole}
              setValue={setUserRole}
              title="User Role"
            />

            <div>
              <button
                onClick={() => {
                  clearFilter();
                  setUserRole("");
                  setStatus("");
                  setSearch("");
                  setStatus("");
                  setUserType("");
                }}
                className={` w-full h-[43px] border hover:bg-error duration-300 rounded-md text-sm hover:text-white ${
                  divisionFilter ||
                  districtFilter ||
                  upazilaFilter ||
                  userRole ||
                  status ||
                  search ||
                  userType
                    ? " bg-red-500 text-white"
                    : ""
                }`}
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default AllUser;
