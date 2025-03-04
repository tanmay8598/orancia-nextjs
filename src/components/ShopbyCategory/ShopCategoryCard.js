import Link from "next/link";
import React from "react";

const ShopCategoryCard = ({ categories }) => {
  return (
    <>
      {categories &&
        categories.map((category) => (
          <div key={category._id} className="w-full group">
            <Link href={`/category/${category._id}`} aria-label={`Shop ${category.name}`}>
              <div
                className="h-[150px] lg:h-[300px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-md w-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                {/* Category Name */}
                <span className="absolute bottom-2 left-2 bg-red-600 rounded-md text-white text-sm px-3 py-1">
                  {category.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ShopCategoryCard;