import Axios from "axios";
import JwtToken from './classes/JwtToken';

const axiosClient = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  paramsSerializer: (params) => `?${new URLSearchParams(params).toString()}`,
});

// axiosClient.defaults.headers.common['Authorization']

axiosClient.interceptors.request.use(
  function (config) {
    config.responseType = "json";
    config.headers.Authorization = `${JwtToken.getBearer} ${JwtToken.getToken}`
    return config;
  },
  function (error) {
    // Your code handle error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;