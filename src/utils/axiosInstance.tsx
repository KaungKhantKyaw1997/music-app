import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.theaudiodb.com/api/v1/json/2/",
});

export default axiosInstance;
