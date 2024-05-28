import axios from "../../axios.config";

export const getCategories = () =>
  axios({
    url: "http://localhost:5000/api/category/",
    method: "get",
  });
