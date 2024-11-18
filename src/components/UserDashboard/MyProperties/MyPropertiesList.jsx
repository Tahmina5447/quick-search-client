"use client";

import React, { useEffect, useState } from "react";
import home1 from "../../../../public/assets/home/home1.avif";
import home2 from "../../../../public/assets/home/home2.avif";
import home3 from "../../../../public/assets/home/home3.avif";
import home4 from "../../../../public/assets/home/home4.avif";
import home5 from "../../../../public/assets/home/home5.jpg";
import home6 from "../../../../public/assets/home/home6.jpg";
import home7 from "../../../../public/assets/home/home7.jpg";
import home8 from "../../../../public/assets/home/home8.jpg";
import home9 from "../../../../public/assets/home/home9.jpg";

import PropertySearch from "@/shared/search/PropertySearch";
import { TbFilter } from "react-icons/tb";
import { Drawer } from "antd";

function MyPropertiesList() {
  const [active, setActive] = useState("All");
  const [courantItem, setCourantItem] = useState();

  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const home = [
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home1,
      category: "Rent",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home2,
      category: "Rent",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home3,
      category: "Rent",
    },
    // {
    //   title: "Sunset Vista",
    //   price: 1800,
    //   address: "901 Maple Street, Katy, TX",
    //   room: "3 Beds",
    //   bathroom: "2 Bathroom",
    //   area: "7*5m2",
    //   image: home4,
    //   category: "Rent",
    // },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home4,
      category: "Rent",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home5,
      category: "Rent",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home6,
      category: "Rent",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home7,
      category: "Sell",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home8,
      category: "Buy",
    },
    {
      title: "Sunset Vista",
      price: 1800,
      address: "901 Maple Street, Katy, TX",
      room: "3 Beds",
      bathroom: "2 Bathroom",
      area: "7*5m2",
      image: home9,
      category: "Buy",
    },
  ];

  useEffect(() => {
    if (active === "All") {
      setCourantItem(home);
    } else {
      const update = home.filter((item) => item.category === active);
      setCourantItem(update);
    }
  }, [active]);

  return (
    <div className="md:my-[50px] my-5">
      <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-7">
        {courantItem?.map((item, index) => (
          <PropertiesCard key={index} item={item} />
        ))}
      </div>

      <div className="cursor-pointer w-auto flex items-center justify-center my-10">
        <div className="bg-primary text-white px-6 py-4 rounded-full text-base">
          Browse More Properties
        </div>
      </div>

      {/* <Drawer
        title="Filter Properties"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <div>
           <PropertySearch /> 
        </div>
      </Drawer> */}
    </div>
  );
}

export default MyPropertiesList;
