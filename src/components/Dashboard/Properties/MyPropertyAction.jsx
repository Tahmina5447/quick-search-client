import DeleteModal from "@/shared/Modal/DeleteModal";
import { Popover } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { LuView } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PROPERTY_URL } from "../../../../apis/url";
import { propertyDelete } from "../../../../apis/properties.api";
import { toast } from "react-toastify";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const MyPropertyAction = ({ row, token, setUpdate, user, userType }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [popupShow, setPopupShow] = useState(false);

  const handelDelete = async () => {
    setLoading(true);

    const res = await propertyDelete(row?._id, token);
    if (res.statusCode === 200) {
      setDeleteModal(false);
      setUpdate(Math.random());
      toast.success("Property delete successfully");
      setLoading(false);
    } else {
      setLoading(false);
      toast.success("Property delete successfully");
    }
  };

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const content = (
    <div className=" w-[210px]">
      <div className=" text-[20px] w-full flex flex-col items-center font-normal text-gray-600 space-y-2">
        <Link
          // onClick={() => {
          //   router.push(
          //     user === "admin"
          //       ? `/admin/property-details/${row._id}`
          //       : `/user/property-details/${row._id}`
          //   );
          //   setPopupShow(false);
          // }}
          target="_blank"
          href={`/property/${row._id}`}
          className=" w-full rounded-md hover:text-gray-800 text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
        >
          <LuView /> View Property Details
        </Link>

        {userType === "admin" ? (
          <></>
        ) : (
          <>
            <button
              onClick={() => {
                router.push(
                  user === "admin"
                    ? `/admin/properties/edit/${row._id}`
                    : `/user/my-properties/${row._id}`
                );
                setPopupShow(false);
              }}
              className=" w-full rounded-md text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
            >
              <BiEdit /> Edit Property
            </button>
          </>
        )}

        {userType === "admin" ? (
          <>
            <button
              onClick={() => {
                router.push(
                  `/admin/properties/profile/${row?.userDetails?._id}`
                );
                setPopupShow(false);
              }}
              className=" w-full rounded-md text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
            >
              <CgProfile /> View Author's profile
            </button>
          </>
        ) : (
          <></>
        )}

        <button
          onClick={() => {
            setDeleteModal(true);
            setPopupShow(false);
          }}
          className=" w-full rounded-md text-sm gap-2 py-2 flex items-center hover:text-red-500 justify-start px-5 hover:bg-red-200 duration-200"
        >
          <RiDeleteBin6Line /> Delete Property
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Popover
        open={popupShow}
        onOpenChange={handleOpenChange}
        content={content}
        placement="bottomRight"
        trigger="click"
      >
        <button className=" bg-primary text-white py-1.5 hover:bg-gray-600 duration-300 text-sm px-5 rounded-md flex justify-center items-center gap-1">
          Action <IoMdArrowDropdown />
        </button>
      </Popover>

      <DeleteModal
        modalOPen={deleteModal}
        onDelete={() => handelDelete()}
        setModalOpen={setDeleteModal}
        title={"Delete Properties!"}
        title2={
          "Are you sure you want to delete this Properties? This action cannot be undone."
        }
        isLoading={loading}
      />
    </>
  );
};

export default MyPropertyAction;
