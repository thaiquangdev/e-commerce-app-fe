import React, { useState } from "react";
import { icons } from "../../utils/icons";
import { ratingProductApi } from "../../services/api/productApi";
import toast from "react-hot-toast";

const { CiStar } = icons;

const RatingProduct = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleRating = (value) => {
    setRating(value);
  };
  const handleReview = async () => {
    const response = await ratingProductApi({ rating, comment, productId });
    if (response.status === "success") {
      toast.success("Review product is successfully!");
    }
  };
  return (
    <>
      <div className="text-black flex items-center justify-center">
        <h2>Review product </h2>
      </div>
      <div className=" text-black flex items-center justify-center mt-2">
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;
          return (
            <div
              key={index}
              onClick={() => handleRating(starValue)}
              className={`cursor-pointer ${
                starValue <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              <CiStar size={24} />
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <textarea
          name=""
          id=""
          className="border outline-none"
          cols={50}
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-2">
        <button
          className="px-4 py-2 bg-primary-color text-white rounded-md"
          onClick={handleReview}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default RatingProduct;
