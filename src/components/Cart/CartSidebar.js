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

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const products = useSelector((state) => state.cart.cart);

  const cartLength = products?.length;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/checkout`);
    setIsOpen(false);
  };
  const totalValue = products.reduce((total, item) => {
    return total + item?.quantity * item?.product?.sell_price;
  }, 0);
  // console.log(totalValue, "total");
  // console.log(selector.cart, "selector.cart");
  // console.log(products);
  // console.log(products, "products");
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white lg:max-w-[500px] ">
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
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
          <div className="mt-12">
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5">Total : ₹{totalValue}.00</div>
              <div className="mb-2">
                <button
                  className="bg-red-400 rounded-xl text-white font-medium text-xs py-2 px-4 sm:px-8 w-full sm:w-auto"
                  onClick={handleClick}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
