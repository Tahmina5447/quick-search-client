import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
const MapSection = () => {
  return (
    <div className="relative bg-white">
      <div className="h-[600px] bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116826.77375485485!2d90.33694834365677!3d23.78882946039833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7aae0b32d29%3A0x60b0317e53a6e2a!2sPlaza!5e0!3m2!1sen!2sbd!4v1721298153906!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-container">
        <div className="p-5 md:p-10 shadow-md absolute top-[23%] bg-white max-w-[300px]">
          <div>
            <div>
              <h2 className="text-lg font-medium mb-3">How To Find Us</h2>
              <div className="flex items-center gap-1.5 mb-2.5 text-black/80 ">
                <span className="text-sm">
                  <IoMdCall />
                </span>
                <a className="text-xs " href="tel:+8801772808071">
                  +8801772808071
                </a>
              </div>
              <div className="flex items-center gap-1.5 mb-2.5 text-black/80">
                <span className="text-sm">
                  <MdOutlineMail />
                </span>
                <a className="text-xs" href="mailto:deshthikanaltd@gmail.com">
                  deshthikanaltd@gmail.com
                </a>
              </div>
              <div className="flex  gap-1.5 mb-2.5 text-black/80">
                <span className="text-sm">
                  <MdHome />
                </span>
                <span className="text-xs ">
                  14/B,Level-3,BTI Primer Plaza, Plot-Cha 90/A Progoti Sarani,
                  North Badda, Dhaka-1212, Bangladesh{" "}
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <div className="mt-4">
              <h2 className="text-lg font-medium mb-3">Opening Hours</h2>

              <div className="flex items-center justify-between  mb-2.5 text-black/80 text-xs ">
                <span className="">Monday-Friday:</span>
                <span className="">10:00 - 19:00</span>
              </div>

              <div className="flex items-center justify-between  mb-2.5 text-black/80 text-xs ">
                <span className="">Saturday:</span>
                <span className="">10:00 - 14:00</span>
              </div>

              <div className="flex items-center justify-between  mb-2.5 text-black/80 text-xs ">
                <span className="">Sunday:</span>
                <span className="">Closed</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
