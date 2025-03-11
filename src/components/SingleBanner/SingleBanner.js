'use client'
import apiClient from "@/api/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SingleBanner = () => {
  const [loading, setLoading] = useState(true);
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const response = await apiClient.get(`/variation/bottombanner/list`);
      setBannerImage(response?.data?.banners[0]?.image);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch banner:", error);
      setLoading(false);
    }
  };

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="w-full mb-2">
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] bg-gray-200 animate-pulse"></div>
    </div>
  );

  return (
    <>
      {loading || !bannerImage ? (
        <SkeletonLoader />
      ) : (
        <Link className="w-full mb-2" href="/blogs">
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] overflow-hidden">
            <Image
              src={bannerImage}
              alt="Promotional Banner"
              height={700}
              width={2000}
              className="w-full h-full object-cover"
              priority // Preload the image for better performance
              quality={75} // Optimize image quality
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Responsive sizes
              onLoadingComplete={() => setLoading(false)} // Set loading to false when the image is fully loaded
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default SingleBanner;