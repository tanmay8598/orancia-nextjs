"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import MobNavbarItems from "../Navbar/MobNavbarItems";
import AccountSidebar from "./AccountSidebar";
import { useRouter } from "next/navigation";
import useAuth from "@/auth/useAuth";

const MenuSidebar = ({ isOpen, setIsOpen }) => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const handleRedirect = () => {
    router.push("/account/");
    setIsOpen(false);
  };
  const handleShipping = () => {
    router.push("/track-order/");
    setIsOpen(false);
  };
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen} side="left">
        <SheetContent className="bg-white lg:max-w-[500px]">
          <SheetHeader>
            <SheetTitle className="text-left mb-8">
              {!user ? (
                <div className=" flex justify-between pt-4 relative  text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer">
                  <div onClick={() => setIsOpenAccount(true)}>
                    <div className="flex items-center gap-x-2 text-base">
                      <img
                        src="/user.svg"
                        alt="user icon"
                        priority={true}
                        fill={true}
                        className="w-4 h-4"
                      />
                      <span>Account</span>
                    </div>
                  </div>
                  <div onClick={handleShipping}>
                    <div className="flex items-center gap-x-2 text-base px-1">
                      <img
                        src="/tracking.svg"
                        alt="track order"
                        priority={true}
                        fill={true}
                        className="w-6 h-6"
                      />
                      <span>Track Order</span>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              ) : (
                <div className=" flex justify-between pt-4 relative  text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer">
                  <div onClick={handleRedirect}>
                    <div className="flex items-center gap-x-2 text-base">
                      <img
                        src="/user.svg"
                        alt="user icon"
                        priority={true}
                        fill={true}
                        className="w-4 h-4"
                      />
                      <span>Account</span>
                    </div>
                  </div>
                  <div onClick={handleShipping}>
                    <div className="flex items-center gap-x-2 text-base">
                      <img
                        src="/tracking.svg"
                        alt="track order"
                        priority={true}
                        fill={true}
                        className="w-6 h-6"
                      />
                      <span>Track Order</span>
                    </div>
                  </div>
                </div>
              )}
            </SheetTitle>
          </SheetHeader>
          <MobNavbarItems setIsOpen={setIsOpen} />
          <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuSidebar;
