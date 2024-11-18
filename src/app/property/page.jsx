import Agents from "@/components/PropertyPage/Agents";
import PropertyContact from "@/components/PropertyPage/PropertyContact";
import PropertyList from "@/components/PropertyPage/PropertyList";
import PropertyTop from "@/components/PropertyPage/PropertyTop";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

const Property = () => {
  return (
    <div className="pt-20 bg-gray-100">
      {/* <PropertyTop /> */}
      <PropertyList />
      {/* <Agents /> */}
      {/* <PropertyContact /> */}
    </div>
  );
};

export default Property;
