"use client";
import {
  decrementQuantity,
  incrementQuantity,
  remove,
} from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  // console.log(item.discountedPrice, "discountedPrice");
  const price = item.discountedPrice || item.product?.sell_price;
  const total = price * item.quantity;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(remove(item.product?._id));
  };

  const handleIncrement = () => {
    if (item.quantity < item.product?.countInStock.qty) {
      dispatch(incrementQuantity(item.product?._id));
    }
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.product?._id));
  };

  return (
    <>
      <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
        <div className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] relative p-2 ">
          <Image
            // src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
            src={item.product?.image[0]}
            fill
            priority
            sizes="(max-width: 110px) 110px, 110px"
            className="object-contain"
            alt=""
          />
        </div>

        <div className="w-full max-w-[220px] lg:max-w-[320px] flex flex-col justify-center px-3 gap-4 ">
          <div className="flex items-center justify-between  ">
            <p className="text-xs lg:text-sm font-medium w-3/4">
              {item.product?.name}
            </p>
            <button
              className="cursor-pointer"
              // onClick={handleRemoveItemsss}
              onClick={handleRemoveItem}
            >
              <MdClose />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="py-2 px-3 mt-2     bg-white border border-gray-200  rounded-lg">
              <div className="flex items-center  min-w-max justify-between  gap-x-1.5">
                <button
                  // onClick={() => handleQuantity("dec")}
                  onClick={handleDecrement}
                  type="button"
                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-input-number-decrement=""
                >
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>

                <div className="text-sm">{item.quantity}</div>

                <button
                  // onClick={() => handleQuantity("inc")}
                  onClick={handleIncrement}
                  type="button"
                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-input-number-increment=""
                >
                  <svg
                    className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>NPR {total}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
