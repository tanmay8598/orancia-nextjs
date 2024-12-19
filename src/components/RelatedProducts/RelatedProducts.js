"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProductCard from "./RelatedProductCard";
import Slider from "react-slick";
import BestSallerCard from "../BestSellers/BestSallerCard";
import BestSellerCarousel from "../BestSellers/BestSellerCarousel";
const RelatedProducts = ({ products }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    // <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
    //   <div className="text-2xl font-bold mb-5"></div>

    //   <Slider {...settings}>
    //     {products?.slice(0, 10).map((product) => (
    //       <BestSallerCard key={product._id} product={product} />
    //     ))}
    //   </Slider>
    // </div>
    <section>
      <div className="mx-auto max-w-screen-3xl px-4 py-10">
        <div className="text-lg md:text-2xl font-bold mb-8">You Might Also Like</div>

        <BestSellerCarousel products={products} />
      </div>
    </section>
  );
};

export default RelatedProducts;
