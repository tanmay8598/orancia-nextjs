"use client";

import Image from "next/image";
import Link from "next/link";
import AddtoCartBtn from "../Button/AddtoCartBtn";
import { FaStar } from "react-icons/fa";
import { add } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const Product = ({ product }) => {
  const short = product.name.replace(/(.{33})..+/, "$1");

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ product, quantity: 1 }));

    toast.success("Success. Check your cart!");
  };
  const handleImageError = (event) => {
    event.target.src =
      "https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg";
  };

  return (
    <div className="my-4">
      <Toaster position="bottom-right" />
      <Link className="group" href={`/product/${product.groupId}`}>
        <div className="drop-shadow-md rounded-md bg-white border-red-500 h-[300px] mb-3 p-4 overflow-hidden relative md:h-[328px]">
          <div className=" w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
            {/* <div className="absolute top-8 left-8 bg-[#ed1d24] text-white px-3 text-sm uppercase font-medium ">
              Best Seller
            </div> */}
            <Image
              src={
                product.image && product.image.length > 0
                  ? product.image[0]
                  : "https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
              }
              width={240}
              height={147}
              alt="image"
              onError={handleImageError}
            />
          </div>
        </div>

        <p className="text-sm font-medium text-left">{short}</p>
        <p className="text-sm text-gray-400 font-normal  text-left">
          {product.category.name}
        </p>

        <div className="flex flex-row gap-1 mt-2 items-center">
          <div className="flex flex-row gap-1 text-white bg-green-700 p-1.5 rounded-sm">
            <FaStar color="#ffffff" size={10} />{" "}
            <p className="text-[10px]">
              {product?.rating % 1 === 0
                ? Number(product?.rating).toFixed(0)
                : Number(product?.rating).toFixed(1)}
            </p>
          </div>

          <p className="text-[12px]  font-medium">
            ({product?.reviews?.length})
          </p>
        </div>

        <div className="text-lg font-semibold  text-left mt-2">
          NPR {product.sell_price}
        </div>
      </Link>
      {product.countInStock.qty === 0 || product.disabled ? (
        <div className="md:flex md:w-full  md:justify-between ">
          <div className="w-full text-center bg-red-200 text-white py-2 rounded-lg font-semibold  mt-2 hover:bg-red-300 focus:scale-95 transition-all">
            Out of Stock
          </div>
        </div>
      ) : (
        <div>
          <AddtoCartBtn
            onClick={handleAddToCart}
            btnStyles="w-full text-center bg-[#ed1d24] text-white p-[10px] rounded-lg font-semibold mt-2 hover:bg-red-300 focus:scale-95 transition-all"
          />
        </div>
      )}
    </div>
  );
};

export default Product;
