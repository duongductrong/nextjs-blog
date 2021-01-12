import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  paramsSerializer: (params) => `?${new URLSearchParams(params).toString()}`,
});

// axiosInstance.defaults.headers.common['Authorization']

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Your code handle error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Your code handle error
    return Promise.reject(error);
  }
);

export default axiosInstance;
