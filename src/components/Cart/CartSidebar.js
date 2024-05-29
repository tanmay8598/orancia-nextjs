"use client";
import React, { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import useAuth from "@/auth/useAuth";
import LoginForm from "../Account/LoginForm";
import AccountSidebar from "./AccountSidebar";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const products = useSelector((state) => state.cart.cart);

  const cartLength = products?.length;

  const router = useRouter();

  const handleClick = () => {
    if (!user) {
      setIsOpenAccount(true);
    } else {
      router.push(`/checkout`);
      setIsOpen(false);
    }
  };
  const { user } = useAuth();
  const totalValue = products.reduce((total, item) => {
    return total + item?.quantity * item?.product?.sell_price;
  }, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white lg:max-w-[500px] ">
        <SheetHeader>
          <SheetTitle className="text-left mb-8">
            My Shopping Cart({cartLength > 0 ? cartLength : "0"})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartLength === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <p className="uppercase font-semibold text-gray-700">
                Your cart is empty
              </p>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh]  mb-4">
              {products &&
                products.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))}
            </ScrollArea>
          )}
        </>
        {cartLength > 0 && (
          <div className="mt-14 sm:mb-6">
            <div className="flex justify-between font-semibold">
              <div className="uppercase  my-2 sm:mb-0 sm:pt-1">
                ₹{totalValue}.00
              </div>
              <div className="mb-4 mx-2">
                <button
                  className="bg-red-400 rounded-xl text-white sm:font-medium text-base py-2  px-8 md:px-24 w-full sm:w-auto"
                  onClick={handleClick}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
        <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
