import React from "react";

function Details({ data }) {
  return (
    <div className=" bg-white shadow rounded-md p-7 my-8 ">
      <h2 className=" text-lg font-semibold mb-4">Details</h2>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
        <h2 className=" text-sm font-medium">
          Price: <span className=" text-info font-normal">৳ {data?.price}</span>
        </h2>
        <h2 className=" text-sm font-medium">
          Property Size:{" "}
          <span className=" text-info font-normal">{data?.area} ft2</span>
        </h2>

        {data?.features?.bathroom && (
          <h2 className=" text-sm font-medium">
            Rooms:
            <span className=" text-info font-normal">
              {data?.features?.bathroom}
            </span>
          </h2>
        )}

        {data?.features?.bathroom && (
          <h2 className=" text-sm font-medium">
            Bedrooms:
            <span className=" text-info font-normal">
              {data?.features?.bathroom}
            </span>
          </h2>
        )}

        {data?.features?.bathroom && (
          <h2 className=" text-sm font-medium">
            Bathrooms:
            <span className=" text-info font-normal">
              {" "}
              {data?.features?.bathroom}
            </span>
          </h2>
        )}

        {data?.features?.parking && (
          <h2 className=" text-sm font-medium">
            Parking:
            <span className=" text-info font-normal">
              {" "}
              {data?.features?.parking}
            </span>
          </h2>
        )}

        {data?.features?.floorNo && (
          <h2 className=" text-sm font-medium">
            Floors No:
            <span className=" text-info font-normal">
              {data?.features?.floorNo}
            </span>
          </h2>
        )}

        {data?.features?.balcony && (
          <h2 className=" text-sm font-medium">
            Balcony No:
            <span className=" text-info font-normal">
              {data?.features?.balcony}
            </span>
          </h2>
        )}

        <h2 className=" text-sm font-medium">
          purpose :
          <span className=" text-info capitalize font-normal">
            {data?.purpose}
          </span>
        </h2>
        <h2 className=" text-sm font-medium">
          Property Type :
          <span className=" text-info capitalize font-normal">
            {data?.propertyType}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Details;
