import { Modal } from "antd";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const DeleteModal = ({
  id,
  deleteMethod,
  loading,
  error,
  modalOPen,
  setModalOpen,
}) => {
  const handleDelete = async (id) => {
    try {
      const response = await deleteMethod(id);
      if (response?.data?.status === "success") {
        toast.success("Property deleted successfully!");
        setModalOpen(false)
      } else if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      toast.error(error?.data?.message || "Property delete failed. Try again!");
    }
  };

  return (
    <div className="">
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        styles={{ borderRadius: 30 }}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={450}
        className={` bg-red-500 pt-3 rounded-[25px]`}
      >
        <div className="">
          <div className=" rounded-[30px]">
            <div>
              <h2 className=" text-[24px] font-[700] text-[#1B2559] text-center">
                Are You Sure?
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-16 my-3 w-16 bg-error/10 rounded-full">
              <MdDeleteForever className="text-4xl text-error" />
            </div>
          </div>

          <div className=" flex items-center justify-center gap-5 pt-[20px]">
            <button
              onClick={() => setModalOpen(false)}
              className="font-bold w-full  h-[40px] px-6 hover:text-red-500 hover:border-red-500 duration-300 rounded-[10px] bg-transparent text-secondary border border-secondary"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(id)}
              disabled={loading}
              className="font-bold w-full  h-[40px] px-6 rounded-[10px] bg-red-500 hover:bg-red-700 duration-300 border border-red-500 text-white "
            >
              {loading ? "Loading..." : "Delete"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
