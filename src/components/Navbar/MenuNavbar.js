"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { XIcon as XMarkIcon } from "@heroicons/react/outline";
import { MenuIcon as Bars3Icon } from "@heroicons/react/outline";

import SearchSidebar from "../Search/SearchSidebar";
import CartSidebar from "../Cart/CartSidebar";
import AccountSidebar from "../Cart/AccountSidebar";
import NavbarItems from "./NavbarItems";
import MobNavbarItems from "./MobNavbarItems";
import { useSelector } from "react-redux";
import useAuth from "@/auth/useAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MenuSidebar from "../Cart/MenuSidebar";
import MainmenuNavbar from "./MainmenuNavbar";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenSibebar, setIsOpenSidebar] = useState(false);

  const [cartLength, setCartLength] = useState(0);
  const selector = useSelector((state) => state.cart);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    setCartLength(selector.cart.length);
  }, [selector.cart]);

  const handleRedirect = () => {
    router.push("/account/");
  };

  return (
    <>
      <div className="shadow-md sticky top-0 z-50 bg-white ">
        <header className="relative bg-white">
          <section className="py-2 bg-primary text-center md-py-3">
            <p className="text-white text-xs md:text-sm">
              🎁 Buy Any 3 Products for Rs 1395 Only!
            </p>
          </section>
          <nav
            aria-label="Top"
            // className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2 md:px-0 "
            className="   "
          >
            <div className="border-b border-gray-200">
              <div className="flex justify-between ">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  // onClick={() => setOpen(true)}
                  onClick={() => setIsOpenSidebar(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>
                {/* Logo */}
                <div className="ml-2 flex lg:ml-0">
                  <a href="/" className="order-2 lg:order-1">
                    <img className="h-24 w-auto" src="/logo.png" alt="loh" />
                  </a>
                </div>
                <Popover.Group className="hidden lg:ml-8 z-50 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        {/* <NavbarItems /> */}
                        <MainmenuNavbar />
                      </div>
                    </div>
                  </div>
                </Popover.Group>

                {/* <div className="flex items-center space-x-4 lg:ml-auto"> */}
                <div className="flex items-center space-x-4 lg:ml-auto">
                  <div
                    className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                    onClick={() => setIsOpenSearch(true)}
                  >
                    <img
                      src="/search.svg"
                      alt="search icon"
                      priority={true}
                      fill={true}
                    />
                  </div>
                  <div className="hidden sm:block">
                    {!user ? (
                      <div
                        className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                        onClick={() => setIsOpenAccount(true)}
                      >
                        <img
                          src="/user.svg"
                          alt="user icon"
                          priority={true}
                          fill={true}
                        />
                      </div>
                    ) : (
                      <div
                        className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                        onClick={handleRedirect}
                      >
                        <img
                          src="/user.svg"
                          alt="user icon"
                          priority={true}
                          fill={true}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className="pr-4 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <img
                      src="/cart.svg"
                      alt="cart icon"
                      priority={true}
                      fill={true}
                    />
                    <span
                      className="absolute bg-primary -mt-8 right-2 text-white p-1    "
                      style={{
                        fontSize: "10px",

                        borderRadius: "30px",
                        height: "22px",
                        width: "22px",
                        textAlign: "center",
                      }}
                    >
                      {cartLength > 0 ? cartLength : "0"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
        <SearchSidebar isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
        <MenuSidebar isOpen={isOpenSibebar} setIsOpen={setIsOpenSidebar} />
      </div>
    </>
  );
};

export default MenuNavbar;
