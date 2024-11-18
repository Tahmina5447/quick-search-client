import Image from "next/image";
import React from "react";
import img1 from '../../../public/assets/Apartment/house1.avif'
import img2 from '../../../public/assets/Apartment/house2.avif'
import img4 from '../../../public/assets/Apartment/house4.avif'
import logo1 from '../../../public/assets/logo/logo1.jpg'
import logo2 from '../../../public/assets/logo/logo2.jpg'


const Welcome = () => {
  return (
    <div className="max-container">
      <div className=" flex items-center md:flex-row flex-col gap-6 md:my-[100px] my-5">
        <div className=" w-full font-semibold md:text-4xl text-xl ">
          <h2>Welcome To The</h2>
          <h2 className=" mt-3">Silverstone</h2>
        </div>
        <div className=" w-full">
          <p className=" font-medium text-gray-600 text-base">
            Welcome to Homeya, where we turn houses into homes and dreams into
            reality. At Homeya, we understand that a home is more than just a
            physical space; it's a place where memories are created, families
            grow, and life unfolds.
          </p>
        </div>
      </div>

      <div className="mb-24 lg:flex justify-center items-center gap-10 w-full mt-20 lg:mt-0">
        <div className="lg:w-[50%] flex justify-center gap-5">
          <div className="w-[45%] space-y-6">
            <div className="relative">
              <Image
                src={img1}
                alt="house1"
                className="w-full h-96 object-cover  rounded-2xl shadow-xl "
              />
              <div className="absolute inset-0 h-full bg-black opacity-20 rounded-2xl  shadow-xl"></div>
            </div>
            <div className="relative">
              <Image
                src={img4}
                alt="house1"
                className="  w-full object-cover  rounded-2xl shadow-xl "
              />
              <div className="absolute inset-0 h-full bg-black opacity-20 rounded-2xl  shadow-xl"></div>
            </div>
          </div>
          <div className="w-[55%] relative">
            <Image
              src={img2}
              alt="house1"
              className="h-full w-full object-cover  rounded-2xl shadow-xl mt-10"
            />
            <div className="absolute inset-0 h-full bg-black opacity-20 rounded-2xl  shadow-xl mt-10"></div>
          </div>
        </div>
        <div className="lg:w-[50%] md:pl-10 mt-20 lg:mt-0">
          <h1 className="font-semibold md:mb-10 mb-5 text-xl">WHO ARE WE</h1>
          <h1 className="md:text-4xl text-3xl font-semibold text-justify">
            Assisting individuals in locating the appropriate real estate.
          </h1>

          <div className=" flex gap-10 mt-12 ">
            <div>
              <Image
                src={logo1}
                alt="logo1"
                className="h-14 w-14 object-cover "
                height={100}
                width={100}
              />
              <h1 className="sm:text-2xl text-xl font-bold mt-5 mb-2">
                50k+ renters
              </h1>
              <p className=" text-justify sm:text-sm text-xs">
                believe in our service
              </p>
            </div>
            <div>
              <Image
                src={logo2}
                alt="logo1"
                className="h-14 w-14 object-cover  "
                height={100}
                width={100}
              />
              <h1 className="sm:text-2xl text-xl font-bold mt-5 mb-2">
                10k+ properties
              </h1>
              <p className="  text-justify sm:text-sm text-xs">
                and house ready for occupancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
