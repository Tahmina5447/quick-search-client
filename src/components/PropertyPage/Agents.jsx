import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Agents() {
  const team = [
    {
      name: "Martin Miller",
      title: "Listing Agent",
      image: "/assets/team/agent-dallas-3-500x328.webp",
      sub: "I am a full-time licensed real estate agent and I’ve been helping my clients achieve the “ ...",
    },
    {
      name: "Jessica Weber",
      title: "Real Estate Agent",
      image: "/assets/team/agent-dallas-4-500x328.webp",
      sub: "I am a full-time licensed real estate agent and I’ve been helping my clients achieve the & ...",
    },
  ];

  return (
    <div className="md:my-[80px] my-5">
      <div className=" max-container">
        <h2 className=" text-2xl mb-4 font-semibold">Our Agents</h2>
        <div className=" grid md:grid-cols-3 gap-7 sm:grid-cols-2 grid-cols-1">
          {team.map((item, index) => {
            return (
              <div
                key={index}
                className=" bg-white group rounded-md cursor-pointer shadow-sm p-3"
              >
                <div className="h-[250px] overflow-hidden relative ">
                  <Image
                    src={item.image}
                    width={600}
                    height={600}
                    alt="team"
                    className=" w-full h-full group-hover:scale-110 duration-300"
                  />
                  <span className=" py-1 px-5 absolute text-sm left-5 bottom-4 bg-primary text-white rounded-lg">1 listing</span>
                </div>
                <div className="p-5 pt-7">
                  <h2 className=" text-xl group-hover:text-primary duration-300 font-semibold">
                    {item.name}
                  </h2>
                  <h4 className=" text-sm font-medium text-gray-600 mt-1">
                    {item.title}
                  </h4>
                  <p className=" text-info font-normal mt-4 text-sm">
                    {item.sub}
                  </p>
                  <div className=" mt-5 flex items-center justify-between">
                    <div className=" flex items-center text-gray-500 gap-5 text-sm">
                      <FaFacebookF />
                      <FaYoutube />
                      <IoLogoInstagram />
                      <FaLinkedinIn />
                      <FaPinterest />
                    </div>
                    <div className=" flex items-center text-gray-500 gap-5 text-sm">
                        <MdEmail className=" text-xl"/>
                        <FaPhoneAlt />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Agents;
