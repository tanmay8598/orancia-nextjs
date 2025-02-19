"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  const router = useRouter();

  const settings = {
    dots: false,
    infinite: banner.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banner.length > 1,
    pauseOnHover: false,
  };

  useEffect(() => {
    bannerHandler();
  }, []);

  const bannerHandler = async () => {
    const { data } = await apiClient.get("variation/banner/get");
    setBanner(data);
  };

  const handleClick = (item) => {
    if (item.product) {
      router.push(`/product/${item.product}`);
    } else if (item.category) {
      router.push(`/category/${item.category}`);
    }
  };

  return (
    <div className="w-full">
      {banner.length > 1 ? (
        <Slider {...settings}>
          {banner.map((item) => (
            <Image
              key={item?._id}
              alt="banner"
              src={item?.image}
              height={2000}
              width={2000}
              className="w-full md:h-[400px] lg:max-h-full"
              onClick={() => handleClick(item)}
            />
          ))}
        </Slider>
      ) : (
        banner.length === 1 && (
          <Image
            key={banner[0]?._id}
            alt="banner"
            src={banner[0]?.image}
            height={2000}
            width={2000}
            className="w-full md:h-[400px] lg:max-h-full"
            onClick={() => handleClick(banner[0])}
          />
        )
      )}
    </div>
  );
};

export default Banner;
