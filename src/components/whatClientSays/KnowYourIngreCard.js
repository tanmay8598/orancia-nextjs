import React from "react";

const KnowYourIngreCard = ({ data }) => {
  return (
    <div className="relative w-full max-w-[350px] h-[390px] lg:max-w-[380px] lg:h-[350px] mx-auto shadow-lg overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>

      {/* Overlay at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
        <h4 className="text-2xl font-normal text-center">{data.name}</h4>
        <p className="text-xs text-center mt-2">{data.message}</p>
      </div>
    </div>
  );
};

export default KnowYourIngreCard;
