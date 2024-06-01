import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { getProductsApi } from "../../services/api/productApi";

const BestSellers = () => {
  const [data, setData] = useState(null);
  const fetchProductsData = async () => {
    const response = await getProductsApi();
    if (response.status === "success") {
      setData(response.products);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <div>
      <h2 className="font-bold text-md text-primary-color py-3">This month</h2>
      <h1 className="font-bold text-2xl pb-3">Best Selling Products</h1>
      <div className="flex flex-wrap gap-4 sm:gap-2 md:flex-nowrap">
        {data &&
          data?.map((item) => {
            return (
              <div className="w-full sm:w-[49%] md:w-1/4" key={item?._id}>
                <ProductCard data={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BestSellers;
