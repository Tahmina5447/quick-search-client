import axios from "axios";
import { BLOG_URL } from "./url";
import { toast } from "react-toastify";

export const multiFilterBlogs = async (data) => {
  const { searchTerm, isPublished, category, page, limit } = data;

  const queryParams = {
    searchTerm,
    isPublished,
    category,
    page,
    limit,
  };
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );

  try {
    const queryString = new URLSearchParams(filteredParams).toString();
    const url = `${BLOG_URL}?${queryString}`;
    const res = await axios.get(url);

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneBlogs = async (id) => {
  try {
    const url = `${BLOG_URL}/${id}`;
    const res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
    return error
  }
};

export const getOneByPath = async (path) => {
  try {
    const url =`${BLOG_URL}/path/${path}`;
    const res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
    return error
  }
};

export const blogPost = async (body, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.post(BLOG_URL, body, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};

export const blogPatch = async (body, id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.patch(`${BLOG_URL}/${id}`, body, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};

export const blogDelete = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const res = await axios.delete(`${BLOG_URL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    toast.error("something went wrong");
    throw error;
  }
};
