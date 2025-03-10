"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
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
    arrows: false, // Hide default arrows
  };

  useEffect(() => {
    bannerHandler();
  }, []);

  const bannerHandler = async () => {
    try {
      const { data } = await apiClient.get("variation/banner/get");
      setBanner(data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  const handleClick = (item) => {
    if (item.product) {
      router.push(`/product/${item.product}`);
    } else if (item.category) {
      router.push(`/category/${item.category}`);
    }
  };

  // Skeleton loader component
  const SkeletonLoader = () => (
    <>
      <div className="relative w-full h-[110px] sm:h-[350px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
        {/* Gradient Animation for Banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>

        {/* Mimic Content Structure in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-300 h-8 w-3/4 rounded-lg animate-pulse"></div>
        </div>

        {/* Shimmer Effect for Left Arrow */}
        <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-gray-400"></div>
        </div>

        {/* Shimmer Effect for Right Arrow */}
        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 animate-pulse">
          <div className="w-6 h-6 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative w-full">
      {loading ? (
        <SkeletonLoader />
      ) : banner.length > 1 ? (
        <>
          <Slider ref={sliderRef} {...settings}>
            {banner.map((item) => (
              <div key={item?._id} className="w-full">
                <Image
                  alt={item?.altText || "Banner Image"}
                  src={item?.image}
                  height={item?.height || 600}
                  width={item?.width || 1200}
                  className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-cover"
                  onClick={() => handleClick(item)}
                  priority // Preload the first image
                  quality={50} // Optimize image quality
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Responsive sizes
                />
              </div>
            ))}
          </Slider>
          <button
            aria-label="Previous Slide"
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <MdChevronLeft className="size-5 md:size-6" />{" "}
            {/* Responsive icon size */}
          </button>
          <button
            aria-label="Next Slide"
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <MdChevronRight className="size-5 md:size-6" />{" "}
            {/* Responsive icon size */}
          </button>
        </>
      ) : banner.length === 1 ? (
        <Image
          key={banner[0]?._id}
          alt={banner[0]?.altText || "Banner Image"}
          src={banner[0]?.image}
          height={banner[0]?.height || 600}
          width={banner[0]?.width || 1200}
          className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-cover"
          onClick={() => handleClick(banner[0])}
          priority // Preload the image
          quality={50} // Optimize image quality
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Responsive sizes
        />
      ) : (
        // Fallback when there are no banners
        <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">No banners available</p>
        </div>
      )}
    </div>
  );
};

export default Banner;
