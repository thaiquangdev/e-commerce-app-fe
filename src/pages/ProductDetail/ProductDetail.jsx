import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductApi } from "../../services/api/productApi";
import ProductImages from "../../components/ProductImages";
import CustomizeProducts from "../../components/CustomizeProducts";
import Add from "../../components/Add";
import RatingProduct from "../../components/RatingProduct";
import Reviewer from "../../components/Reviewer";

const ProductDetail = () => {
  const [openReview, setOpenReview] = useState(false);
  const [data, setData] = useState(null);
  const { slug } = useParams();
  const modalRef = useRef(null);

  const fetchProductApi = async () => {
    const response = await getProductApi(slug);
    if (response.status === "success") {
      setData(response.product);
    }
  };

  useEffect(() => {
    fetchProductApi();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenReview(false);
      }
    };

    if (openReview) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openReview]);

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 top-20 h-max">
          <ProductImages variants={data?.variants} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">{data?.title}</h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            quod beatae cum totam quae recusandae! Quo minus, est modi fugit
            dolores dolor molestiae molestias consequatur provident unde ipsum
            ex perferendis!
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
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4">
        <h2 className="text-xl font-semibold">Reviews Product</h2>
        <div className="py-3 flex items-center justify-center">
          <span
            className="px-5 py-3 bg-primary-color text-white rounded-md cursor-pointer"
            onClick={() => setOpenReview((prev) => !prev)}
          >
            Review now
          </span>
          {openReview && (
            <div
              ref={modalRef}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white flex items-center justify-center flex-col w-[500px] h-[300px] border rounded-md"
            >
              <RatingProduct productId={data?._id} />
            </div>
          )}
        </div>
      </div>
      <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border py-3">
        <Reviewer data={data?.ratings} />
      </div>
    </>
  );
};

export default ProductDetail;
