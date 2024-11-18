import axios from "axios";
import { BASE_URL } from "./url";
import { toast } from "react-toastify";

export const dashboardData = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const url = `${BASE_URL}/properties/admin/properties-data`;
    const res = await axios.get(url, config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getContact = async () => {
  try {
    const url = `${BASE_URL}/property-contact`;
    const res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const dashboardUserTotal = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const url = `${BASE_URL}/users/admin/user-data`;
    const res = await axios.get(url, config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const dashboardDataUser = async (token, id) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const url = `${BASE_URL}/properties/seller/property-data/${id}`;
    const res = await axios.get(url, config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const contactPost = async (body, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.post(`${BASE_URL}/property-contact`, body, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};
