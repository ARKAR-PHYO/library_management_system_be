import axios from "axios";
import Cookies from "js-cookie";

const apiCall = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_SERVER_DOMAIN}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api`,
  headers: {},
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default apiCall;
