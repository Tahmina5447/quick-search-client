import React, { Children } from "react";
import { Modal } from "antd";

const CustomModal = ({
  modalOPen,
  setModalOpen,
  //   className,
  title,
  children,
  //   onDelete = () => {},
  //   isLoading = false,
}) => {
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
        // className={` bg-red-500 pt-3 rounded-[30px]`}
      >
        <div className="">
          <div className=" rounded-[30px]">
            <div>
              <h2 className=" text-[24px] font-[700] text-[#1B2559]">
                {title}
              </h2>
            </div>
          </div>
          {children}
          <div className=" flex items-center justify-center gap-5 pt-[20px]">
            <button
              onClick={() => setModalOpen(false)}
              className="font-bold w-full  h-[40px] px-6 hover:text-red-500 hover:border-red-500 duration-300 rounded-[10px] bg-transparent text-secondary border border-secondary"
            >
              Cancel
            </button>
            <button
              //   onClick={() => {
              //     onDelete();
              //   }}
              className="font-bold w-full  h-[40px] px-6 rounded-[10px] bg-red-500 hover:bg-red-700 duration-300 border border-red-500 text-white "
            >
              Delete
              {/* {isLoading ? "Loading..." : "Delete"} */}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
