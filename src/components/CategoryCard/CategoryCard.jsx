import iphone from "../../assets/images/iphone.png";

const CategoryCard = ({ title }) => {
  return (
    <div className="border border-gray-300 rounded-sm flex flex-col items-center justify-center p-3">
      <img
        src={iphone}
        alt=""
        width={56}
        height={56}
        className="object-cover"
      />
      <span className="pt-2 text-sm">{title}</span>
    </div>
  );
};

export default CategoryCard;
