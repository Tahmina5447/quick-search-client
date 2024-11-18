"use client";

import React, { useEffect, useState } from "react";
import { USER_URL } from "../../../../../../apis/url";
import ViewProfile from "@/components/AdminDashboard/Profile/ViewProfile";

const Page = ({ params }) => {
  const id = params.id;
  const [userData, setUserData] = useState(null);
  const [update, setUpdate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${USER_URL}/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setUserData(data?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);


  const token = "";

  return (
    <div>
      <ViewProfile
        currentlyLoggedIn={userData}
        setUpdate={setUpdate}
        token={token}
        name={userData?.name}
        title={`View ${userData?.name} Profile`}
        type="/admin"
        data={[{ title: "All Properties", url: "properties" },{ title: "User Profile", url: "#" }]}
      />
    </div>
  );
};

export default Page;
