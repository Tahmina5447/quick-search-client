"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import { loggedInUser } from "../apis/auth.api";
import { getStorage, removeStorage } from "../apis/loadStorage";
import { multiFilterProduct, multiFilterQuery } from "../apis/properties.api";
import { getContact } from "../apis/dashboard.api";

export const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const [currentlyLoggedIn, setCurrentlyLoggedIn] = useState(null);
  const [token, setToken] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);
  const [update, setUpdate] = useState("");
  const [userRole, setUserRole] = useState("");
  const [rentFilter, setRentFilter] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [upazilaFilter, setUpazilaFilter] = useState("");
  const [residentialTypeFilter, setResidentialTypeFilter] = useState("");
  const [commercialTypeFilter, setCommercialTypeFilter] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [bathroomFilter, setBathroomFilter] = useState("");
  const [minPrice, setMinPrice] = useState(""); 
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [completionStatusForSell, setCompletionStatusForSell] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [isVerified, setIsVerified] = useState("");
  const [priority, setPriority] = useState("");
  const [publishStatus, setPublishStatus] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [limit2, setLimit2] = useState(16);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [userType, setUserType] = useState("");
  const [wishlist,setWishlist]=useState([])
  const [wishlistUpdate,setWishlistUpdate]=useState("")
  const [contact,setContact]=useState()
  const [activeBuy, setActiveBuy] = useState("");
  const [activeResidential, setActiveResidential] = useState("");
  const [active2, setActive2] = useState();
  const [active3, setActive3] = useState("");

  useEffect(() => {
    const retrieveUser = async () => {
      const token = getStorage("token");
      setToken(token);

      if (token) {
        const user = await loggedInUser(token);
        if (user) {
          setCurrentlyLoggedIn(user?.data);
          setUserRole(user?.data?.userRole);
          localStorage.setItem("role", user?.data?.userRole);
        } else {
          setCurrentlyLoggedIn(null);
          setUserRole("");
          setToken(null);
          removeStorage("token");
          removeStorage("role");

        }
      } else {
        setCurrentlyLoggedIn(null);
        setUserRole("");
      }
    };
    retrieveUser();
  }, [update]);


  useEffect(()=>{
    const retrieveUser = async () => {
      const getCart = await getStorage("wishlist");
      const cart = JSON.parse(getCart);
      setWishlist(cart)
    }
    retrieveUser()
  },[wishlistUpdate])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getContact();
        setContact(res?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [update]);

  

  const handleClearFilter = () => {
    setCategory([]);
  };

  const clearFilter = () => {
    setRentFilter("");
    setPropertyTypeFilter("");
    setDivisionFilter("");
    setDistrictFilter("");
    setMaxArea("");
    setMinArea("");
    setMaxPrice("");
    setMinPrice("");
    setBathroomFilter("");
    setBedroomFilter("");
    setCommercialTypeFilter("");
    setResidentialTypeFilter("");
    setUpazilaFilter("");
    setCompletionStatusForSell();
    setPublishStatus("");
    setPriority("");
    setActive3("")
    setActive2("")
    setActiveResidential("")
    setActiveBuy("")
  };

  useEffect(() => {
    const data = {
      division: divisionFilter,
      purpose: rentFilter,
      propertyType: propertyTypeFilter,
      district: districtFilter,
      upazila: upazilaFilter,
      bedroom: bedroomFilter,
      bathroom: bathroomFilter,
      completionStatusForSell: completionStatusForSell,
      residentialType: residentialTypeFilter,
      commercialType: commercialTypeFilter,
      maxArea,
      minArea,
      maxPrice,
      minPrice,
      isVerified,
      priority,
      publishStatus,
      page,
      limit,
      limit2,
      publishStatus:"published"
    };

    const data2 = {
      division: divisionFilter,
      purpose: rentFilter,
      propertyType: propertyTypeFilter,
      district: districtFilter,
      upazila: upazilaFilter,
      bedroom: bedroomFilter,
      bathroom: bathroomFilter,
      completionStatusForSell: completionStatusForSell,
      residentialType: residentialTypeFilter,
      commercialType: commercialTypeFilter,
      maxArea,
      minArea,
      maxPrice,
      minPrice,
      isVerified,
      priority,
      publishStatus,
      page,
      limit,
      limit2,
    };

    const filterFun = async () => {
      setLoading(true);
      const res = await multiFilterProduct(data);
      if (res) {
        setFilterData(res);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    filterFun();
    const query = () => {
      const res = multiFilterQuery(data2);
      setSearchQuery(res);
    };
    query();
  }, [
    divisionFilter,
    maxArea,
    minArea,
    maxPrice,
    minPrice,
    residentialTypeFilter,
    commercialTypeFilter,
    completionStatusForSell,
    bathroomFilter,
    bedroomFilter,
    upazilaFilter,
    districtFilter,
    propertyTypeFilter,
    rentFilter,
    isVerified,
    priority,
    publishStatus,
    page,
    limit,
    limit2,
  ]);

  const contextValues = {
    token,
    currentlyLoggedIn,
    setToken,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    handleClearFilter,
    setUpdate,
    update,
    userRole,
    rentFilter,
    setRentFilter,
    propertyTypeFilter,
    setPropertyTypeFilter,
    divisionFilter,
    setDivisionFilter,
    districtFilter,
    setDistrictFilter,
    maxArea,
    setMaxArea,
    minArea,
    setMinArea,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    bathroomFilter,
    setBathroomFilter,
    bedroomFilter,
    setBedroomFilter,
    commercialTypeFilter,
    setCommercialTypeFilter,
    residentialTypeFilter,
    setResidentialTypeFilter,
    upazilaFilter,
    setUpazilaFilter,
    completionStatusForSell,
    setCompletionStatusForSell,
    filterData,
    loading,
    clearFilter,
    setUser,
    searchQuery,
    isVerified,
    setIsVerified,
    priority,
    setPriority,
    publishStatus,
    setPublishStatus,
    limit,
    setLimit,
    page,
    setPage,
    drawerVisible,
    setDrawerVisible,
    limit2,
    setLimit2,
    userType, setUserType,
    status, setStatus,
    wishlist,
    setWishlistUpdate,
    contact,activeResidential, setActiveResidential,activeBuy, setActiveBuy,active2, setActive2,
    active3, setActive3
  };

  return (
    <ContextData.Provider value={contextValues}>
      {children}
    </ContextData.Provider>
  );
};
