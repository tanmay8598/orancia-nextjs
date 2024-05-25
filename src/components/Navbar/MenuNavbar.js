import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";

import { MenuIcon as Bars3Icon } from "@heroicons/react/outline";
import SearchSidebar from "../Search/SearchSidebar";
import CartSidebar from "../Cart/CartSidebar";
import AccountSidebar from "../Cart/AccountSidebar";

import { useSelector } from "react-redux";
import useAuth from "@/auth/useAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MenuSidebar from "../Cart/MenuSidebar";
import MainmenuNavbar from "./MainmenuNavbar";
import Link from "next/link";
import CategoriesDroupdown from "./CategoriesDroupdown";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

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
      <div className="shadow-md sticky top-0 z-50 bg-white">
        <header className="relative bg-white">
          <section className="py-2 bg-primary text-center md-py-3">
            <p className="text-white text-xs md:text-sm">
              🎁 Buy Any 3 Products for Rs 1395 Only!
            </p>
          </section>
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-2 md:px-0"
          >
            <div className="border-b border-gray-200">
              <div className="flex justify-between items-center h-24 mx-auto">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
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
                    <Image
                      className="h-24 w-auto"
                      src="/logo.png"
                      alt="logo"
                      width={96}
                      height={96}
                    />
                  </a>
                </div>
                <Popover.Group className="hidden lg:ml-8 z-50 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      <MainmenuNavbar />
                    </div>
                  </div>
                </Popover.Group>
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:block relative h-4 w-4 lg:h-6 lg:w-6 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer">
                    <Link href="/track-order">
                      <Image
                        src="/tracking.svg"
                        alt="track order"
                        priority
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                  <div
                    className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                    onClick={() => setIsOpenSearch(true)}
                  >
                    <Image
                      src="/search.svg"
                      alt="search icon"
                      priority
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="hidden sm:block">
                    {!user ? (
                      <div
                        className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                        onClick={() => setIsOpenAccount(true)}
                      >
                        <Image
                          src="/user.svg"
                          alt="user icon"
                          priority
                          width={24}
                          height={24}
                        />
                      </div>
                    ) : (
                      <div
                        className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                        onClick={handleRedirect}
                      >
                        <Image
                          src="/user.svg"
                          alt="user icon"
                          priority
                          width={24}
                          height={24}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className="relative pr-4 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <Image
                      src="/cart.svg"
                      alt="cart icon"
                      priority
                      width={24}
                      height={24}
                    />
                    <span
                      className="right-5 absolute bg-primary -mt-1 sm:right-1 lg:right-12 text-white p-1"
                      style={{
                        fontSize: "10px",
                        top: "-10px",
                        right: "2px",
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
