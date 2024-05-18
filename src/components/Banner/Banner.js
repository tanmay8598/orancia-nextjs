"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Banner = () => {
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
              className="w-full md:h-[400px] min-h-[200px]"
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
