import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const DeleteButton = ({ id, deleteMethod, loading, error }) => {
  const handleDelete = async (id) => {
    try {
      const response = await deleteMethod(id);
      if (response?.data?.status === "success") {
        toast.success("Banner deleted successfully!");
      } else if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      toast.error(error?.data?.message || "Banner delete failed. Try again!");
    }
  };
  return (
    <>
      <button onClick={() => handleDelete(id)} className="text-error text-base">
        <MdDeleteForever />
      </button>
    </>
  );
};

export default DeleteButton;
