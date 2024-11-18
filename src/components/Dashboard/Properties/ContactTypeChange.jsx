import { Popover } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { propertyPatch } from "../../../../apis/properties.api";
import { toast } from "react-toastify";

const ContactTypeChange = ({ row, token, setUpdate, user,userType }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupShow, setPopupShow] = useState(false);

  const data = [
    {
      title: "Admin",
      value: "admin",
    },
    {
      title: "Seller",
      value: "seller",
    },
  ];

  const handelUpdate = async (value) => {
    setStatus(value);
    setLoading(true);
    const body = {
      contactType: value,
    };
    const res = await propertyPatch(body, row?._id, token);
    if (res.statusCode === 200) {
      setUpdate(Math.random());
      setLoading(false);
      toast.success("Property Contact Type update");
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
        {data?.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              handelUpdate(item?.value);
              setPopupShow(false);
            }}
            className={`py-2 flex items-center gap-2 px-5 w-full text-start rounded-md hover:bg-gray-200 text-sm `}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {userType === "admin" ? (
        <>
          <Popover
            open={popupShow}
            onOpenChange={handleOpenChange}
            content={content}
            placement="bottomRight"
            trigger="click"
          >
            <button className=" py-1.5 duration-300 text-sm capitalize flex items-center gap-2 rounded-md">
              {status ? status : row?.contactType} <IoMdArrowDropdown />
            </button>
          </Popover>
        </>
      ) : (
        <button className=" py-1.5 cursor-not-allowed text-gray-400 duration-300 text-sm capitalize flex items-center gap-2 rounded-md">
          {row?.contactType}
        </button>
      )}
    </>
  );
};

export default ContactTypeChange;
