
import UpdateProperties from "@/components/Dashboard/Properties/UpdateProperties";
import React from "react";

const page = ({ params }) => {
  const id = params?.id;
  return (
    <div>
      <UpdateProperties id={id} />
    </div>
  );
};

export default page;
