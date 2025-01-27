"use client";

import React, { useContext, useEffect, useState } from "react";
// import { propertiesGet } from "../../../../apis/properties.api";
import PropertySearch from "@/shared/search/PropertySearch";
import MyPropertyAdminTable from "@/components/Dashboard/Properties/MyPropertyAdminTable";
import Loader from "@/shared/Loader";
import { Drawer, Pagination } from "antd";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import BreakCame from "@/shared/BreakCame";
import { TbFilter } from "react-icons/tb";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import {
  useDeletePropertyMutation,
  useGetPropertyQuery,
} from "@/redux/features/propertyApi";
import StatusButton from "@/shared/ActionButton/StatusButton";
import EditButton from "@/shared/ActionButton/EditButton";
import DeleteButton from "@/shared/ActionButton/DeleteButton";
import CustomTable from "@/shared/Table/CustomTable";
import VeiwButton from "@/shared/ActionButton/VeiwButton";
import Link from "next/link";
import SellerDetailsModal from "@/components/Dashboard/AllSellers/SellerDetailsModal";
function AllProperties() {
  const router = useRouter();
  const user = useSelector(selectUser);
  const [query,setQuery]=useState('')
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, error } = useGetPropertyQuery(query);
  useEffect(()=>{
    if(searchValue){
      setQuery(`search=${searchValue}`)
    }else(setQuery(''))
  },[searchValue])
  const [
    deleteProperty,
    { isLoading: deletePropertyLoading, error: deletePropertyError },
  ] = useDeletePropertyMutation();
  const allProperty = data?.data?.properties;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [sellerDetailsModalOpen, setSellerDetailsModalOpen] = useState(false);
  const [getSeller, setGetSeller] = useState(null);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const columns = [
    {
      title: "S/N",
      key: "_id",
      render: (row, record, index) => (
        <span className="text-[14px] font-normal text-info">{index + 1}</span>
      ),
      width: "20px",
    },
    {
      title: "Image",
      render: (row) => (
        <>
          <img
            src={row?.property_images[0]}
            width={50}
            height={50}
            alt="Property"
            className=" w-[40px] h-[40px] rounded-md"
          />
        </>
      ),
      width: "70px",
    },
    {
      title: "Title",
      key: "_id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.property_name}
        </span>
      ),
    },

    {
      title: "Status",
      key: "_id",
      render: (row) => <StatusButton status={row?.property_status} />,
    },
    {
      title: "Seller Name",
      key: "_id",
      render: (row) => (
        <>
          <span className=" text-[14px] font-normal text-info">
            {row?.user_info?.full_name}
          </span>
        </>
      ),
    },
    {
      title: "Seller Details",
      key: "_id",
      render: (row) => (
        <>
          <button
            onClick={() => {
              setSellerDetailsModalOpen(true);
              setGetSeller(row?.user_info);
          }}
            className={`bg-success/10 rounded text-xs py-0.5 text-success font-semibold flex items-center justify-center uppercase w-16`}
          >
            Details
          </button>
        </>
      ),
    },

    {
      title: "Actions",
      key: "_id",
      render: (row) => (
        <>
          <div className="flex items-center gap-2 flex-wrap">
            <VeiwButton />
            <EditButton link="#" />
            <DeleteButton
              id={row?._id}
              method={deleteProperty}
              loading={deletePropertyLoading}
              error={deletePropertyError}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className=" flex items-center justify-between">
        <div>
          <h2 className=" text-[25px] font-semibold">All Properties</h2>
          <BreakCame
            type="/dashboar/admin"
            data={[{ title: "All Properties", url: "all-properties" }]}
          />
        </div>
        <div className=" flex flex-col gap-2 items-end">
          <button
            onClick={() =>
              router.push(
                user?.user_role === "admin"
                  ? "/dashboard/admin/properties/add"
                  : "/dashboard/sellers/add-properties"
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
        <div className=" hidden md:block p-5"><PropertySearch setSearchValue={setSearchValue} /></div>

        <div>
          {isLoading ? (
            <div className=" h-[400px] flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <div>
              <CustomTable
                tableData={allProperty}
                columns={columns}
                scroll={{}}
              />
            </div>
          )}
        </div>
      </div>

      {/* <Drawer
        title="Filter Properties"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={drawerVisible}
      >
        <div className="p-5">
          <PropertySearch />
        </div>
      </Drawer> */}
      <SellerDetailsModal data={getSeller} sellerDetailsModalOpen={sellerDetailsModalOpen} setSellerDetailsModalOpen={setSellerDetailsModalOpen} />
    </div>
  );
}

export default AllProperties;
