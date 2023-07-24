import axios from "axios";

const baseUrl = "https://dummyjson.com";

export const getOrders = async () => {
  try {
    const response = await axios.get(`${baseUrl}/carts/1`);
    if (response.status !== 200) {
      throw new Error("Request failed with status:", response.status);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getRevenue = async () => {
  try {
    const response = await axios.get(`${baseUrl}/carts`);
    if (response.status !== 200) {
      throw new Error("Request failed with status:", response.status);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getInventory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    if (response.status !== 200) {
      throw new Error("Request failed with status:", response.status);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

