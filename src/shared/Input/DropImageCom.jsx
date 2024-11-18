"use client";

import { multipleImageUpload } from "@/utils/hooks/multipleImageUpload";
import React, { useState } from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function DropImageCom({
  imageUrls,
  setImageUrls,
}) {
  const [imageUploading,setImageUploading]=useState(false);
  const handleRemoveImage = (id) => {
    setImageUrls((items) => items.filter((img) => img !== id));
  };

  const handleImageUpload=(e)=>{
    multipleImageUpload({ imageFiles:e.target.files,setImageUrls,setImageUploading })
  }

  return (
    <div className="block  gap-5 mb-4">
      <div className="w-full  font-bold mt-10">
        <p>Properties Images</p>
      </div>
      <div className="w-full mt-2">
        <div className="relative border-4 border-dashed w-full rounded-lg h-[150px] text-center">
          {imageUploading ? (
            <div className=" flex items-center w-full justify-center h-full">
              <h2 className=" text-2xl font-bold">Uploading...</h2>
            </div>
          ) : (
            <>
              <BsCloudUploadFill
                size={35}
                className="text-primary mx-auto block mt-8"
              />

              <p className="text-xl font-bold text-slate-900">
                Drag your image here
              </p>
              <span className="text-xs font-bold text-slate-900">
                (Only *.jpeg and *.png images will be accepted)
              </span>
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
              />
            </>
          )}
        </div>
        <div className=" flex items-center gap-4 mt-5">
          {imageUrls?.map((img, index) => (
            <div key={index} className=" relative w-[100px] h-[80px] group rounded-md overflow-hidden">
              <img  src={img} width={200} height={200} alt="pro" className=" shadow-md w-[100px] h-[80px] rounded-lg" />
              <button type="button" onClick={()=>handleRemoveImage(img)} className=" bg-white shadow-sm w-[25px] h-[25px]  absolute top-[5px]  text-[20px] right-[5px] flex text-red-500 items-center justify-center rounded-full "><MdDelete /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropImageCom;
