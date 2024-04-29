"use client";

import Image from "next/image";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import AddtoCartBtn from "../Button/AddtoCartBtn";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  const short = product.name.replace(/(.{33})..+/, "$1");
  return (
    <Link className="group" href={`/product/${product.slug}`}>
      <div className="drop-shadow-md rounded-md bg-white border-red-500 h-[300px] mb-3 p-4 overflow-hidden relative md:h-[328px]">
        <div className=" w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium ">
            Best Seller
          </div>
          <Image src={product?.image[0]} width={240} height={147} alt="" />
        </div>
        {/* btn group  */}
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddtoCartBtn btnStyles="btn btn-accent" />
          <Link href={`/product/${product.slug}`}>
            <button className="btn-icon btn-primary">
              <BsEye />
            </button>
          </Link>
        </div> */}
      </div>

      <p className="text-sm font-medium text-left">{short}</p>
      <p className="text-sm text-gray-400 font-normal  text-left">
        {product.category.name}
      </p>

      <div className="flex flex-row gap-1 mt-2 items-center">
        <div className="flex flex-row gap-1 text-white bg-green-700 p-1.5 rounded-sm">
          <FaStar color="#ffffff" size={10} />{" "}
          <p className="text-[10px]">4.72</p>
        </div>

        <p className="text-[12px]  font-medium">(7519)</p>
      </div>

      <div className="text-lg font-semibold  text-left mt-2">
        ₹{product.price}
      </div>
      <AddtoCartBtn btnStyles="hidden lg:block btn btn-accent w-full mt-4 rounded-md" />
    </Link>
  );
};

export default Product;
