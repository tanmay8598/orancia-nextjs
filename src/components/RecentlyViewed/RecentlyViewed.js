"use client";
import Link from "next/link";
import React from "react";

const RecentlyViewed = ({ products }) => {


  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <h2 className="text-lg md:text-2xl font-bold mb-8">Recently Viewed</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/product/${product?.product?.groupId}`}
                className="min-w-[200px] w-60 bg-white shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105"
              >
                <img
                  src={product?.product?.image[0]}
                  alt={product?.name?.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold truncate">
                    {product.product.name}
                  </h3>

                  <div className="text-gray-800 font-bold mt-2">
                    ₹{product?.product?.cost_price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
