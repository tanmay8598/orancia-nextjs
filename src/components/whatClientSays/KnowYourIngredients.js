"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import KnowYourIngreCard from "./KnowYourIngreCard";
import apiClient from "./../../api/client";

const KnowYourIngredients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  const knowYourIngredientsData = async () => {
    const response = await apiClient.get("/ingredients/get-all-ingredients");

    setIngredients(response.data);
  };

  useEffect(() => {
    knowYourIngredientsData();
  }, []);

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
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
              {ingredients?.map((data, index) => (
                <SwiperSlide key={index}>
                  <KnowYourIngreCard data={data} />
                </SwiperSlide>
              ))}
              {/* <div className="flex flex-col items-center pt-[20px] pb-[20px]">
                <h3 className="mb-2 text-center">....</h3>
              </div> */}

              {ingredients?.length > 1 && (
                <div className="flex justify-center items-center pt-4 pb-4">
                  {ingredients?.map((_, index) => (
                    <span
                      key={index}
                      className={`w-1 h-1 mx-1 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-black w-1 h-1"
                          : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowYourIngredients;
