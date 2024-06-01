import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductApi } from "../../services/api/productApi";
import ProductImages from "../../components/ProductImages";
import CustomizeProducts from "../../components/CustomizeProducts";
import Add from "../../components/Add";

const ProductDetail = () => {
  const [data, setData] = useState(null);
  const { slug } = useParams();
  const fetchProductApi = async () => {
    const response = await getProductApi(slug);
    if (response.status === "success") {
      setData(response.product);
    }
  };

  useEffect(() => {
    fetchProductApi();
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages variants={data?.variants} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{data?.title}</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          quod beatae cum totam quae recusandae! Quo minus, est modi fugit
          dolores dolor molestiae molestias consequatur provident unde ipsum ex
          perferendis!
        </p>
        <div className="h-[2px] bg-gray-100" />

        <CustomizeProducts variants={data?.variants} />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="tex-sm">
          <h4 className="font-medium mb-3">Description</h4>
          <div>
            <ul>
              {data?.description?.map((item, index) => {
                return (
                  <li className="text-md" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
