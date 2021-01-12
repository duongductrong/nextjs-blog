import Axios from "axios";
import JwtToken from "./classes/JwtToken";

const axiosServer = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  paramsSerializer: (params) => `?${new URLSearchParams(params).toString()}`,
});

// axiosServer.defaults.headers.common['Authorization']

axiosServer.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Your code handle error
    return Promise.reject(error);
  }
);

axiosServer.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosServer;
