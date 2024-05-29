import React from "react";
import { icons } from "../../utils/icons";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const { FaStar } = icons;
const ProductCard = ({ data }) => {
  return (
    <div className="">
      <Link to={`/product/:category/${data?.slug}`}>
        <div className="flex items-center justify-center border">
          <img
            src={data?.thumb}
            alt=""
            width={270}
            height={250}
            className="object-containt py-3"
          />
        </div>
        <div>
          <p className="font-bold text:sm md:text-md ld:text-xl ">
            {data?.title}
          </p>
          <p className="text-xs md:text-sm lg:text-md text-primary-color">
            {formatPrice(data?.priceNew)}
            <span className="text-black line-through pl-2">
              {formatPrice(data?.priceOld)}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
              <FaStar size={12} />
            </div>
            <span>{data?.sold}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
