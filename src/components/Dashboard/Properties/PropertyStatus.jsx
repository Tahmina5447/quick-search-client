import DeleteModal from "@/shared/Modal/DeleteModal";
import { Popover } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuView } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PROPERTY_URL } from "../../../../apis/url";
import axios from "axios";
import { propertyPatch } from "../../../../apis/properties.api";
import { toast } from "react-toastify";
import {
  MdOutlinePending,
  MdOutlinePublishedWithChanges,
  MdOutlineUnpublished,
} from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { SiDavinciresolve } from "react-icons/si";

const PropertyStatus = ({ row, token, setUpdate, user }) => {
  const [status, setStatus] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [popupShow, setPopupShow] = useState(false);

  const data = [
    {
      title: "Published",
      value: "published",
      icon: <MdOutlinePublishedWithChanges className="text-[16px]" />,
    },
    {
      title: "Un Published",
      value: "unPublished",
      icon: <MdOutlineUnpublished className="text-[16px]" />,
    },
    {
      title: "Pending",
      value: "pending",
      icon: <MdOutlinePending className="text-[18px]" />,
    },
    {
      title: "Rejected",
      value: "rejected",
      icon: <FaBan className="text-[16px]" />,
    },
    {
      title: "Sold Out",
      value: "sold-out",
      icon: <SiDavinciresolve className="text-[16px]" />,
    },
  ];

  const data2 = [
    {
      title: "Published",
      value: "published",
      icon: <MdOutlinePublishedWithChanges className="text-[16px]" />,
    },
    {
      title: "UnPublished",
      value: "unPublished",
      icon: <MdOutlineUnpublished className="text-[16px]" />,
    },
    {
      title: "Sold Out",
      value: "sold-out",
      icon: <SiDavinciresolve className="text-[16px]" />,
    },
  ];

  const handelUpdate = async (value) => {
    setStatus(value);
    setLoading(true);
    const body = {
      publishStatus: value,
    };

    const res = await propertyPatch(body, row?._id, token);

    console.log(res)

    if (res.statusCode === 200) {
      setUpdate(Math.random());
      setLoading(false);
      toast.success("Property Status update");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const content = (
    <div className=" w-[170px]">
      <div className=" flex w-full items-center flex-col">
        {user === "admin" ? (
          <>
            {data?.map((item, index) => (
              <button
                onClick={() => {
                  handelUpdate(item?.value);
                  setPopupShow(false);
                }}
                className={`py-2 flex items-center gap-2 px-5 w-full text-start rounded-md hover:bg-gray-200 text-sm ${
                  item?.title === "Published" && " text-success hover:bg-success/20"
                } ${item?.title === "Sold Out" && " text-gray-500 hover:bg-success/20"} ${
                  item?.title === "Rejected" && " text-error hover:bg-error/20"
                } ${
                  item?.title === "UnPublished" && " text-yellow-600 hover:bg-yellow-600/20"
                }`}
                key={index}
              >
                {item.icon} {item.title}
              </button>
            ))}
          </>
        ) : (
          <>
            {data2?.map((item, index) => (
              <button
                onClick={() => {
                  handelUpdate(item?.value);
                  setPopupShow(false);
                }}
                className="py-1.5 px-5 w-full text-start rounded-md hover:bg-gray-200 text-sm"
                key={index}
              >
                {item.title}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {user === "admin" ? (
        <>
          <Popover
            open={popupShow}
            onOpenChange={handleOpenChange}
            content={content}
            placement="bottomRight"
            trigger="click"
          >
            <button className=" py-1.5 duration-300 text-sm capitalize flex items-center gap-2 rounded-md">
              {status ? status : row?.publishStatus} <IoMdArrowDropdown />
            </button>
          </Popover>
        </>
      ) : (
        <>
          {row?.publishStatus === "pending" ? (
            <>
              <button className=" py-1.5 cursor-not-allowed text-gray-400 duration-300 text-sm capitalize flex items-center gap-2 rounded-md">
                pending for approval
              </button>
            </>
          ) : (
            <>
              <Popover
                open={popupShow}
                onOpenChange={handleOpenChange}
                content={content}
                placement="bottomRight"
                trigger="click"
              >
                <button className=" py-1.5 duration-300 text-sm capitalize flex items-center gap-2 rounded-md">
                  {status ? status : row?.publishStatus} <IoMdArrowDropdown />
                </button>
              </Popover>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PropertyStatus;
