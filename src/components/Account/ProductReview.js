import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductReview = ({ initialRating, initialTotalReviews }) => {
  const [rating, setRating] = useState(initialRating);
  const [totalReviews, setTotalReviews] = useState(initialTotalReviews);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setTotalReviews(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="flex flex-row gap-1 mt-2 md:mt-3">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? "#D90429" : "#FFC0CB"}
        // onClick={() => handleRatingChange(index + 1)}
        // style={{ cursor: "pointer" }}
        />
      ))}
      <p className="text-sm ml-1 font-medium underline">
        {totalReviews} Reviews
      </p>
    </div>
  );
};

export default ProductReview;
