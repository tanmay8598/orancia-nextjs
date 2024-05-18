"use client";
import apiClient from "@/api/client";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const data = [
  {
    id: 0,
    img:
      "https://files.stbotanica.com/site-images/original/bestsellers-at-40-1920x527_1.gif",
  },
  {
    id: 1,
    img: "https://files.stbotanica.com/site-images/original/1920x527dqeb.gif",
  },
];

const Banner = () => {
  const [error, setError] = useState(null);
  const [banner, setBanner] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  useEffect(() => {
    bannerHandler();
  }, []);

  const bannerHandler = async () => {
    try {
      const response = await apiClient.get("variation/banner/get");
      // console.log(response.data, "respo");
      if (response.ok) {
        setBanner(response.data);
      } else {
        setError(response.error);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {banner?.map((item) => {
          return (
            <Image
              key={item._id}
              alt="banner"
              src={item.image}
              height={2000}
              width={2000}
              className="w-full md:h-[350px]   h-[247px]   rounded-sm  object-right md:object-left-bottom  "
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
