import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";

const About = () => {
  return (
    <div className="pt-8 md:pt-12 pb-7">
      <div className="max-container">
        <div className="flex items-center gap-2 text-black/80 text-sm mb-3">
          <Link href={"/"}>Home</Link> /{" "}
          <h3 className="text-black/60">{"Contact Us"}</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-7 max-container">
        {/* about us section------------- */}
        <div className="bg-white rounded p-4 md:p-6 w-full">
          <h1 className="text-xl md:text-[35px] mt-2 mb-3">WPRESIDENCE</h1>
          <p className="text-base md:text-[18px]">
            14/B,Level-3,BTI Primer Plaza, Plot-Cha 90/A Progoti Sarani, North
            Badda, Dhaka-1212, Bangladesh
          </p>
          <div className="flex items-center gap-2.5 text-black/60 text-base my-3 md:my-5">
            <FaFacebook className=" cursor-pointer" />
            <FaInstagram className=" cursor-pointer" />
            <FaXTwitter className=" cursor-pointer" />
          </div>

          <div className="">
            <div className="flex items-center gap-1.5 mb-2.5 text-black/60  text-sm ">
              <span className="font-medium">Phone:</span>
              <a className=" " href="tel:+8801772808071">
                01772808071
              </a>
            </div>
            <div className="flex items-center gap-1.5 mb-2.5 text-black/60 text-sm ">
              <span className="font-medium">Email:</span>
              <a className="" href="mailto:deshthikanaltd@gmail.com">
                deshthikanaltd@gmail.com
              </a>
            </div>
          </div>
          <div className="py-2 md:py-4">
            <p className="text-sm text-black/60">
              Quick Search is a trusted name in the real estate industry. Our
              platform is designed to cater to the needs of property seekers and
              owners alike. Whether you are looking for your dream home, an
              investment opportunity, or a rental property, Quick Search
              provides a user-friendly and efficient solution.
            </p>
          </div>
          <Image
            width={1000}
            height={1000}
            alt={"About us"}
            className="w-full object-cover rounded-xl shadow-xl"
            src={"/assets/Apartment/house4.avif"}
          />
        </div>
        {/* featured section--------------------- */}
      </div>
    </div>
  );
};

export default About;
