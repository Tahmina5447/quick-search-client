"use client";

import React, { useContext, useEffect, useState } from "react";
import { USER_URL } from "../../../../../apis/url";
import UpdateUser from "@/components/AdminDashboard/Profile/UpdateUser";
import { ContextData } from "../../../../../context/dataProviderContext";

const Page = ({ params }) => {
  const id = params.id;
  const [userData, setUserData] = useState(null);
  const { token,currentlyLoggedIn } = useContext(ContextData);
  const [update,setUpdate]=useState()

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

  console.log(userData);

  return (
    <div>
      <UpdateUser currentlyLoggedIn={userData} token={token} setUpdate={setUpdate} title="User Update" name={currentlyLoggedIn?.name} />
    </div>
  );
};

export default Page;
