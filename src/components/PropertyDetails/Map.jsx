import React from "react";

const Map = ({ data }) => {
  return (
    <>
      <div id="map" className=" bg-white shadow rounded-md p-7 my-8 ">
        <h2 className=" text-lg font-semibold mb-4">Map</h2>
        <div className=" relative">
          <div className="w-full h-full">
            {data?.mapLink ? (
              <div
                className="p-1 product-description md:h-[400px] h-[200px]"
                dangerouslySetInnerHTML={{
                  __html: data?.mapLink,
                }}
              ></div>
            ) : (
              <div className=" w-full bg-gray-300 h-[200px] flex items-center justify-center ">
                <h2 className=" text-red-500 text-xl font-medium">Map Not Found</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
