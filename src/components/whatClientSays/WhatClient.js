"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WhatClientSaysCard from "./WhatClientSaysCard";
import { Autoplay } from "swiper/modules";

const WhatClient = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const [data, setData] = useState([]); // Data state

  // Simulate data fetching
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            name: "Arti Jha",
            address: "Bengaluru",
            image:
              "https://cdn.techinasia.com/wp-content/uploads/2015/07/indian-woman.jpg",
            message:
              "My hair was dull and lifeless before I started using Orancia Hair Oil. Now, it's incredibly shiny and healthy-looking",
          },
          {
            id: 2,
            name: "Pranjal Dev",
            address: "Lucknow",
            image:
              "https://i.pinimg.com/736x/8c/c6/a0/8cc6a0d60024ddde63f9885001c0146b.jpg",
            message:
              "Orancia Kumkumadi Face Oil has been a game-changer! My skin is noticeably brighter and more radiant.",
          },
          {
            id: 3,
            name: "Kimaya Das",
            address: "Mumbai",
            image:
              "https://cdn2.stylecraze.com/wp-content/uploads/2013/05/Most-Beautiful-Women-In-India.jpg.webp",
            message:
              "I use Orancia Body Oil every day after my shower, and it's made a noticeable difference in the overall health of my skin.",
          },
          {
            id: 4,
            name: "Rubina khan",
            address: "New Delhi",
            image:
              "https://i.pinimg.com/736x/f1/4c/81/f14c813d3f9b95774557ab0e0aa71148.jpg",
            message:
              "Orancia Vitamin C Serum has helped to fade those imperfections and even out my complexion.",
          },
        ];
        setData(mockData);
        setLoading(false); // Set loading to false after data is fetched
      }, 2000); // Simulate a 2-second delay
    };

    fetchData();
  }, []);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden relative">
      {/* Gradient shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>

      {/* Mimic client testimonial card structure */}
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div> {/* Placeholder for image */}
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div> {/* Placeholder for name */}
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div> {/* Placeholder for address */}
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div> {/* Placeholder for message */}
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div> {/* Placeholder for message */}
          <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div> {/* Placeholder for message */}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center pt-[10px] pb-[10px]">
          <p className="text-2xl font-semibold text-center md:text-4xl mb-11 mt-11">
            What Client Says
          </p>
        </div>
        <div className="w-full">
          <div>
            <Swiper
              spaceBetween={50}
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1440: { slidesPerView: 3 },
              }}
            >
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <SkeletonLoader />
                  </SwiperSlide>
                ))
                : data.map((data, index) => (
                  <SwiperSlide key={index}>
                    <WhatClientSaysCard data={data} />
                  </SwiperSlide>
                ))}
              <div className="flex flex-col items-center pt-[20px] pb-[20px]">
                <h3 className="mb-2 text-center"> ...</h3>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatClient;