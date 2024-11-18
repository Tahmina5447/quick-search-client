"use client";
import React from "react";
import MyProperty from "@/components/Dashboard/Properties/MyProperties";

function MyProperties() {
  return (
    <div>
      <MyProperty user="user" type={"/user"} data={[{title:"My Properties",url:"my-properties"}]}/>
    </div>
  );
}

export default MyProperties;
