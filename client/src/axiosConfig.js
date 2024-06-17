import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

const axiosConfig = axios.create({
  baseURL: `${baseURL}`,
});

export default axiosConfig;
