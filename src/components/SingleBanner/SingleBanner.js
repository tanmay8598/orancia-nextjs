import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBanner = ({ data }) => {
  return (
    <Link className="w-full mb-2" href='/blogs'>
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        <Image
          src={data}
          alt="Promotional Banner"
          height={700}
          width={2000}
          className="w-full h-full object-cover"
          priority // Preload the image for better performance
          quality={85} // Optimize image quality
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw" // Responsive sizes
        />
      </div>
    </Link>
  );
};

export default SingleBanner;