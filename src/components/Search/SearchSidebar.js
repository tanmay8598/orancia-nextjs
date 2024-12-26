"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

import apiClient from "@/api/client";
import Link from "next/link";

const SearchSidebar = ({ isOpen, setIsOpen }) => {
  const [search, setSearch] = useState();
  const [results, setResults] = useState([]);

  const handleSearch = async (value) => {
    if (value.length < 1) {
      setResults([]);
    } else {
      setSearch(value);
      const { data } = await apiClient.get("/product/search-product", {
        Query: value,
      });

      const results = data.filter((product) => {
        return (
          value &&
          product &&
          product.name &&
          product.name.toLowerCase().includes(value)
        );
      });

      setResults(results);
    }
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-white lg:max-w-[500px] ">
        <div className="flex items-center justify-center sm:justify-start mt-5 border-b-[1px] pb-4 border-gray-500">
          <div className="relative h-4 w-4 lg:h-5 lg:w-5 cursor-pointer">
            <Image src="/search.svg" alt="logo" priority={true} fill={true} />
          </div>
          <input
            className="w-full ml-2 text-sm sm:font-medium  border-none appearance-none text-md py-1 px-2 focus:outline-none border-2 bg-transparent text-black"
            type="search"
            name="q"
            placeholder="What are you looking for?"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div></div>
        {results.length === 0 && search?.length > 0 && (
          <div className="text-center h-screen flex flex-col items-center justify-center text-lg">
            No results could be found
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-2">
            <ScrollArea>
              {results.map((result) => (
                <>
                  <div key={result._id}>
                    <ul className="mt-1 text-[15px]">
                      <li>
                        <Link
                          href={`/product/${result.groupId}`}
                          className=" "
                          onClick={handleCloseModal}
                        >
                          <div className="flex w-full items-center gap-2 py-2">
                            <div
                              className="h-[80px] w-[80px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-md bg-cover bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${result.image[0]})`,
                              }}
                            ></div>

                            <div className="block p-2 ml-2 rounded-lg transition font-normal sm:text-base ease-in-out duration-300 text-black  ">
                              <div className="p-1">{result.name}</div>
                              <div className="p-1">₹ {result.sell_price}</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ))}
            </ScrollArea>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SearchSidebar;
