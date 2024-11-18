import React from 'react';
import { RiEdit2Fill } from "react-icons/ri";

const EditButton = ({setEditModalOpen}) => {
    return (
        <>
            <button onClick={()=>setEditModalOpen(true)} className='text-warning text-base'><RiEdit2Fill /></button>
        </>
    );
};

export default EditButton;