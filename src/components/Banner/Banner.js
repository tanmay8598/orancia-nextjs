"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  const router = useRouter();

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

    const { data } = await apiClient.get("variation/banner/get");


    setBanner(data);


  };

  const handleClick = (item) => {

    if (item.product) {
      router.push(`/product/${item.product}`);
    }
    else if (item.category) {
      router.push(`/category/${item.category}`);
    }
    else if (item.subcategory) {
      router.push(`/subcategory/${item.subcategory}`);
    }
  }

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
              onClick={() => handleClick(item)}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
