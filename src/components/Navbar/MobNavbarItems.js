import React from "react";
import Price from "../shopPage/shopBy/Price";
import Category from "../shopPage/shopBy/Category";
import SubCategory from "../shopPage/shopBy/SubCategory";
import MobNavItems from "./MobNavItems";

const MobNavbarItems = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* <p className="text-2xl font-medium">Filters </p> */}
      <MobNavItems />
      <MobNavItems />
      <MobNavItems />
    </div>
  );
};

export default MobNavbarItems;
