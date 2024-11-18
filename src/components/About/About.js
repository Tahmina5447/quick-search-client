import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/Apartment/house1.avif";
import img2 from "../../../public/assets/Apartment/house2.avif";
import img3 from "../../../public/assets/Apartment/house3.avif";
import img4 from "../../../public/assets/Apartment/house4.avif";
import logo1 from "../../../public/assets/logo/logo1.jpg";
import logo2 from "../../../public/assets/logo/logo2.jpg";
import logo3 from "../../../public/assets/logo/logo3.jpg";
import logo4 from "../../../public/assets/logo/logo4.jpg";
import { useRouter } from "next/navigation";

const About = () => {

    const router = useRouter()


  return (
    <div className="max-container">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 my-12">
        <div className="relative cursor-pointer">
          <div className="h-96">
            <Image
              src={img1}
              alt="house1"
              className="h-full w-full object-cover  rounded-2xl shadow-xl "
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl  shadow-xl "></div>{" "}
            {/* Dark overlay */}
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h2 className="text-white text-4xl font-bold">House</h2>{" "}
            {/* Centered text with white color */}
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="h-96">
            <Image
              src={img2}
              alt="house1"
              className="h-full w-full object-cover  rounded-2xl shadow-xl "
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl  shadow-xl"></div>{" "}
            {/* Dark overlay */}
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h2 className="text-white text-4xl font-bold">Apartment</h2>{" "}
            {/* Centered text with white color */}
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="h-96">
            <Image
              src={img3}
              alt="house1"
              className="h-full w-full object-cover  rounded-2xl shadow-xl "
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl  shadow-xl"></div>{" "}
            {/* Dark overlay */}
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h2 className="text-white text-4xl font-bold">Commercial</h2>{" "}
            {/* Centered text with white color */}
          </div>
        </div>
        <div className="relative cursor-pointer">
          <div className="h-96">
            <Image
              src={img4}
              alt="house1"
              className="h-full w-full object-cover  rounded-2xl shadow-xl "
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl  shadow-xl"></div>{" "}
            {/* Dark overlay */}
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h2 className="text-white text-4xl font-bold">Cabin</h2>{" "}
            {/* Centered text with white color */}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="md:flex justify-center items-center gap-20">
          <div className="md:w-[40%]">
            <div className="relative">
              <div className="h-[550px]">
                <Image
                  src={img1}
                  alt="house1"
                  className="h-full w-full object-cover  rounded-2xl shadow-xl "
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl  shadow-xl"></div>{" "}
                {/* Dark overlay */}
              </div>
              <div className="absolute top-20 left-10  ">
                <h2 className="text-white text-4xl font-bold leading-[60px]">
                  The new way <br /> to find your <br /> new home
                </h2>{" "}
                {/* Centered text with white color */}
                <p className="text-[#f7f7f7d0]  ">
                  Find your dream place to live in <br /> with more than 10k+
                  <br /> properties listed.
                </p>{" "}
                {/* Centered text with white color */}
              </div>

              <div className="absolute bottom-16 left-10 cursor-pointer">
                <button onClick={()=>router.push("/property")} className="bg-success text-white px-5 py-3 rounded-full text-sm">
                  Browse Properties
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] grid grid-cols-2 gap-10 mt-12 md:mt-0">
            <div>
              <Image
                src={logo1}
                alt="logo1"
                className="h-14 w-14 object-cover "
                height={100}
                width={100}
              />
              <h1 className="sm:text-2xl text-xl font-bold mt-5 mb-5">
                Property Home
              </h1>
              <p className=" text-justify sm:text-sm text-xs">
                Enjoy luxurious bedrooms, elegant bathrooms, and ample natural
                light throughout. Close to amenities, schools, and parks, this
                home offers convenience and a vibrant lifestyle. Discover the
                perfect blend of elegance and functionality in your new home.
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
              <h1 className="sm:text-2xl text-xl font-bold mt-5 mb-5">
                Property Price
              </h1>
              <p className="  text-justify sm:text-sm text-xs">
                Nestled in a tranquil neighborhood, this beautiful property
                boasts modern design and comfort for just Low Price. Featuring
                spacious living areas, a state-of-the-art kitchen, and serene
                outdoor space, it's perfect for families and individuals alike.
              </p>
            </div>
            <div>
              <Image
                src={logo3}
                alt="logo1"
                className="h-14 w-14 object-cover  "
                height={100}
                width={100}
              />
              <h1 className="sm:text-2xl text-xl font-bold mt-5 mb-5">
                Property Insurance
              </h1>
              <p className="text-justify sm:text-sm text-xs">
                Protect your home with our reliable property insurance plans.
                Our coverage includes protection against natural disasters,
                theft, vandalism, and unforeseen damages. Enjoy peace of mind
                knowing your home, belongings, and loved ones are safeguarded
              </p>
            </div>
            <div>
              <Image
                src={logo4}
                alt="logo1"
                className="h-14 w-14 object-cover  "
                height={100}
                width={100}
              />
              <h1 className="sm:text-2xl text-xl font-bold mt-5 mb-5">
                Property Location
              </h1>
              <p className="text-justify sm:text-sm text-xs">
                Situated in the heart of a vibrant and sought-after
                neighborhood, this property offers unparalleled convenience and
                charm. Located close to top-rated schools, lush parks, trendy
                shopping districts, and fine dining establishments, everything
                you need is just a stone's throw away.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mb-24 mb-12 lg:flex justify-center items-center gap-10 w-full mt-20 lg:mt-0">
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
          <h1 className="font-semibold md:mb-10 mb-3 sm:text-xl">WHO ARE WE</h1>
          <h1 className="md:text-4xl sm:text-3xl font-semibold md:text-justify">
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
              <p className=" md:text-justify sm:text-sm text-xs">
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
              <p className="  md:text-justify sm:text-sm text-xs">
                and house ready for occupancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
