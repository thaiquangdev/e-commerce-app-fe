import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return error.response.data;
  }
);

export default instance;
