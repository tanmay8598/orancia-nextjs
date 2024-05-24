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
  };
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen} side="left">
        <SheetContent className="bg-white lg:max-w-[500px]">
          <SheetHeader>
            <SheetTitle className="text-left mb-8">
              {!user ? (
                <div
                  className=" flex justify-between pt-4 relative  text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                  onClick={() => setIsOpenAccount(true)}
                >
                  <div>
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
                  <div>
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
                  {/* </div> */}
                </div>
              ) : (
                <div
                  className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                  onClick={handleRedirect}
                >
                  <div className="flex items-center gap-x-2">
                    <img
                      src="/user.svg"
                      alt="user icon"
                      priority={true}
                      fill={true}
                      className="w-6 h-6"
                    />
                    <span>Account</span>
                  </div>
                </div>
              )}
            </SheetTitle>
          </SheetHeader>
          {/* Your content goes here */}
          <MobNavbarItems />
          <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuSidebar;
