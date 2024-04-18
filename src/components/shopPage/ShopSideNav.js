import React from "react";
import Price from "./shopBy/Price";
import Category from "./shopBy/Category";
import SubCategory from "./shopBy/SubCategory";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-2xl font-medium">Filters </p>
      <Price />
      <Category />
      <SubCategory />
    </div>
  );
};

export default ShopSideNav;
