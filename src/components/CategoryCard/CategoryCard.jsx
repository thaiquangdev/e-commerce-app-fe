import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-sm p-3">
      <Link
        to={`/${data?.category}`}
        className="flex flex-col items-center justify-center "
      >
        <img
          src={data?.image}
          alt=""
          width={56}
          height={56}
          className="object-cover"
        />
        <span className="pt-2 text-sm">{data?.category}</span>
      </Link>
    </div>
  );
};

export default CategoryCard;
