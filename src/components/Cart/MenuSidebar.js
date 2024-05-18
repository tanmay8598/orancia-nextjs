"use client";
import React from "react";
import * as Yup from "yup";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NavbarItems from "../Navbar/NavbarItems";
const SHEET_SIDES = ["left"];
const MenuSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} open={isOpen} onOpenChange={setIsOpen} side={side}>
          <SheetContent className="bg-white lg:max-w-[500px]">
            <SheetHeader>
              <SheetTitle className="text-left mb-8">My Account</SheetTitle>
            </SheetHeader>
            <NavbarItems />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default MenuSidebar;
