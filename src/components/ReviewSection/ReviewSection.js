import useAuth from "@/auth/useAuth";
import React, { useState } from "react";
import ReviewModal from "../ReviewModal";
import ReactStars from "react-rating-stars-component";

export const ReviewSection = ({ reviews, productId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Calculate the number of reviews for each rating
  const ratingsCount = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  reviews?.forEach((review) => {
    ratingsCount[review.rating]++;
  });

  const totalReviews = reviews?.length;
  const ratingPercentages = {};

  Object.keys(ratingsCount).forEach((rating) => {
    ratingPercentages[rating] = (ratingsCount[rating] / totalReviews) * 100;
  });

  const averageRating =
    reviews?.reduce((sum, review) => sum + review.rating, 0) / reviews?.length;
  const displayRating = isNaN(averageRating) ? 0 : averageRating.toFixed(1);


  return (
    <div className="w-full bg-gray-50 md:mx-auto">
      <div className="my-2 mx-auto max-w-screen-md px-10 py-16">
        <div className="flex w-full flex-col">
          <div className="flex flex-col sm:flex-row">
            <h1 className="max-w-sm text-xl font-bold">Customer Reviews</h1>
            <div className="my-4 rounded-xl bg-white py-2 px-4 shadow sm:my-0 sm:ml-auto">
              <div className="flex h-16 items-center text-2xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {/* 4.7 */}
                {displayRating}
              </div>
              <p className="text-sm text-gray-500">Average User Rating</p>
            </div>
          </div>
          {/* <div className="text-gray-700">
            <p className="font-medium">Reviews</p>
            <ul className="mb-6 mt-2 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <li
                  key={rating}
                  className="flex items-center text-sm font-medium"
                >
                  <span className="w-3">{rating}</span>
                  <span className="mr-4 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${ratingPercentages[rating]}%` }}
                    ></div>
                  </div>
                  <span className="w-3">{ratingsCount[rating]}</span>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="text-gray-700">
            <p className="font-medium">Reviews</p>
            <ul className="mb-6 mt-2 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <li
                  key={rating}
                  className="flex items-center text-sm font-medium"
                >
                  <span className="w-3">{rating}</span>
                  <span className="mr-4 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                    <div
                      className={
                        ratingsCount[rating] === 0
                          ? "h-full bg-gray-300"
                          : "h-full bg-primary"
                      }
                      style={{ width: `${ratingPercentages[rating]}%` }}
                    ></div>
                  </div>
                  <span className="w-3">{ratingsCount[rating]}</span>
                </li>
              ))}
            </ul>
          </div>

          {user && (
            <button
              onClick={openModal}
              className="w-36 rounded-full bg-accent py-3 text-white font-medium"
            >
              Write a review
            </button>
          )}
          <ReviewModal isOpen={isModalOpen} onClose={closeModal} productId={productId} />
        </div>
      </div>
   

<div>
      {reviews?.map((review, index) => (
        <React.Fragment key={index}>
          <blockquote className="relative w-full bg-white p-5 border border-gray-200 break-inside-avoid-column">
            <p className="text-sm font-medium">{review.comment}</p>
            
            <div className="mt-2 flex flex-row items-center justify-start gap-2 font-bold">
          
              <ReactStars
                count={5} 
                value={review.rating} 
                size={24} 
                edit={false}
                isHalf={true} 
                activeColor="#fc0303" 
              />

              <div className="text-xs">
                <cite className="not-italic">{review.name}</cite>
                {/* <p className="text-gray-700">
                  Customer{" "}
                  <a href="" target="_blank" className="text-red-500">
                    Orancia
                  </a>
                </p> */}
              </div>
            </div>
          </blockquote>
        </React.Fragment>
      ))}
    </div>
    </div>
  );
};
