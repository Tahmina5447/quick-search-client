import UpdateProperties from "@/components/Dashboard/Properties/UpdateProperties";
import React from "react";

const Edit = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <UpdateProperties
        id={id}
        type="/admin"
        data={[
          { title: "My Properties", url: "properties/my-properties" },
          { title: "My Properties Update", url: "my-properties" },
        ]}
        user="admin"
      />
    </div>
  );
};

export default Edit;
