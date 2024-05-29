import axios from "../../axios.config";

export const apiRegister = (data) =>
  axios({
    url: "http://localhost:5000/api/auth/register",
    method: "post",
    data,
  });

export const apiLogin = (data) =>
  axios({
    url: "http://localhost:5000/api/auth/login",
    method: "post",
    data,
  });

export const apiLogout = () =>
  axios({
    url: "http://localhost:5000/api/auth/logout",
    method: "put",
  });
