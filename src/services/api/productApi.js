import axios from "../../axios.config";

export const getProductsApi = (params) =>
  axios({
    url: "http://localhost:5500/api/products/",
    method: "get",
    params,
  });

export const getProductApi = (param) =>
  axios({
    url: `http://localhost:5500/api/products/${param}`,
    method: "get",
  });

export const ratingProductApi = (data) =>
  axios({
    url: "http://localhost:5500/api/rating/rating-product",
    method: "post",
    data,
  });
