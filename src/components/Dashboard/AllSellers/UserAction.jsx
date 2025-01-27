"use client";

import DeleteModal from "@/shared/Modal/DeleteModal";
import { Popover } from "antd";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuView } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { userDelete, userPatch } from "../../../../apis/user.api";
import { useRouter } from "next/navigation";
import { ContextData } from "../../../../context/dataProviderContext";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function UserAction({ row, token, setUpdate }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupShow, setPopupShow] = useState(false);
  const router = useRouter();
  const { currentlyLoggedIn } = useContext(ContextData);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const handelDelete = async () => {
    setLoading(true);
    const res = await userDelete(row?._id, token);
    if (res.statusCode === 200) {
      setDeleteModal(false);
      setUpdate(Math.random());
      toast.success("User delete success");
      setLoading(false);
    } else {
      setLoading(false);
      toast.success("User delete success");
    }
  };

  const handelUpdate = async (value) => {
    setStatus(value);
    setLoading(true);
    const body = {
      userRole: "admin",
    };
    const res = await userPatch(body, row?._id, token);
    if (res.statusCode === 200) {
      setUpdate(Math.random());
      setLoading(false);
      toast.success("User Type update");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };


  const content = (
    <div className=" w-[210px]">
      <div className=" text-[20px] w-full flex flex-col items-center font-normal text-gray-600 space-y-2">
        <button
          onClick={() => {
            router.push(`/admin/seller/${row?._id}?name=${row?.name}`);
            setPopupShow(false);
          }}
          className=" w-full rounded-md text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
        >
          <LuView /> View User Property
        </button>

        {currentlyLoggedIn?.userRole === "super-admin" && (
          <button
            onClick={() => {
              handelUpdate();
              setPopupShow(false);
            }}
            className=" w-full rounded-md text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
          >
           <MdOutlineAdminPanelSettings />Make as admin
          </button>
        )}

        <button
          onClick={() => {
            setDeleteModal(true);
            setPopupShow(false);
          }}
          className=" w-full rounded-md text-sm gap-2 py-2 flex items-center hover:text-red-500 justify-start px-5 hover:bg-red-200 duration-200"
        >
          <RiDeleteBin6Line /> Delete User
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
        title={"Delete User!"}
        title2={
          "Are you sure you want to delete this user? This action cannot be undone."
        }
        isLoading={loading}
      />
    </>
  );
}

export default UserAction;
