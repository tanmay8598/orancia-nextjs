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
        <div className="bg-primary/30 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
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

      <p className="text-md font-medium text-left">{short}</p>
      <p className="text-sm text-gray-400 font-normal  text-left">
        {product.category.name}
      </p>
      <div className="text-lg font-semibold text-accent text-left">
        ₹{product.price}
      </div>
      <div className="flex flex-row gap-1 mt-2">
        <FaStar color="#f7c707" />
        <FaStar color="#f7c707" />
        <FaStar color="#f7c707" />
        <FaStar color="#f7c707" />
        <FaStar color="#f7c707" />
        <p className="text-sm ml-1 font-medium">(27)</p>
      </div>
      <AddtoCartBtn btnStyles="btn btn-accent w-full mt-2 rounded-md" />
    </Link>
  );
};

export default Product;
