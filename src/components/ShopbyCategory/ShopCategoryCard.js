import Link from "next/link";
import React, { useEffect, useState } from "react";

const ShopCategoryCard = ({ categories }) => {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching delay
    if (categories && categories.length > 0) {
      setLoading(false); // Set loading to false when data is available
    }
  }, [categories]);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="w-full group">
      <div
        className="h-[150px] lg:h-[300px] rounded-md w-full bg-gray-200 animate-pulse"
      ></div>
    </div>
  );

  return (
    <>
      {loading ? (
        // Show skeleton loader while loading
        Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
      ) : (
        // Render actual content when data is fetched
        categories &&
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
        ))
      )}
    </>
  );
};

export default ShopCategoryCard;