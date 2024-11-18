import React from "react";

function Address({data}) {
  return (
    <div className=" bg-white shadow rounded-md p-7 my-8 ">
      <h2 className=" text-lg font-semibold mb-4">Address</h2>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
            <h2 className=" text-sm font-medium">Address: <span className=" text-info font-normal">{data?.address?.location}</span></h2>
            <h2 className=" text-sm font-medium">Upazila: <span className=" text-info font-normal">{data?.address?.upazila}</span></h2>
            <h2 className=" text-sm font-medium">District: <span className=" text-info font-normal">{data?.address?.district}</span></h2>
            <h2 className=" text-sm font-medium">Division: <span className=" text-info font-normal">{data?.address?.division}</span></h2>
      </div>
    </div>
  );
}

export default Address;
