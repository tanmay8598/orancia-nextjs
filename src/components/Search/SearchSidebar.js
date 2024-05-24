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
      console.log(data, "data");
      const results = data.filter((product) => {
        return (
          value &&
          product &&
          product.name &&
          product.name.toLowerCase().includes(value)
        );
      });
      console.log(results, "res");
      setResults(results);
    }
  };
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
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {results.length === 0 && search?.length > 0 && (
          <div className="text-center h-screen flex flex-col items-center justify-center text-lg">
            No results could be found
          </div>
        )}

        {results.length > 0 && (
          <ScrollArea>
            {results.map((result) => (
              <>
                <div key={result._id}>
                  <ul className="mt-3 text-[15px]">
                    <li>
                      <div className="flex w-full items-center gap-2">
                        <div
                          className="h-[80px] w-[80px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-md bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url(${result.image})`,
                          }}
                        ></div>

                        <div className="flex-1">
                          <Link
                            href={`/product/${result._id}`}
                            className="block p-2 ml-2 rounded-lg transition ease-in-out duration-300 text-gray-800 font-semibold  "
                          >
                            {result.name}
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </ScrollArea>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SearchSidebar;
