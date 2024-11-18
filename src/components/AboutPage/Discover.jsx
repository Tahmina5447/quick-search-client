import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { LiaSellcast } from "react-icons/lia";
import { MdOutlineBedroomParent } from "react-icons/md";

const Discover = () => {
  const data = [
    {
      title: "Buy A New Home",
      sub: "Explore diverse properties and expert guidance for a seamless buying experience.",
      icons: <IoHomeOutline />,
    },
    {
      title: "Rent A Home",
      sub: "Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
      icons: <MdOutlineBedroomParent />,
    },
    {
      title: "Sell A Home",
      sub: "Showcasing your property's best features for a successful sale.",
      icons: <LiaSellcast />,
    },
  ];

  return (
    <div className="md:my-[100px] my-5">
      <div className="max-container">
        <div className=" flex items-center justify-between gap-5 flex-col md:flex-row">
          <div className="w-full">
            <h3 className=" text-red-500 font-semibold text-lg">
              WHY CHOOSE US
            </h3>
            <h2 className=" font-semibold md:text-3xl text-xl mt-2">
              Discover What Sets Our Real Estate Expertise Apart
            </h2>
            <p className=" text-[16px] text-info font-medium mt-4 ">
              At Homeya, our unwavering commitment lies in crafting unparalleled
              real estate journeys. Our seasoned professionals, armed with
              extensive market knowledge, walk alongside you through every phase
              of your property endeavor. We prioritize understanding your unique
              aspirations, tailoring our expertise to match your vision.
            </p>

            <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 my-8">
              <div className=" flex items-center gap-2">
                <IoCheckmarkCircle className=" text-primary text-[29px]" />{" "}
                <h2 className="text-lg font-bold">Transparent Partnerships</h2>
              </div>
              <div className=" flex items-center gap-2">
                <IoCheckmarkCircle className=" text-primary text-[29px]" />{" "}
                <h2 className="text-lg font-bold">Proven Expertise</h2>
              </div>
              <div className=" flex items-center gap-2">
                <IoCheckmarkCircle className=" text-primary text-[29px]" />{" "}
                <h2 className="text-lg font-bold">Customized Solutions</h2>
              </div>
              <div className=" flex items-center gap-2">
                <IoCheckmarkCircle className=" text-primary text-[29px]" />{" "}
                <h2 className="text-lg font-bold">Local Area Knowledge</h2>
              </div>
            </div>
          </div>
          <div className=" flex items-center flex-col gap-4 w-full">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white shadow-sm flex items-center md:flex-row flex-col gap-4 w-full p-5 py-7 rounded-md"
                >
                  <div className=" text-[50px]">{item.icons}</div>
                  <div>
                    <h2 className=" font-semibold md:text-[20px]">
                      {item.title}
                    </h2>
                    <p className=" text-base text-info font-medium">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
