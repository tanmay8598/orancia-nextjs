"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import Button from "../Button/Button";

const SearchSidebar = ({ isOpen, setIsOpen }) => {
  const [search, setSearch] = useState("");
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white lg:max-w-[500px] ">
        <div class="flex items-center justify-center sm:justify-start mt-5 border-b-[1px] pb-4 border-gray-500">
          <div className="relative h-4 w-4 lg:h-5 lg:w-5 cursor-pointer">
            <Image src="/search.svg" alt="logo" priority={true} fill={true} />
          </div>
          <input
            class="w-full ml-2 font-medium  border-none appearance-none text-md py-1 px-2 focus:outline-none border-2 bg-transparent text-black"
            type="search"
            name="q"
            placeholder="What are you looking for?"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {search?.length < 1 && (
          <div className="text-center h-screen flex flex-col items-center justify-center text-lg">
            No results could be found
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SearchSidebar;
