import React from "react";

const ChildCard = ({ hedding, para }) => {
  return (
    <div className="  items-center p-12   border bg-white border-gray-300 min-h-[245px]  rounded-[4px]">
      <h3 className="h3   md:text-4xl mb-4  ">{hedding}</h3>
      <div
        className="w-8 h-1 mb-4"
        style={{ borderBottom: "2px solid red" }}
      ></div>
      <p className="text-gray-600">{para}</p>
    </div>
  );
};

export default ChildCard;
