"use client";

import React, { useEffect, useState } from "react";
import { PROPERTY_URL } from "../../../../apis/url";
import PropertyDetailsTop from "@/components/PropertyDetails/PropertyDetailsTop";
import ImageSlyder from "@/components/PropertyDetails/ImageSlyder";
import Overview from "@/components/PropertyDetails/Overview";
import Description from "@/components/PropertyDetails/Description";
import Address from "@/components/PropertyDetails/Address";
import Details from "@/components/PropertyDetails/Details";
import Features from "@/components/PropertyDetails/Features";
import Video from "@/components/PropertyDetails/Video";
import Map from "@/components/PropertyDetails/Map";
import Loader from "@/shared/Loader";

const PropertyDetails = ({ id }) => {
  const [propertiesData, setPropertiesData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`${PROPERTY_URL}/${id}`);
        if (!res.ok) {
          setLoading(false);
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setLoading(false);
        setPropertiesData(data?.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(propertiesData);

  return (
    <div className="max-w-[800px] mx-auto">
      {loading ? (
        <div className=" h-[500px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div>
          <PropertyDetailsTop data={propertiesData} />
          <ImageSlyder data={propertiesData} />
          <Overview data={propertiesData}/>
          <Description data={propertiesData}/>
          <Address data={propertiesData}/>
          <Details data={propertiesData}/>
          <Features data={propertiesData}/>
          <Video />
          <Map />
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
