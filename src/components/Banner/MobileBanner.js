"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MobileBanner = ({ initialBanner = [] }) => {
  const [banner, setBanner] = useState(initialBanner);
  const [loading, setLoading] = useState(!initialBanner.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!initialBanner.length) {
      bannerHandler();
    }
  }, []);

  const bannerHandler = async () => {
    try {
      const { data } = await apiClient.get("variation/mobilebanner/list");
      setBanner(data.banner);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (item) => {
    if (item?.product) {
      router.push(`/product/${item?.product}`);
    } else if (item?.category) {
      router.push(`/category/${item?.category}`);
    }
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banner.length) % banner.length
    );
  };

  useEffect(() => {
    if (banner?.length > 1) {
      const interval = setInterval(goToNextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [banner?.length, currentIndex]);

  const SkeletonLoader = () => (
    <div className="relative w-full h-[280px] bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gray-300 h-8 w-3/4 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden relative w-full mb-0 pb-0">
      {loading ? (
        <SkeletonLoader />
      ) : banner.length > 1 ? (
        <>
          <div className="relative w-full overflow-hidden h-[280px]">
            {banner?.map((item, index) => (
              <div
                key={item?._id}
                className={`absolute w-full transition-transform duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0"
                    : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
              >
                <Image
                  alt={item?.altText || "Banner Image"}
                  src={item?.image}
                  height={item?.height || 300}
                  width={item?.width || 600}
                  className="w-full h-auto max-h-[300px] object-cover"
                  onClick={() => handleClick(item)}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={50}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <button
            aria-label="Previous Slide"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={goToPrevSlide}
          >
            <MdChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next Slide"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            onClick={goToNextSlide}
          >
            <MdChevronRight className="size-5" />
          </button>
        </>
      ) : banner.length === 1 ? (
        <Image
          key={banner[0]?._id}
          alt={banner[0]?.altText || "Banner Image"}
          src={banner[0]?.image}
          height={banner[0]?.height || 300}
          width={banner[0]?.width || 600}
          className="w-full h-auto max-h-[300px] object-cover"
          onClick={() => handleClick(banner[0])}
          priority
          quality={50}
          sizes="100vw"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">No banners available</p>
        </div>
      )}
    </div>
  );
};

export default MobileBanner;
