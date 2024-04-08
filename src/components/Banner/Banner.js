"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: 0,
    img: "https://files.stbotanica.com/site-images/original/bestsellers-at-40-1920x527_1.gif",
  },
  {
    id: 1,
    img: "https://files.stbotanica.com/site-images/original/1920x527dqeb.gif",
  },
];

const Banner = ({ img, title, mainTitle, price }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {data?.map((item) => {
          return (
            <Image
              key={item.id}
              alt="banner"
              src={item.img}
              height={2000}
              width={2000}
              className="w-full h-[350px]  m-auto md:h-auto rounded-sm object-cover object-right md:object-left-bottom sm:h-auto"
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
