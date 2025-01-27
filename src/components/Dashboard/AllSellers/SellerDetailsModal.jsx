import CustomModal from "@/shared/Modal/CustomModal";
import React from "react";

const SellerDetailsModal = ({
  data,
  sellerDetailsModalOpen,
  setSellerDetailsModalOpen,
}) => {
  return (
    <>
      <CustomModal
        modalOPen={sellerDetailsModalOpen}
        setModalOpen={setSellerDetailsModalOpen}
        title={""}
      >
        <div className="flex flex-col  gap-5 my-5">
          <div className="flex items-center justify-center">
            <img
              src={data?.profile_image || "/assets/user.png"}
              alt="seller"
              className="w-26 h-26  object-cover border"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-xl">{data?.full_name}</span>
            <span className="text-black/50 text-base mb-3">{data?.email}</span>
          </div>
          <div className="border flex flex-col gap-1.5 p-3">
            <span className="flex items-center  gap-2 pb-1 border-b">
              <span className=" font-bold uppercase">Phone:</span>
              <span>{data?.phone}</span>
            </span>
            <span className="flex items-center uppercase pb-1 border-b gap-2">
              <span className=" font-bold ">Division:</span>
              <span>{data?.division}</span>
            </span>
            <span className="flex items-center uppercase pb-1 border-b gap-2">
              <span className=" font-bold ">District:</span>
              <span>{data?.district}</span>
            </span>
            <span className="flex items-center uppercase pb-1 border-b gap-2">
              <span className=" font-bold ">Upazila:</span>
              <span>{data?.upazila}</span>
            </span>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default SellerDetailsModal;
