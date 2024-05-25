import Link from "next/link";
import React from "react";

const ShopCategoryCard = ({ categories }) => {
  return (
    <>
      {categories &&
        categories.map((category) => (
          <div key={category._id} className="w-full">
            <Link href={`/category/${category._id}`}>
              <div
                className="h-[150px] lg:h-[300px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-md w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <span
                className="  absolute  bg-red-600 rounded-md text-white z-40 p-2"
                style={{ marginTop: "-2rem" }}
              >
                {category.name}
              </span>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ShopCategoryCard;
