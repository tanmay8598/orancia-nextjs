"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import AddtoCartBtn from "../Button/AddtoCartBtn";
import { add } from "@/redux/features/cart/cartSlice";

const BestSellerCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const short = product.name.replace(/(.{33})..+/, "$1");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ product, quantity: 1 }));
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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

  return (
    <div className="rounded-xl m-2 shadow-lg relative">
      <span className="absolute bg-red-600 p-0 px-2 text-white rounded-tl-lg rounded-br-lg">
        Best Seller
      </span>
      <div className="flex-col flex">
        <Link className="group" href={`/product/${product._id}`}>
          <div
            className="overflow-hidden rounded-t-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={
                product.image && product.image.length > 0
                  ? product.image[currentImageIndex]
                  : "https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
              }
              className="w-full h-full object-contain"
              alt={product.name}
              width={228}
              height={212}
              onError={handleImageError}
            />
          </div>
        </Link>
        <div className="p-2">
          <p className="text-sm font-medium text-left">{short}</p>
          <p className="text-sm text-gray-400 font-normal text-left">
            {product.category.name}
          </p>
          <div className="flex flex-row gap-1 mt-2 items-center">
            <div className="flex flex-row gap-1 text-white bg-green-700 px-2 rounded-md">
              <span className="pt-1">
                <FaStar color="#ffffff" size={12} />
              </span>
              <span className="text-sm">{product?.rating}</span>
            </div>
            <p className="text-xs font-medium">({product?.reviews?.length})</p>
          </div>
          <div className="text-lg font-semibold text-left mt-2">
            ₹{product.sell_price}
          </div>

          {product.countInStock.qty === 0 ? (
            <div className="md:flex md:w-full md:h-14 md:justify-between mt-6">
              <div className="w-full text-center bg-red-200 text-white py-2 rounded-lg font-semibold  mt-4 hover:bg-red-300 focus:scale-95 transition-all">
                Out of Stock
              </div>
            </div>
          ) : (
            <div className="md:flex md:w-full md:h-14 md:justify-between mt-2 sm:mt-6">
              <AddtoCartBtn
                onClick={handleAddToCart}
                btnStyles="w-full text-center bg-red-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-300 focus:scale-95 transition-all"
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default BestSellerCard;
