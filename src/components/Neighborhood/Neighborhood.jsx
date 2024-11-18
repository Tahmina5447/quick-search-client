import React, { useContext } from "react";
import dhaka from "../../../public/assets/city/dhaka.jpg";
import barishal from "../../../public/assets/city/barishal.jpg";
import chattogram from "../../../public/assets/city/chattogram.jpg";
import khulna from "../../../public/assets/city/khulna.jpeg";
import mymensingh from "../../../public/assets/city/mymensingh.jpg";
import rajshahi from "../../../public/assets/city/rajshahi.jpeg";
import rangpur from "../../../public/assets/city/rangpur.webp";
import sylhet from "../../../public/assets/city/sylhet.jpg";
import Image from "next/image";
import { ContextData } from "../../../context/dataProviderContext";
import { useRouter } from "next/navigation";

const Neighborhood = () => {
  const { setDivisionFilter } = useContext(ContextData);
  const router = useRouter();

  const cityList = [
    {
      id: "1",
      name: "barishal",
      bn_name: "বরিশাল",
      lat: "22.701002",
      long: "90.353451",
      image: barishal,
    },
    {
      id: "2",
      name: "chattogram",
      bn_name: "চট্টগ্রাম",
      lat: "22.356851",
      long: "91.783182",
      image: chattogram,
    },
    {
      id: "3",
      name: "dhaka",
      bn_name: "ঢাকা",
      lat: "23.810332",
      long: "90.412518",
      image: dhaka,
    },
    {
      id: "4",
      name: "khulna",
      bn_name: "খুলনা",
      lat: "22.845641",
      long: "89.540328",
      image: khulna,
    },
    {
      id: "5",
      name: "rajshahi",
      bn_name: "রাজশাহী",
      lat: "24.363589",
      long: "88.624135",
      image: rajshahi,
    },
    {
      id: "6",
      name: "rangpur",
      bn_name: "রংপুর",
      lat: "25.743892",
      long: "89.275227",
      image: rangpur,
    },
    {
      id: "7",
      name: "sylhet",
      bn_name: "সিলেট",
      lat: "24.894929",
      long: "91.868706",
      image: sylhet,
    },
    {
      id: "8",
      name: "mymensingh",
      bn_name: "ময়মনসিংহ",
      lat: "24.747149",
      long: "90.420273",
      image: mymensingh,
    },
  ];

  const handelClick = (value) => {
    setDivisionFilter(value);
    router.push("/property");
  };

  return (
    <div className="md:py-10 py-5 bg-white">
      <div className="max-container">
        <div className=" text-center">
          <h2 className="md:text-4xl mt-3  text-xl font-semibold text-center">
            Properties by Division
          </h2>
          <h3 className="text-gray-500 mt-2 md:w-[60%] mx-auto text-center">
            Highlight the best of your properties by using the List Category
            shortcode. You can list specific properties categories, types,
            cities, areas.
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 md:gap-7 my-10">
          {cityList?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handelClick(item?.name)}
                className="relative group cursor-pointer"
              >
                <div className="h-[370px] overflow-hidden">
                  <Image
                    src={item?.image}
                    alt="house1"
                    className="h-full w-full object-cover group-hover:scale-110 duration-300 rounded-md shadow-xl "
                  />
                  <div className="absolute inset-0 bg-black opacity-30 rounded-md  shadow-xl"></div>{" "}
                  {/* Dark overlay */}
                </div>
                <div className="absolute left-[20px] bottom-[20px] flex justify-start gap-3 flex-col items-start">
                  <h2 className="text-white text-4xl capitalize font-bold">
                    {item.name}
                  </h2>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
