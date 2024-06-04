"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import BestSallerCard from "./BestSallerCard";

import Slider from "react-slick";
const BestSellerCarousel = ({ products }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1.25,
  };

  return (
    <>
      {isMobileView ? (
        <>
          <Slider {...settings}>
            {products.map((product) => (
              <BestSallerCard key={product._id} product={product} />
            ))}
          </Slider>
        </>
      ) : (
        <div className="flex items-center justify-cente">
          <button
            onClick={() => {
              if (sliderRef.current && sliderRef.current.swiper) {
                sliderRef.current.swiper.slidePrev();
              } else {
                console.error("Swiper instance is not available");
              }
            }}
            className="hover:drop-shadow-md hover:bg-white hover:p-2 hover:rounded-lg"
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
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              960: { slidesPerView: 4 },
              1440: { slidesPerView: 4 },
            }}
            modules={[Pagination]}
            className="popular-bike-slider mb-8"
          >
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                <BestSallerCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => {
              if (sliderRef.current && sliderRef.current.swiper) {
                sliderRef.current.swiper.slideNext();
              } else {
                console.error("Swiper instance is not available");
              }
            }}
            className="hover:drop-shadow-md hover:bg-white hover:p-2 hover:rounded-lg"
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
      )}
    </>
  );
};

export default BestSellerCarousel;
