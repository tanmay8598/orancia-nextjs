"use client";
import React from "react";
import BestSellerCarousel from "../BestSellers/BestSellerCarousel";
import RelatedProductCarousel from "./RelatedProductCarousel";


const RelatedProducts = ({ products }) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-3xl py-10">
        <div className="text-lg md:text-2xl font-bold mb-8">You Might Also Like</div>
        <RelatedProductCarousel products={products} />
      </div>
    </section>
  );
};

export default RelatedProducts;
