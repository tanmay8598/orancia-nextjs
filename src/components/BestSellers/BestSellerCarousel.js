"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import BestSellerCard from "./BestSellerCard";
import { Toaster } from "react-hot-toast";

const BestSellerCarousel = ({ products, showType }) => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="flex items-center justify-center">
        {/* Previous Button - Hidden on Mobile */}
        <button
          className=" md:block hover:drop-shadow-md hover:bg-white hover:p-2 hover:rounded-lg"
          onClick={() => {
            if (sliderRef.current && sliderRef.current.swiper) {
              sliderRef.current.swiper.slidePrev();
            } else {
              console.error("Swiper instance is not available");
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>


        <Swiper
          ref={sliderRef}
          slidesPerView={2}
          spaceBetween={0}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="w-full mb-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id} className="flex justify-center h-[400px]">
              <BestSellerCard
                product={product.productDetails ? product.productDetails : product}
                type={showType ? "best-seller" : "new-arrivals"}
              />
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Next Button - Hidden on Mobile */}
        <button
          className=" md:block hover:drop-shadow-md hover:bg-white hover:p-2 hover:rounded-lg"
          onClick={() => {
            if (sliderRef.current && sliderRef.current.swiper) {
              sliderRef.current.swiper.slideNext();
            } else {
              console.error("Swiper instance is not available");
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>

      <Toaster position="bottom-right" />
    </>
  );
};

export default BestSellerCarousel;
