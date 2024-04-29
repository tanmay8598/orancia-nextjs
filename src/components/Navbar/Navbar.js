"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import CartSidebar from "../Cart/CartSidebar";
import SearchSidebar from "../Search/SearchSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-white">
      {/* nav top */}
      <section className="py-2 bg-primary text-center md-py-3">
        <p className="text-white text-xs md:text-sm">
          🎁 Buy Any 3 Products for Rs 1395 Only!
        </p>
      </section>

      {/* main nav  */}
      <section className="flexBetween max-container px-4 lg:px-0">
        {/* logo  */}
        <Link href="/" className="order-2 lg:order-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={49}
            className="h-[90px] md:h-auto"
          />
        </Link>

        {/*desktop nav bottom */}
        <section className="hidden  w-full lg:flexCenter lg:order-2 ">
          <ul className="h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                class="group  transition-all duration-300 ease-in-out normal-case"
              >
                <span class="bg-left-bottom font-medium bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {link.label}
                </span>
              </Link>
            ))}
          </ul>
        </section>

        <div className="order-3 flex items-center gap-4">
          <div className="hidden lg:block relative h-4 w-4 lg:h-7 lg:w-7 cursor-pointer">
            <Image src="/tracking.svg" alt="logo" priority={true} fill={true} />
          </div>
          <div
            className="relative h-4 w-4 lg:h-5 lg:w-5 cursor-pointer"
            onClick={() => setIsOpenSearch(true)}
          >
            <Image src="/search.svg" alt="logo" priority={true} fill={true} />
          </div>
          <Link
            href="/account"
            className="hidden lg:block relative h-4 w-4 lg:h-5 lg:w-5 cursor-pointer"
          >
            <Image src="/user.svg" alt="logo" priority={true} fill={true} />
          </Link>

          <div
            className="relative h-4 w-4 lg:h-5 lg:w-5 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image src="/cart.svg" alt="logo" priority={true} fill={true} />
            <div className="h-4 w-4 bg-primary rounded-full absolute top-0 -right-2 text-white text-[10px] font-semibold text-center">
              2
            </div>
          </div>

          <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <SearchSidebar isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
        </div>

        {/* mobile menu  */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="order-1 h-6 inline-block cursor-pointer lg:hidden"
        />
      </section>
    </nav>
  );
};

export default Navbar;
