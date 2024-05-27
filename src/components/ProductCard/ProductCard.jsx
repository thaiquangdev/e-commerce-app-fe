import React from "react";
import { icons } from "../../utils/icons";

const { FaStar } = icons;
const ProductCard = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center border">
        <img
          src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
          alt=""
          width={270}
          height={250}
          className="object-containt py-3"
        />
      </div>
      <div>
        <p className="font-bold text:sm md:text-md ld:text-xl md:font-medium ">
          iPhone 15 pro max
        </p>
        <p className="text-xs md:text-sm text-primary-color">
          35.000.000đ{" "}
          <span className="text-black line-through">40.000.000đ</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
          </div>
          <span>(100)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
