import PropertyDetails from "@/components/Dashboard/Properties/PropertyDetails";
import React from "react";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <PropertyDetails id={id} />
    </div>
  );
};

export default page;
