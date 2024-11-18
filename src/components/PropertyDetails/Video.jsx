"use client";

import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Video({ data }) {
  const [modalOPen, setModalOpen] = useState(false);
  // console.log(data);

  function extractVideoID(url) {
    const regex = /(?:\?v=|&v=|youtu\.be\/|shorts\/)([^&\n]+)/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return null;
  }

  const youtube = data?.videoLink;

  return (
    <>
      <div className=" bg-white shadow rounded-md p-7 my-8 ">
        <h2 className=" text-lg font-semibold mb-4">Video</h2>
        <div className=" relative md:h-[500px] h-auto">
          <Image
            src={data?.images[0]}
            width={1000}
            height={1000}
            alt="video"
            className=" w-full h-full object-cover rounded-md"
          />
          <div  onClick={() => setModalOpen(true)} className="bg-black/40 cursor-pointer  absolute rounded-md top-0 left-0 w-full h-full flex items-center justify-center">
            <button
             
              className=" w-[100px]  rounded-full h-[100px] flex items-center justify-center border-[5px] border-white"
            >
              <FaPlay className=" text-white pl-2 text-[45px]" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={860}
        className={``}
      >
        <div className="z-[50000000] rounded-[20px] bg-white">
          <div className=" flex items-center justify-between">
            <h2 className=" text-[20px] font-semibold text-dark-gray">Video</h2>
            <button
              onClick={() => setModalOpen(false)}
              className="  text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:text-[#FF5959] text-[#68769F]"
            >
              <IoMdClose />
            </button>
          </div>

          <div className=" bg-gray-500 rounded-md overflow-hidden w-full h-[200px] md:h-[400px]">
            {youtube ? (
              <>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${extractVideoID(
                    youtube
                  )}`}
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </>
            ) : (
              <div className=" w-full h-full flex items-center justify-center">
                <h2 className=" text-white text-lg">Video Not Found</h2>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Video;
