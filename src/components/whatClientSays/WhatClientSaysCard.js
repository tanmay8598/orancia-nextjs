import React from "react";
import Image from "next/image";

const WhatClientSaysCard = ({ data }) => {
  return (
    <div className="swiper-slide p-4 sm:p-0">
      <div className="testimonial__item w-full max-w-[380px] h-[340px] m-1 shadow-lg rounded-[30px] flex flex-col justify-center p-6 md:p-8 bg-blue-gray-50">
        {/* Client Avatar and Details */}
        <div className="flex gap-4 mb-6">
          <div className="h-[60px] w-[60px] rounded-full overflow-hidden relative">
            <Image
              src={data.image}
              alt={`${data.name}'s Avatar`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{data.name}</h4>
            <p className="text-sm text-gray-600">{data.address}</p>
          </div>
        </div>

        {/* Client Message */}
        <p className="text-sm text-gray-700 leading-relaxed">{data.message}</p>
      </div>
    </div>
  );
};

export default WhatClientSaysCard;