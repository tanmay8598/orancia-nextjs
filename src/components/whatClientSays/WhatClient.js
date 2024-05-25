"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import WhatClientSaysCard from "./WhatClientSaysCard";
const data = [
  {
    id: 0,
    name: "Tuhina Jha",

    address: "Bengaluru India",
    image:
      "https://discoverpilgrim.com/cdn/shop/files/Makeup-400x560.png?v=1714472897&width=200",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 1,
    name: "Pranjal Dev   ",

    address: "Lucknow India",
    image:
      "https://discoverpilgrim.com/cdn/shop/files/Hair-Care-400x560.png?v=1714472978&width=200",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 2,
    name: "Kimaya Das",

    address: "Mumbai India",
    image:
      "https://discoverpilgrim.com/cdn/shop/files/Makeup-400x560.png?v=1714472897&width=200",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 3,
    name: "Rubina khan",

    address: "Bangladesh",
    image:
      "https://discoverpilgrim.com/cdn/shop/files/Hair-Care-400x560.png?v=1714472978&width=200",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const WhatClient = () => {
  const numberOfSlides = 6;
  return (
    <>
      <section className="mt-[15px] xl:mt-[200px] relative">
        {/* <section> */}
        {/* <div className="container mx-auto rounded-[70px px-6]  "> */}
        <div className="max-w-screen-lg mx-auto  ">
          <div className="flex flex-col items-center pt-[20px] pb-[20px]">
            <h3 className="h3  mb-2 text-center md:text-4xl ">
              {" "}
              What Client Says
            </h3>
          </div>
          <div className="w-full">
            <div>
              <Swiper
                spaceBetween={50}
                // slidesPerView={3}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                // ref={sliderRef}
                slidesPerView={1}
                // spaceBetween={30}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  960: { slidesPerView: 3 },
                  1440: { slidesPerView: 3 },
                }}
              >
                {data.map((data, index) => (
                  <SwiperSlide key={index}>
                    <WhatClientSaysCard data={data} />
                  </SwiperSlide>
                ))}
                <div className="flex flex-col items-center pt-[20px] pb-[20px]">
                  <h3 className="   mb-2 text-center "> ...</h3>
                  {/* <h3 className="   mb-2 text-center "> ...</h3> */}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatClient;
