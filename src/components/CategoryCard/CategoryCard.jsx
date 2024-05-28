const CategoryCard = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-sm flex flex-col items-center justify-center p-3">
      <img
        src={data?.image}
        alt=""
        width={56}
        height={56}
        className="object-cover"
      />
      <span className="pt-2 text-sm">{data?.category}</span>
    </div>
  );
};

export default CategoryCard;
