import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SingleBanner = ({ data }) => {
  const [loading, setLoading] = useState(true); // Add loading state
  const [imageLoaded, setImageLoaded] = useState(false); // Track image loading

  useEffect(() => {
    if (data) {
      const img = new window.Image(); // Use the native browser Image object
      img.src = data;
      img.onload = () => {
        setImageLoaded(true);
        setLoading(false); // Set loading to false when the image is loaded
      };
      img.onerror = () => {
        setLoading(false); // Handle error case
      };
    }
  }, [data]);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="w-full mb-2">
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] bg-gray-200 animate-pulse"></div>
    </div>
  );

  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <Link className="w-full mb-2" href="/blogs">
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-full  overflow-hidden">
            <Image
              src={data}
              alt="Promotional Banner"
              height={700}
              width={2000}
              className="w-full h-full object-cover"
              priority // Preload the image for better performance
              quality={85} // Optimize image quality
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Responsive sizes
              onLoadingComplete={() => setImageLoaded(true)} // Ensure image is fully loaded
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default SingleBanner;