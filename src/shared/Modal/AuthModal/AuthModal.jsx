"use client";

import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

const AuthModal = ({ modalOPen, setModalOpen, width, className, title }) => {
  const [active, setActive] = useState("Login");
  const modalStyle = {
    padding: 0, // Set padding to 0 for the Modal component
  };

  const data = ["Login", "Register"];

  return (
    <div>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={true}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={width}
        className={` ${className}`}
        style={modalStyle}
      >
        <div className="z-[50000000] h-[450px] rounded-[20px] bg-white pb-3">
          <div className=" flex items-start gap-5">
            <div className=" w-full h-[450px]  rounded-lg overflow-hidden relative">
              <Image
                src={"/assets/login-modal.jpg"}
                width={800}
                height={800}
                alt="modal"
                className=" w-full h-full object-cover"
              />
              <div className=" absolute top-0 flex flex-col justify-between left-0 w-full p-7 px-10 h-full bg-black/70">
                <div>
                  <h2 className=" text-white mb-3 font-semibold text-2xl leading-8">
                    Owning a home is a keystone of wealth… both financial
                    affluence and emotional security.
                  </h2>
                  <span className=" text-xl font-semibold text-gray-400 mt-4">
                    Suze Orman
                  </span>
                </div>
                <div>
                  <h3 className=" text-xl text-white font-semibold">
                    July 2, 2024
                  </h3>
                  <h2 className="text-4xl text-white font-semibold">
                    Tuesday!
                  </h2>
                </div>
              </div>
            </div>
            <div className=" p-5 w-full">
              <h2 className=" text-3xl text-gray-500 font-bold">
                RealHomes Modern
              </h2>
              <div className=" mt-3 flex items-center gap-4">
                {data.map((item, index) => (
                  <button
                    onClick={() => setActive(item)}
                    className={` text-base font-semibold ${
                      item === active
                        ? "text-primary py-3 border-b-2 border-primary"
                        : " text-gray-500 border-b-2 border-transparent"
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="">
                {active === "Login" ? (
                  <>
                    <LoginComponent />
                  </>
                ) : (
                  <>
                    <RegisterComponent />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AuthModal;
