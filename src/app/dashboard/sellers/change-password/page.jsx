"use client";


import ChangePassword from "@/components/Setting/ChangePassword";
import React from "react";

function Change() {


  return (
    <div>
      <ChangePassword type={"/user"} data={[{title:"Change Password",url:"change-password"}]} />
    </div>
  );
}

export default Change;
