import React from "react";
import ProductCard from "../ProductCard";

const BestSellers = () => {
  return (
    <div>
      <h2 className="font-bold text-md text-primary-color py-3">This month</h2>
      <h1 className="font-bold text-2xl pb-3">Best Selling Products</h1>
      <div className="flex flex-wrap gap-4 sm:gap-2 md:flex-nowrap">
        <div className="w-full sm:w-[49%] md:w-1/4">
          <ProductCard />
        </div>
        <div className="w-full sm:w-[49%]  md:w-1/4">
          <ProductCard />
        </div>
        <div className="w-full sm:w-[49%]  md:w-1/4">
          <ProductCard />
        </div>
        <div className="w-full sm:w-[49%]  md:w-1/4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
