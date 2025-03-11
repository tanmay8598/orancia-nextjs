"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Head from "next/head";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
});


const SkeletonLoader = () => (
  <div className="relative w-full h-[150px] sm:h-[350px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-gray-300 h-8 w-3/4 rounded-lg animate-pulse"></div>
    </div>
  </div>
);

const Banner = ({ initialBanner = [] }) => {
  const [banner, setBanner] = useState(initialBanner);
  const [loading, setLoading] = useState(!initialBanner.length);
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
    if (!initialBanner.length) {
      bannerHandler();
    }
  }, []);

  const bannerHandler = async () => {
    try {
      const { data } = await apiClient.get("variation/banner/get");
      setBanner(data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (item) => {
    if (item.product) {
      router.push(`/product/${item.product}`);
    } else if (item.category) {
      router.push(`/category/${item.category}`);
    }
  };



  return (
    <>
      <Head>
        {banner.length > 0 && (
          <link
            rel="preload"
            href={banner[0].image}
            as="image"
            fetchpriority="high"
          />
        )}
      </Head>
      <div className="relative w-full">
        {loading ? (
          <SkeletonLoader />
        ) : banner.length > 1 ? (
          <>
            <Slider ref={sliderRef} {...settings}>
              {banner.map((item, index) => (
                <div key={item?._id} className="w-full">
                  <Image
                    src={item.image}
                    alt={item.altText || "Banner Image"}
                    width={1200}
                    height={600}
                    className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-cover"
                    onClick={() => handleClick(item)}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={75}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 50vw"
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
        ) : banner.length === 1 ? (
          <Image
            src={banner[0].image}
            alt={banner[0].altText || "Banner Image"}
            width={1200}
            height={600}
            className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] object-cover"
            onClick={() => handleClick(banner[0])}
            priority
            quality={75}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
          />
        ) : (
          <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">No banners available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;