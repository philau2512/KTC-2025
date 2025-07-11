import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://68714e4a7ca4d06b34ba0498.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClient;