import React from "react";
import { Modal } from "antd";
import { RxCross2 } from "react-icons/rx";
const CustomModal = ({ modalOPen, setModalOpen, title, children }) => {
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
      >
        <div className="">
          <div className=" rounded-[30px]">
            <div className="flex justify-between">
              <h2 className=" text-[24px] font-[700] text-[#1B2559]">
                {title}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-lg"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
