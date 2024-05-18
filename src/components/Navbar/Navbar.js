"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import CartSidebar from "../Cart/CartSidebar";
import SearchSidebar from "../Search/SearchSidebar";
import NavbarItems from "./NavbarItems";
import AccountSidebar from "../Cart/AccountSidebar";
import MenuSidebar from "../Cart/MenuSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenSibebar, setIsOpenSidebar] = useState(false);

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-white">
      {/* nav top */}
      <section className="py-2 bg-primary text-center md-py-3">
        <p className="text-white text-xs md:text-sm">
          🎁 Buy Any 3 Products for Rs 1395 Only!
        </p>
      </section>

      {/* main nav  */}
      <section className="flexBetween max-container px-4 ">
        {/* lg:px-0 */}
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
          <NavbarItems />
        </section>

        <div className="order-3 flex items-center gap-4">
          <div className="hidden lg:block relative h-4 w-4 lg:h-7 lg:w-7 cursor-pointer ">
            <Image src="/tracking.svg" alt="logo" priority={true} fill={true} />
          </div>

          <div
            className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
            onClick={() => setIsOpenSearch(true)}
          >
            <Image
              src="/search.svg"
              alt="search icon"
              priority={true}
              fill={true}
            />
          </div>
          <div
            className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
            onClick={() => setIsOpenAccount(true)}
          >
            <Image
              src="/user.svg"
              alt="user icon"
              priority={true}
              fill={true}
            />
          </div>
          <div
            className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src="/cart.svg"
              alt="cart icon"
              priority={true}
              fill={true}
            />
            {/* <div
              className="h-4 w-4 bg-primary rounded-full absolute bottom-2 -right-2 text-white md:text-sm lg:text-base font-light text-center"
              style={{ fontSize: "10px" }}
            >
              2
            </div> */}
            <div
              class="h-4 w-4 relative inline-flex bg-primary items-center -right-2 bottom-1 -top-4 justify-center text-white font-light text-center bg-heading-color font-heading text-sm md:text-base lg:text-lg   rounded-full h-21 w-21"
              style={{ fontSize: "10px" }}
            >
              2
            </div>
          </div>

          <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
          <SearchSidebar isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
          <MenuSidebar isOpen={isOpenSibebar} setIsOpen={setIsOpenSidebar} />
        </div>

        {/* mobile menu  */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={() => setIsOpenSidebar(true)}
          className="order-1 h-6 inline-block cursor-pointer lg:hidden"
        />
      </section>
    </nav>
  );
};

export default Navbar;
