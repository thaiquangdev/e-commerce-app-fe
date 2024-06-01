import axios from "../../axios.config";

export const forgotPasswordApi = (data) =>
  axios({
    url: "http://localhost:5500/api/user/forgot-password",
    method: "post",
    data,
  });

export const resetPasswordApi = (data, params) =>
  axios({
    url: `http://localhost:5500/api/user/reset-password/${params}`,
    method: "post",
    data,
  });
