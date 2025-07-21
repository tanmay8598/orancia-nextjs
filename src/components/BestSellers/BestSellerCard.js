"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import AddtoCartBtn from "../Button/AddtoCartBtn";
import { add } from "@/redux/features/cart/cartSlice";

const BestSellerCard = ({ product, type, loading }) => {
  const [shownToasts, setShownToasts] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ product, quantity: 1 }));

    if (!shownToasts.has(product._id)) {
      toast.success(`Success. Check your cart!`, {
        id: product._id,
      });
      setShownToasts(new Set(shownToasts).add(product._id));
    }
  };

  const handleImageError = (event) => {
    event.target.src =
      "https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg";
  };

  const handleMouseEnter = () => {
    if (product.image && product.image.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="rounded-xl m-2 shadow-lg relative bg-white border border-gray-200 min-h-[400px]">
      {/* Badge Placeholder */}
      {type && (
        <div className="absolute bg-gray-300 p-1 px-2 rounded-tl-lg rounded-br-lg text-sm z-10 w-20 h-6 animate-pulse"></div>
      )}

      <div className="flex-col flex">
        {/* Product Image Placeholder */}
        <div className="overflow-hidden rounded-t-lg w-full h-[180px] md:h-[250px] flex items-center justify-center bg-gray-200 aspect-[1/1] animate-pulse"></div>

        {/* Product Details Placeholder */}
        <div className="p-3">
          {/* Product Name Placeholder */}
          <div className="h-12 overflow-hidden">
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2 animate-pulse"></div>
          </div>

          {/* Product Category Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>

          {/* Rating and Reviews Placeholder */}
          <div className="flex flex-row gap-1 items-center mt-2">
            <div className="h-4 bg-gray-300 rounded w-10 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-6 animate-pulse"></div>
          </div>

          {/* Price Placeholder */}
          <div className="h-6 bg-gray-300 rounded w-1/4 mt-2 animate-pulse"></div>
        </div>

        {/* Add to Cart Button Placeholder */}
        <div className="h-10 bg-gray-300 rounded-lg mt-2 animate-pulse"></div>
      </div>
    </div>
  );

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="rounded-xl m-2 shadow-lg relative bg-white border border-gray-200 hover:border-[#ed1d24] transition-all duration-300 ">
      {/* Badge for New Arrival or Best Seller */}
      {type && (
        <span className="absolute bg-red-600 p-1 px-2 text-white rounded-tl-lg rounded-br-lg text-sm z-10">
          {type === "new-arrivals" && "New Arrival"}
          {type === "best-seller" && "Best Seller"}
        </span>
      )}

      <div className="flex-col flex">
        {/* Product Image */}
        <Link className="group" href={`/product/${product.groupId}`}>
          <div
            className="overflow-hidden rounded-t-lg w-full h-[180px] md:h-[250px] flex items-center justify-center bg-white aspect-[1/1]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {product.image && product.image.length > 0 ? (
              <Image
                src={product.image[currentImageIndex]}
                className="object-contain h-full w-full pt-7"
                alt={`${product.name} image`}
                height={200}
                width={200}
                onError={handleImageError}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            )}
          </div>
        </Link>

        {/* Product Details */}
        <div className="p-3">
          {/* Product Name */}
          <div className="h-12 overflow-hidden">
            <p className="text-sm font-medium text-left line-clamp-2">
              {product.name}
            </p>
          </div>

          {/* Product Category */}
          <p className="text-sm text-gray-700 font-normal text-left py-2">
            {product?.category?.name}
          </p>

          {/* Rating and Reviews */}
          <div className="flex flex-row gap-1 items-center">
            <div className="flex flex-row gap-1 text-white bg-green-500 px-2 rounded-sm">
              <span className="pt-1">
                <FaStar color="#ffffff" size={12} />
              </span>
              <span className="text-sm">
                {product?.rating % 1 === 0
                  ? Number(product?.rating).toFixed(0)
                  : Number(product?.rating).toFixed(1)}
              </span>
            </div>
            {product?.reviews?.length > 0 && (
              <p className="text-xs font-medium">({product.reviews.length})</p>
            )}
          </div>

          {/* Price */}
          <div className="text-sm md:text-lg font-semibold text-left mt-2 min-h-[24px]">
            NPR {product.sell_price}
          </div>
        </div>

        {/* Out of Stock or Add to Cart Button */}
        {product.countInStock.qty === 0 || product.disabled ? (
          <div className="w-full text-center bg-red-200 text-white py-2 rounded-lg font-semibold mt-2">
            Out of Stock
          </div>
        ) : (
          <AddtoCartBtn
            onClick={handleAddToCart}
            textStyles="text-sm"
            btnStyles="w-full text-center bg-[#ed1d24] text-white p-[10px] rounded-lg font-semibold mt-2 hover:bg-red-300 focus:scale-95 transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default BestSellerCard;
