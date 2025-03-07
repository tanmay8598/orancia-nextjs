import Image from "next/image";
import React from "react";

const Button = ({ type, title, icon, variant, full }) => {
  return (
    <button
      className={`flexCenter gap-1 py-2 px-4 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && (
        <Image src={icon} alt={`${title} image`} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
