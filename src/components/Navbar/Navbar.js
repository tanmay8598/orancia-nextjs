"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import CartSidebar from "../Cart/CartSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md  top-0 z-50 bg-white">
      {/* nav top */}
      <section className="py-2 bg-primary text-center md-py-3">
        <p className="text-white text-xs md:text-sm">
          🎁 Buy Any 3 Products for Rs 1395 Only!
        </p>
      </section>

      {/* main nav  */}
      <section className="flexBetween max-container padding-container">
        <Link href="/" className="order-2 lg:order-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={49}
            className="h-[90px] md:h-auto"
          />
        </Link>

        {/* search bar  */}
        <div className="hidden  relative w-full max-sm:w-[300px] md:w-[70%] md:block md:order-2">
          <input
            type="text"
            placeholder="Search..."
            className="border-gray-10 border p-2 px-4 rounded-lg w-full"
          />

          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-800" />
        </div>

        <div className="order-3 flex items-center gap-2">
          <FaRegUserCircle size={25} />
          <HiOutlineShoppingBag size={25} onClick={() => setIsOpen(true)} />
          <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
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

      {/* mobile search  */}
      <div className="w-[90%] relative mx-auto lg:hidden pb-3">
        <input
          type="text"
          placeholder="Search..."
          className="border-gray-10 border-2 p-2 px-4 rounded-lg w-full"
        />

        <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-800" />
      </div>

      {/*desktop nav bottom */}
      <section className="flexCenter w-full ">
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-gray-400 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
