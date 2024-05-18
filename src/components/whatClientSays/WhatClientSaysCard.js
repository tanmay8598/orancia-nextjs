import React from "react";

const WhatClientSaysCard = ({ data }) => {
  return (
    <>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial__item w-full max-w-[380px] h-[340px]  m-1 shadow-lg rounded-[30px] flex flex-col justify-center p-9 px-6 md:py-5 md:px-9 mx-auto shadow-blue-gray-300 bg-blue-gray-50">
            <div className="flex gap-4 mb-6">
              <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={data.image}
                  alt="Avatar"
                />
              </div>
              <div className="w-">
                <h4>{data.name}</h4>
                <div>{data.address}</div>
              </div>
            </div>
            <p>{data.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatClientSaysCard;
