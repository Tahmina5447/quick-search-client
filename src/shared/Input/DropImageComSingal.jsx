"use client";

import Image from "next/image";
import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { BsCloudUploadFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function DropImageComSingal({
  imageUrl,
  setImageUrl,
  handleImageUpload,
  imageLoading = false,
}) {
  const handleRemoveImage = (id) => {
    setImageUrl((items) => items.filter((img) => img !== id));
  };

  return (
    <div className="block  gap-5 mb-4">
      <div className="w-full  font-bold mt-10">
        <p>Blog Images</p>
      </div>
      <div className="w-full mt-2">
        <div className="relative border-4 border-dashed w-full rounded-lg h-[150px] text-center">
          {imageLoading ? (
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
                onChange={handleImageUpload}
                className="opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full cursor-pointer"
              />
            </>
          )}
        </div>
        <div className=" flex items-center gap-4 mt-5">
          {imageUrl && (
            <div
              className=" relative w-[100px] h-[80px] group rounded-md overflow-hidden"
            >
              <Image
                src={imageUrl}
                width={200}
                height={200}
                alt="pro"
                className=" shadow-md w-[100px] h-[80px] rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropImageComSingal;
