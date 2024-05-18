"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import AddtoCartBtn from "../Button/AddtoCartBtn";
import { add } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";

const NewProducts = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(add({ product }));
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
  // const short = product.name.replace(/(.{33})..+/, "$1");
  const short =
    product.name.length > 24 ? product.name.slice(0, 24) + "..." : product.name;

  return (
    <div>
      <div className="rounded-xl m-2 shadow-lg">
        <span className="absolute bg-red-600 p-0 px-2 text-white rounded-tl-lg rounded-br-lg">
          Best Seller
        </span>

        <div className=" flex-col  flex">
          <Link className="group" href={`/product/${product._id}`}>
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src={
                  product.image && product.image.length > 0
                    ? product.image[0]
                    : "https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                }
                className="w-full h-40 md:w-60 md:h-48"
                alt=""
                width={228}
                height={212}
                onError={handleImageError}
              />
            </div>
          </Link>
          <div className="p-2">
            <p className="text-sm font-medium text-left">{short}</p>
            <p className="text-sm text-gray-400 font-normal  text-left">
              {product.category.name}
            </p>
            <div className="flex flex-row gap-1 mt-2 items-center">
              <div className="flex flex-row gap-1 text-white bg-green-700 p-0 px-2   rounded-md">
                <span className=" pt-1">
                  <FaStar color="#ffffff text-sm" size={10} />
                </span>
                <span className="text-sm">{product?.rating}</span>
              </div>

              <p className="text-xs  font-medium">
                ({product?.reviews?.length})
              </p>
            </div>
            <div className="text-lg font-semibold  text-left mt-2">
              ₹{product.sell_price}
            </div>

            <AddtoCartBtn
              onClick={handleAddToCart}
              btnStyles="w-full text-center bg-red-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-300 focus:scale-95 transition-all"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

// export default ProductCard;

export default NewProducts;
