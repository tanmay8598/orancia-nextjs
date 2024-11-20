"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import KnowYourIngreCard from "./KnowYourIngreCard";
const data = [
  {
    id: 0,
    name: "Green tea",

    image:
      "https://img.freepik.com/free-photo/close-up-tea-leaves-farm-sri-lanka_53876-42969.jpg?ga=GA1.1.961293520.1727337761&semt=ais_hybrid",
    message: "Detoxifies & Hydrates",
  },
  {
    id: 1,
    name: "Neet + tulsi   ",

    image:
      "https://img.freepik.com/free-photo/fresh-green-leaves_23-2147837044.jpg?ga=GA1.1.961293520.1727337761&semt=ais_hybrid",
    message: "Unclogs Pores & Prevents Breakoutes",
  },
  {
    id: 2,
    name: "Carrot",

    image:
      "https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?ga=GA1.1.961293520.1727337761&semt=ais_hybrid",
    message: "Fades Tan & Provides Sun Protection",
  },
  {
    id: 3,
    name: "Sandalwood",

    image:
      "https://img.freepik.com/free-vector/sandalwood-perfumery-cosmetic-realistic-ad-poster-with-sandal-products-decorated-with-tree-branches-vector-illustration_1284-80577.jpg?ga=GA1.1.961293520.1727337761&semt=ais_hybrid",
    message: "Retains Moisture & Boosts Radiance",
  },
  {
    id: 4,
    name: "Green tea",

    image:
      "https://img.freepik.com/free-photo/close-up-tea-leaves-farm-sri-lanka_53876-42969.jpg?ga=GA1.1.961293520.1727337761&semt=ais_hybrid",
    message: "Detoxifies & Hydrates",
  },
  {
    id: 4,
    name: "Carrot",

    image:
      "https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?ga=GA1.1.961293520.1727337761&semt=ais_hybrid",
    message: "Fades Tan & Provides Sun Protection",
  },
];

const KnowYourIngredients = () => {
  const numberOfSlides = 6;
  return (
    <>
      <section className=" relative">
        <div className="w-full md:px-4">
          <div className="flex flex-col items-center  pb-[20px]">
            <p className="text-2xl font-semibold text-center md:text-4xl mb-5 mt-11">
              Know your Ingredients
            </p>
          </div>
          <div>
            <Swiper
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                960: { slidesPerView: 4 },
                1440: { slidesPerView: 3 },
              }}
            >
              {data.map((data, index) => (
                <SwiperSlide key={index}>
                  <KnowYourIngreCard data={data} />
                </SwiperSlide>
              ))}
              <div className="flex flex-col items-center pt-[20px] pb-[20px]">
                <h3 className="mb-2 text-center">....</h3>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowYourIngredients;
