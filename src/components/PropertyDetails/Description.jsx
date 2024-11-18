import React from "react";

function Description({data}) {
  return (
    <div className=" bg-white shadow rounded-md p-7 my-8 ">
      <h2 className=" text-lg font-semibold mb-4">Description</h2>
      <div>
        <p className=" text-info text-sm mb-3 font-medium">
          {data?.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
