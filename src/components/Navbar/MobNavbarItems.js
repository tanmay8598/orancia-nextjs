import React, { useState } from "react";
import Price from "../shopPage/shopBy/Price";
import Category from "../shopPage/shopBy/Category";
import SubCategory from "../shopPage/shopBy/SubCategory";
import MobNavItems from "./MobNavItems";
import AccountSidebar from "../Cart/AccountSidebar";
import { useRouter } from "next/navigation";
import useAuth from "@/auth/useAuth";

const MobNavbarItems = () => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const handleRedirect = () => {
    router.push("/account/");
  };
  return (
    <div className="w-full flex flex-col gap-6">
      {/* <p className="text-2xl font-medium">Filters </p> */}
      {!user ? (
        <div
          className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
          onClick={() => setIsOpenAccount(true)}
        >
          <img src="/user.svg" alt="user icon" priority={true} fill={true} />
        </div>
      ) : (
        <div
          className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
          onClick={handleRedirect}
        >
          <img src="/user.svg" alt="user icon" priority={true} fill={true} />
        </div>
      )}
      <MobNavItems />
      <MobNavItems />
      <MobNavItems />
      <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
    </div>
  );
};

export default MobNavbarItems;
