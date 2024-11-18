import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../../context/dataProviderContext";
import { propertiesGet } from "../../../../apis/properties.api";
import PropertySearch from "@/shared/search/PropertySearch";
import Loader from "@/shared/Loader";
import PropertiesCard2 from "@/components/UserDashboard/MyProperties/PropertiesCard2";

const MyPropertyAdmin = () => {
  const { searchQuery, currentlyLoggedIn, clearFilter } =
    useContext(ContextData);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      //   const query = `userDetails=${currentlyLoggedIn?._id}&${searchQuery}`;
      const query = `${searchQuery}`;
      const res = await propertiesGet(query);
      if (res) {
        setFilterData(res);
        setLoading(false);
      }
    };
    GetData();
  }, [currentlyLoggedIn, searchQuery]);

  return (
    <div>
      <div>
        <h3 className=" text-[17px] font-medium">Welcome, Bikash Roy</h3>
        <h2 className=" text-[25px] font-semibold">My Properties</h2>
      </div>

      <div>
        <PropertySearch />
      </div>
      <div className="sm:visible hidden">
        <div className=" flex items-center my-4 justify-end gap-4 ">
          <h2 className="text-sm font-semibold">
            Total {filterData?.data?.data?.length} Properties found
          </h2>
          <button
            onClick={() => clearFilter()}
            className="py-2 px-3 bg-error rounded-md text-white font-medium text-sm"
          >
            Clear Filter
          </button>
        </div>
      </div>

        <div>
            
        </div>

    </div>
  );
};

export default MyPropertyAdmin;
