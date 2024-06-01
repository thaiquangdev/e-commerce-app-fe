import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils/helpers";

const CustomizeProducts = ({ variants }) => {
  const [color, setColor] = useState(null);
  const [ram, setRam] = useState(null);
  const uniqueVariants = variants?.reduce((acc, curr) => {
    const found = acc.some((v) => v.color === curr.color);
    if (!found) acc.push(curr);
    return acc;
  }, []);

  const filteredVariants = variants?.filter(
    (variant) => variant.color === color
  );

  const selectedVariant = variants?.find(
    (variant) => variant.color === color && variant.ram === ram
  );

  useEffect(() => {
    if (variants?.length > 0) {
      setColor(variants[0].color);
      setRam(variants[0].ram);
    }
  }, [variants]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">
          {formatPrice(selectedVariant?.priceOld)}
        </h3>
        <h3 className="font-medium text-2xl">
          {formatPrice(selectedVariant?.priceNew)}
        </h3>
      </div>
      <div className="h-[2px] bg-gray-100" />
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        {uniqueVariants?.map((item) => {
          return (
            <li
              className={`ring-1 ring-primary-color text-primary-color rounded-md py-1 px-4 text-sm cursor-pointer ${
                item.color === color ? "bg-primary-color text-white" : ""
              }`}
              key={item?._id}
              onClick={() => {
                setColor(item.color);
              }}
            >
              {item?.color}
            </li>
          );
        })}
      </ul>
      <h4 className="font-medium">Choose a ram</h4>
      <ul className="flex items-center gap-3">
        {filteredVariants?.map((item) => (
          <li
            className={`ring-1 ring-primary-color text-primary-color rounded-md py-1 px-4 text-sm cursor-pointer ${
              item.stock === 0 ? "opacity-50 disabled:cursor-not-allowed" : ""
            } ${item.ram === ram ? "bg-primary-color text-white" : ""}`}
            key={item?._id}
            onClick={() => item.stock > 0 && setRam(item.ram)}
          >
            {item?.ram}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomizeProducts;
