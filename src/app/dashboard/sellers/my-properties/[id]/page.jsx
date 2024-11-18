
import UpdateProperties from "@/components/Dashboard/Properties/UpdateProperties";
import React from "react";

const page = ({ params }) => {
  const id = params?.id;
  return (
    <div>
      <UpdateProperties id={id} type="/user" data={[{title:"My Properties",url:"my-properties"},{title:"My Properties Update",url:"my-properties"}]} user="user" />
    </div>
  );
};

export default page;
