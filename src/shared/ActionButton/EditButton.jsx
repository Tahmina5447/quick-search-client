import Link from "next/link";
import React from "react";
import { RiEdit2Fill } from "react-icons/ri";

const EditButton = ({ setEditModalOpen=()=>{}, data=[], setGetBanner=()=>{}, type="", link=""}) => {
  return (
    <>
      {type === "modal" ? (
        <>
          <button
            onClick={() => {
              setEditModalOpen(true);
              setGetBanner(data);
            }}
            className="text-warning text-base"
          >
            <RiEdit2Fill />
          </button>
        </>
      ) : (
        <>
          <Link
            href={link}
            className="text-warning text-base"
          >
            <RiEdit2Fill />
          </Link>
        </>
      )}
    </>
  );
};

export default EditButton;
