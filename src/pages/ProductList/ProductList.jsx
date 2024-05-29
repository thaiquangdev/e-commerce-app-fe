import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductsApi } from "../../services/api/productApi";

const ProductList = () => {
  const [productsData, setProductsData] = useState(null);
  console.log(productsData);
  const fetchProducts = async () => {
    const response = await getProductsApi();
    if (response.status === "success") {
      setProductsData(response.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div></div>
      <div>
        <h1 className="text-xl font-bold">All Products For You!</h1>
        <div className="pt-4 flex flex-wrap gap-3 lg:gap-2">
          {productsData &&
            productsData?.map((item) => {
              return (
                <div className="w-full md:w-[49%] lg:w-[24%]" key={item?._id}>
                  <ProductCard data={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
