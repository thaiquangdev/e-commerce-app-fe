import CategoryCard from "../CategoryCard";
import Slider from "../Slider";

const items = [
  <CategoryCard title="iphone 1" />,
  <CategoryCard title="iphone 2" />,
  <CategoryCard title="iphone 3" />,
  <CategoryCard title="iphone 4" />,
  <CategoryCard title="iphone 5" />,
  <CategoryCard title="iphone 6" />,
  <CategoryCard title="iphone 7" />,
  <CategoryCard title="iphone 8" />,
];

const CategoryList = () => {
  return (
    <div>
      <h2 className="font-bold text-md text-primary-color py-3">Categories</h2>
      <h1 className="font-bold text-2xl pb-3">Browse By Category</h1>
      <Slider items={items} />
    </div>
  );
};

export default CategoryList;
