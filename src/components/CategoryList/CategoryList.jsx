import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import Slider from "../Slider";
import { getCategories } from "../../services/api/categoryApi";

const CategoryList = () => {
  const [data, setData] = useState(null);
  const fetchCategory = async () => {
    const response = await getCategories();
    if (response?.status === "success") {
      setData(response?.categories);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const items = data?.map((item) => (
    <CategoryCard data={item} key={item?._id} />
  ));
  return (
    <div>
      <h2 className="font-bold text-md text-primary-color py-3">Categories</h2>
      <h1 className="font-bold text-2xl pb-3">Browse By Category</h1>
      <Slider items={items} />
    </div>
  );
};

export default CategoryList;
