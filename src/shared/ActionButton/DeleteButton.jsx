import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import DeleteModal from "../Modal/DeleteModal";

const DeleteButton = ({ id, method, loading, error }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="text-error text-base"
      >
        <MdDeleteForever />
      </button>
      <DeleteModal
        id={id}
        deleteMethod={method}
        loading={loading}
        error={error}
        modalOPen={openModal}
        setModalOpen={setOpenModal}
      />
    </>
  );
};

export default DeleteButton;
