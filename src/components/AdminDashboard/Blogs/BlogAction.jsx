"use client";

import { Popover } from "antd";
import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuView } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useRouter } from "next/navigation";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import DeleteModal from "@/shared/Modal/DeleteModal";
import { BiEdit } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
import { blogDelete } from "../../../../apis/blog.api";
import { toast } from "react-toastify";

function BlogAction({ row, token, setUpdate }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupShow, setPopupShow] = useState(false);
  const router = useRouter();
//   const { currentlyLoggedIn } = useContext(ContextData);

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const handelDelete = async () => {
    setLoading(true);
    const res = await blogDelete(row?._id, token);
    if (res.statusCode === 200) {
      setDeleteModal(false);
      setUpdate(Math.random());
      toast.success("Blog delete successfully");
      setLoading(false);
    } else {
      setLoading(false);
      toast.success("Blog delete successfully");
    }
  };

  const content = (
    <div className=" w-[210px]">
      <div className=" text-[20px] w-full flex flex-col items-center font-normal text-gray-600 space-y-2">
        <button
          onClick={() => {
            router.push(`/admin/blogs/view/${row?._id}`);
            setPopupShow(false);
          }}
          className=" w-full rounded-md text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
        >
          <TbSearch /> View Blog
        </button>

        <button
          onClick={() => {
            router.push(`/admin/blogs/edit/${row?._id}`);
            setPopupShow(false);
          }}
          className=" w-full rounded-md text-sm gap-2 py-2 flex items-center justify-start px-5 hover:bg-gray-200 duration-200"
        >
          <BiEdit /> Edit Blog
        </button>

        <button
          onClick={() => {
            setDeleteModal(true);
            setPopupShow(false);
          }}
          className=" w-full rounded-md text-sm gap-2 py-2 flex items-center hover:text-red-500 justify-start px-5 hover:bg-red-200 duration-200"
        >
          <RiDeleteBin6Line /> Delete Blog
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
        title={"Delete Blog!"}
        title2={
          "Are you sure you want to delete this blog? This action cannot be undone."
        }
        isLoading={loading}
      />
    </>
  );
}

export default BlogAction;
