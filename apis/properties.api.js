import axios from "axios";
import { BASE_URL, PROPERTY_URL } from "./url";
import { toast } from "react-toastify";

export const multiFilterProduct = async (data) => {
  const {
    searchTerm,
    maxPrice,
    minPrice,
    division,
    commercialType,
    residentialType,
    completionStatusForSell,
    bathroom,
    bedroom,
    upazila,
    district,
    propertyType,
    purpose,
    isVerified,
    publishStatus,
    priority,
    page,
    limit,
    maxArea,
    minArea,
    limit2,
  } = data;

  const queryParams = {
    searchTerm,
    maxPrice,
    minPrice,
    division,
    maxArea,
    minArea,
    commercialType,
    residentialType,
    completionStatusForSell,
    bathroom,
    bedroom,
    upazila,
    district,
    propertyType,
    purpose,
    isVerified,
    publishStatus,
    priority,
    page,
    limit: limit2,
  };
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  try {
    const queryString = new URLSearchParams(filteredParams).toString();
    const url = `${BASE_URL}/properties/?${queryString}`;
    const res = await axios.get(url);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const FilterPropertyHome = async (data) => {
  const { publishStatus,searchTerm, purpose, limit, propertyType } = data;
  const queryParams = {
    publishStatus,
    searchTerm,
    purpose,
    limit,
    propertyType,
  };
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  try {
    const queryString = new URLSearchParams(filteredParams).toString();
    const url = `${BASE_URL}/properties/?${queryString}`;
    const res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const propertyPost = async (body, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.post(PROPERTY_URL, body, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};

export const propertyPatch = async (body, id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.patch(`${PROPERTY_URL}/${id}`, body, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};

export const propertyDelete = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.delete(`${PROPERTY_URL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};

export const propertiesGet = async (query) => {
  try {
    const url = `${BASE_URL}/properties?${query}`;
    const res = await axios.get(url);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const userGet = async (query) => {
  try {
    const url = `${BASE_URL}/users/?${query}`;

    const res = await axios.get(url);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const multiFilterQuery = (data) => {
  const {
    searchTerm,
    maxPrice,
    minPrice,
    division,
    commercialType,
    residentialType,
    completionStatusForSell,
    bathroom,
    bedroom,
    upazila,
    district,
    propertyType,
    purpose,
    isVerified,
    publishStatus,
    priority,
    page,
    limit,
  } = data;

  const queryParams = {
    searchTerm,
    maxPrice,
    minPrice,
    division,
    commercialType,
    residentialType,
    completionStatusForSell,
    bathroom,
    bedroom,
    upazila,
    district,
    propertyType,
    purpose,
    isVerified,
    publishStatus,
    priority,
    page,
    limit,
  };
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  const queryString = new URLSearchParams(filteredParams).toString();

  return queryString;
};
