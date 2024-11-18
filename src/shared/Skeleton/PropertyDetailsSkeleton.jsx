import React from "react";

const PropertyDetailsSkeleton = () => {
  return (
    <div className="p-2">
      <div className=" flex items-center md:flex-row flex-col justify-between">
        <div>
          <div className=" flex items-center flex-row gap-3">
            <div className="md:w-[200px] w-[100px] h-[30px] my-3 rounded skeleton"></div>
            <div className=":md:w-[200px] w-[100px] h-[30px] my-3 rounded skeleton"></div>
          </div>
          <div className="md:w-[570px] w-[300px] h-[25px] my-1 rounded skeleton"></div>
          <div className="md:w-[300px] w-[200px] h-[7px] my-3 rounded skeleton"></div>
        </div>
        <div className=" md:flex flex-col items-end hidden justify-end">
          <div className="w-[200px] h-[30px] my-1 rounded skeleton"></div>
          <div className=" flex items-center gap-3 mt-3">
            <div className="w-[120px] h-[20px] my-1 rounded skeleton"></div>
            <div className="w-[120px] h-[20px] my-1 rounded skeleton"></div>
          </div>
        </div>
      </div>

      <div className=" flex my-5 items-start flex-col md:flex-row gap-5 justify-between">
        <div className=" md:w-[70%] w-full space-y-5">
          <div className=" md:h-[300px]  h-[200px] w-full mx-auto rounded-md skeleton"></div>
          <div className=" flex items-center gap-4">
            <div className="  h-[70px] w-full mx-auto rounded-md skeleton"></div>
            <div className="h-[70px] w-full mx-auto rounded-md skeleton"></div>
            <div className="h-[70px] w-full mx-auto rounded-md skeleton"></div>
            <div className="h-[70px] w-full mx-auto rounded-md skeleton"></div>
          </div>
        </div>
        <div className=" md:w-[30%] w-full sticky top-[90px]">
          <div className=" border rounded-md p-5">
          <div className="w-[90%] h-[17px] my-3 rounded skeleton"></div>
          <div className="w-[90%] h-[35px] my-3 mt-5 rounded skeleton"></div>
          <div className="w-[90%] h-[35px] my-3 rounded skeleton"></div>
          <div className="w-[90%] h-[35px] my-3 rounded skeleton"></div>
          <div className="w-[90%] h-[35px] my-3 rounded skeleton"></div>
          <div className="w-[90%] h-[35px] my-3 rounded skeleton"></div>
          <div className="w-[90%] h-[35px] my-3 rounded skeleton"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PropertyDetailsSkeleton;
