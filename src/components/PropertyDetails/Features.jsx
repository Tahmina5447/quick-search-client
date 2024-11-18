
import { GiPowerGenerator } from "react-icons/gi";

import React from "react";
import { TbAerialLift, TbWavesElectricity } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { FaGasPump, FaHandHoldingWater } from "react-icons/fa";

function Features({ data }) {


  return (
    <div className=" bg-white shadow rounded-md p-7 my-8 ">
      <h2 className=" text-lg font-semibold mb-5">Features</h2>
      <div>
        {/* <h2 className=" font-semibold text-sm mb-3">Interior Details</h2> */}
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
          {data?.features?.lift && (
            <div className=" flex items-center gap-2">
              <TbAerialLift className=" text-[22px]" />{" "}
              <h2
                className={`text-sm font-normal text-info ${
                  data?.features?.lift ? "" : ""
                }`}
              >
                Lift
              </h2>
            </div>
          )}

          {data?.features?.generator && (
            <div className=" flex items-center gap-2">
              <GiPowerGenerator className=" text-[22px]" />{" "}
              <h2
                className={`text-sm font-normal text-info ${
                  data?.features?.generator ? "" : ""
                }`}
              >
                Generator
              </h2>
            </div>
          )}

          {data?.features?.security && (
            <div className=" flex items-center gap-2">
              <MdOutlineSecurity className=" text-[22px]" />{" "}
              <h2
                className={`text-sm font-normal text-info ${
                  data?.features?.security ? "" : ""
                }`}
              >
                Security
              </h2>
            </div>
          )}

          {data?.features?.gas && (
            <div className=" flex items-center gap-2">
              <FaGasPump className=" text-[22px]" />
              <h2
                className={`text-sm font-normal text-info ${
                  data?.features?.gas ? "" : ""
                }`}
              >
                Gas
              </h2>
            </div>
          )}

          {data?.features?.water && (
            <div className=" flex items-center gap-2">
              <FaHandHoldingWater className=" text-[22px]" />
              <h2
                className={`text-sm font-normal text-info ${
                  data?.features?.water ? "" : ""
                }`}
              >
                Water
              </h2>
            </div>
          )}

          {data?.features?.electricity && (
            <div className=" flex items-center gap-2">
              <TbWavesElectricity className=" text-[22px]" />
              <h2
                className={`text-sm font-normal text-info ${
                  data?.features?.electricity ? "" : ""
                }`}
              >
                Electricity
              </h2>
            </div>
          )}
        </div>
      </div>
      {/* <div className=" mt-5">
        <h2 className=" font-semibold text-sm mb-3">Interior Details</h2>
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
          <div className=" flex items-center gap-2">
            <Svg5 />{" "}
            <h2 className=" text-sm font-normal text-info">Back yard</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg7 /> <h2 className=" text-sm font-normal text-info">Basketball court</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg7 /> <h2 className=" text-sm font-normal text-info">Front yard</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg8 />{" "}
            <h2 className=" text-sm font-normal text-info">Garage Attached</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg9 />{" "}
            <h2 className=" text-sm font-normal text-info">Hot Bath</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg11 />{" "}
            <h2 className=" text-sm font-normal text-info"> Pool</h2>
          </div>
        </div>
      </div>

      <div className=" mt-5">
        <h2 className=" font-semibold text-sm mb-3">Interior Details</h2>
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
          <div className=" flex items-center gap-2">
            <Svg1 />{" "}
            <h2 className=" text-sm font-normal text-info">Equipped Kitchen</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg2 /> <h2 className=" text-sm font-normal text-info">Gym</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg3 /> <h2 className=" text-sm font-normal text-info">Laundry</h2>
          </div>
          <div className=" flex items-center gap-2">
            <Svg2 />{" "}
            <h2 className=" text-sm font-normal text-info">Media Room</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Features;
