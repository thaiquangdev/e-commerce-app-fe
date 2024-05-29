import axios from "../../axios.config";

export const getProductsApi = () =>
  axios({
    url: "http://localhost:5000/api/products/",
    method: "get",
  });

export const getProductApi = (param) =>
  axios({
    url: `http://localhost:5000/api/products/${param}`,
    method: "get",
  });
