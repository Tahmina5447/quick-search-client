"use client";

import React, { useEffect, useState } from "react";
import PropertyDetailsTop from "./PropertyDetailsTop";
import Overview from "./Overview";
import Description from "./Description";
import Address from "./Address";
import Details from "./Details";
import Features from "./Features";
import Video from "./Video";
import Map from "./Map";
import PropertyContactUs1 from "./PropertyContactUs1";
import SimilarListings from "./SimilarListings";
import PropertyContactUs2 from "./PropertyContactUs2";
import ImageSlyder from "./ImageSlyder";
import { PROPERTY_URL } from "../../../apis/url";
import PropertyDetailsSkeleton from "@/shared/Skeleton/PropertyDetailsSkeleton";

const PropertyDetailsMain = ({ propertiesData,id }) => {
  // const [propertiesData, setPropertiesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(false);
 
  useEffect(() => {
    setClient(true);
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${PROPERTY_URL}/${id}`);
  //       if (!res.ok) {
  //         setLoading(false);
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await res.json();
  //       setLoading(false);
  //       setPropertiesData(data?.data);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     fetchData();
  //   }
  // }, [id]);

  return (
    <div className=" mt-10">
      {client ? (
        <>
          {" "}
          {loading ? (
            <>
              <div className="max-container">
                <PropertyDetailsSkeleton />
              </div>
            </>
          ) : (
            <div>
              <PropertyDetailsTop data={propertiesData} />
              <div className="max-container">
                <div className=" flex my-5 items-start flex-col md:flex-row gap-5 justify-between">
                  <div className=" md:w-[70%] w-full space-y-5">
                    <ImageSlyder data={propertiesData} />
                    <Overview data={propertiesData} />
                    <Description data={propertiesData} />
                    <Address data={propertiesData} />
                    <Details data={propertiesData} />
                    <Features data={propertiesData} />
                    <Video data={propertiesData} />
                    <Map data={propertiesData} />
                    {/* <PropertyContactUs1 /> */}
                    <div className=" md:hidden block">
                      <PropertyContactUs2 data={propertiesData}/>
                    </div>
                    <SimilarListings data={propertiesData} />
                  </div>
                  <div className=" md:w-[30%] w-full sticky top-[90px]">
                    <div className=" hidden md:block">
                      <PropertyContactUs2 data={propertiesData}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="max-container">
          <PropertyDetailsSkeleton />
        </div>
      )}
    </div>
  );
};

export default PropertyDetailsMain;
