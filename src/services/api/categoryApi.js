import axios from "../../axios.config";

export const getCategories = () =>
  axios({
    url: "http://localhost:5500/api/category/",
    method: "get",
  });
