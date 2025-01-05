import Image from "next/image";
import React from "react";

const SingleBanner = ({ data }) => {
  return (
    <div className="mb-2 w-full">
      <Image
        src={data}
        alt="single-banner"
        height={2000}
        width={2000}
        // className="w-full md:h-[400px] h-[247px] object-cover"
        className="w-full md:h-[600px] min-h-[200px]"
      />
    </div>
  );
};

export default SingleBanner;
