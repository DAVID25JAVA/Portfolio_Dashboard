import axios from "axios";

const backendUri = "https://portfolio-dashboard-backend-4eev.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: backendUri,
  withCredentials: true,
});

const API = async ({ method, url, data = {}, params = {} }) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message || "API Error");
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Something went wrong"
    );
  }
};
export default API;
