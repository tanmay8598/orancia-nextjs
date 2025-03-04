"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const sliderRef = React.useRef(null);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: banner.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banner.length > 1,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
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
    <div className="relative w-full">
      {banner.length > 1 ? (
        <>
          <Slider ref={sliderRef} {...settings}>
            {banner.map((item, index) => (
              <div key={item?._id} className="w-full">
                <Image
                  alt={item?.altText || "Banner Image"}
                  src={item?.image}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  onClick={() => handleClick(item)}
                  priority={index === 0}
                  quality={85}
                  sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 100vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,..."
                />
              </div>
            ))}
          </Slider>
          <button
            aria-label="Previous Slide"
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <MdChevronLeft className="size-5 md:size-6" />
          </button>
          <button
            aria-label="Next Slide"
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <MdChevronRight className="size-5 md:size-6" />
          </button>
        </>
      ) : (
        banner.length === 1 && (
          <div className="w-full aspect-[1200/600]">
            <Image
              key={banner[0]?._id}
              alt={banner[0]?.altText || "Banner Image"}
              src={banner[0]?.image}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              onClick={() => handleClick(banner[0])}
              priority
              quality={85}
              sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."
            />
          </div>
        )
      )}
    </div>
  );
};

export default Banner;