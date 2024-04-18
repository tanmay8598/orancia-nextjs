import Image from "next/image";
import React from "react";

const SingleBanner = ({ data }) => {
  return (
    <div className="mb-2">
      <Image
        src={data}
        alt="single-banner"
        height={2000}
        width={2000}
        className="w-full h-[300px] m-auto md:h-auto rounded-sm object-cover object-right md:object-left-bottom sm:h-auto"
      />
    </div>
  );
};

export default SingleBanner;
