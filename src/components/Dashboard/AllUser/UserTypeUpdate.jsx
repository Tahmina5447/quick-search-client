
import { Popover } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { userPatch } from "../../../../apis/user.api";
import { toast } from "react-toastify";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const UserTypeUpdate = ({ row, token, setUpdate }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupShow, setPopupShow] = useState(false);

  const data = [
    {
      title: "Regular Member",
      value: "regular",
      icon:<RiVerifiedBadgeFill />
    },
    {
      title: "Gold Member",
      value: "gold",
      icon:<FaRegUser />
    },
  ];

  const handelUpdate = async (value) => {
    setStatus(value);
    setLoading(true);
    const body = {
        userType: value,
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

  const handleOpenChange = (newOpen) => {
    setPopupShow(newOpen);
  };

  const content = (
    <div className=" w-[170px]">
      <div className=" flex w-full items-center flex-col">
        {data?.map((item, index) => (
          <button
            onClick={() => {
              handelUpdate(item?.value);
              setPopupShow(false);
            }}
            className={`py-2 flex items-center gap-2 px-5 w-full text-start rounded-md hover:bg-gray-200 text-sm`}
            key={index}
          >
            {item?.icon} {item.title}
          </button>
        ))}
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
        <button className=" py-1.5 duration-300 text-sm capitalize flex items-center gap-2 rounded-md">
          {status ? status : row?.userType + " Member"} <IoMdArrowDropdown />
        </button>
      </Popover>
    </>
  );
};

export default UserTypeUpdate;
