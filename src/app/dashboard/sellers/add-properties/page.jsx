import React from "react";
import AddProperty from "@/components/AdminDashboard/Property/AddProperty";

function AddProperties() {

  return (
    <div>
      <AddProperty title={"/dashboard/sellers"} data={[{title:"Add Properties",url:"add-properties"}]} user="seller" />
    </div>
  );
}

export default AddProperties;
