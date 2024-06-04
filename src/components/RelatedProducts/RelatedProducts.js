"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelatedProductCard from "./RelatedProductCard";
import Slider from "react-slick";
import BestSallerCard from "../BestSellers/BestSallerCard";
const RelatedProducts = ({ products }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>

      <Slider {...settings}>
        {products?.slice(0, 10).map((product) => (
          <BestSallerCard key={product._id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
