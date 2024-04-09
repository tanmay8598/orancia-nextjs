"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import CheckoutBtn from "../Button/CheckoutBtn";

const data = [
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
  {
    id: 1,
    name: "abc",
  },
];

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const count = 2;
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white lg:max-w-[500px] ">
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Shopping Cart({count})
          </SheetTitle>
        </SheetHeader>
        <>
          {count === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <p className="uppercase font-semibold text-gray-700">
                Your cart is empty
              </p>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh]  mb-4">
              {data &&
                data?.map((key, item) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>
        {count > 0 && (
          <div className="mt-12">
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5">Total</div>
              <div>₹1000</div>
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
