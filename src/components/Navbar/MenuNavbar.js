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
import { FaUserCheck } from "react-icons/fa6";

import CategoryDropdown from "./CategoryDroupdown";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [categoryDroup, setCategoryDroup] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
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
  const handleClick = () => {
    router.push("/blogs");
  };
  const handleBestSeller = () => {
    router.push("/best-sellers");
  };
  const handleNewArrivals = () => {
    router.push("/new-arrivals");
  };

  const toggleDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
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
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden pr-[56px]"
                  onClick={() => setIsOpenSidebar(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon
                    className="h-6 w-6 text-black "
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
                      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
                        <nav>
                          <ul
                            className="flex items-center justify-center font-semibold"
                            onMouseEnter={() => setCategoryDropdown(false)}
                          >
                            <li
                              className="relative group px-3 py-2 cursor-pointer"
                              // onMouseLeave={() => setCategoryDropdown(false)}
                              onMouseEnter={() => setCategoryDropdown(false)}
                            >
                              <button
                                className="hover:opacity-50  cursor-pointer "
                                onMouseEnter={() => setCategoryDropdown(true)}
                              >
                                Categories
                              </button>
                            </li>
                            <li className="relative group px-3 py-2 cursor-pointer">
                              <button
                                className="hover:opacity-50  cursor-pointer "
                                onClick={handleBestSeller}
                                onMouseEnter={() => setCategoryDropdown(false)}
                              >
                                Bestsellers
                              </button>
                            </li>
                            <li className="relative group px-3 py-2 cursor-pointer">
                              <button
                                className="hover:opacity-50  cursor-pointer "
                                onClick={handleNewArrivals}
                                onMouseEnter={() => setCategoryDropdown(false)}
                              >
                                New arrivals
                              </button>
                            </li>

                            {/* <li className="relative group px-3 py-2 cursor-pointer">
                              <button
                                className="hover:opacity-50 cursor-default  "
                                onMouseEnter={() => setCategoryDropdown(false)}
                              >
                                Makeup
                              </button>
                              <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                                <div className="relative top-[47px] p-6 bg-white  shadow-xl w-full">
                                  <div className="relative z-10">
                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                      Use cases
                                    </p>
                                    <ul className="mt-3 text-[15px]">
                                      <li>
                                        <a
                                          href="#"
                                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                        >
                                          Creators
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                        >
                                          Streamers
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                        >
                                          Influence
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                        >
                                          Programming
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                        >
                                          Design
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li> */}

                            {/* <li className="relative group px-3 py-2 cursor-pointer">
                              <button
                                className="hover:opacity-50 cursor-default "
                                onMouseEnter={() => setCategoryDropdown(false)}
                              >
                                Skin Care
                              </button>
                              <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                                <div className="relative top-[47px] p-6 bg-white  shadow-xl w-full">
                                  <div className="relative z-10">
                                    <a
                                      href="#"
                                      className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                    >
                                      Documentation
                                      <p className="text-gray-500 font-normal">
                                        Start integrating in no time
                                      </p>
                                    </a>
                                    <div className="mt-6 grid grid-cols-2 gap-6">
                                      <div>
                                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                          Get started
                                        </p>
                                        <ul className="mt-3 text-[15px]">
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Libraries and SDKs
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Plugins
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Code samples
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Tutorials
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                          Guides
                                        </p>
                                        <ul className="mt-3 text-[15px]">
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Accept online payments
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Editing video like a pro
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Automation techniques
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                            >
                                              Create stunning effects
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="relative group px-3 py-2 cursor-pointer">
                              <button
                                className="hover:opacity-50 cursor-default "
                                onMouseEnter={() => setCategoryDropdown(false)}
                              >
                                Hair Care
                              </button>
                              <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                                <div className="relative top-[47px] p-6 bg-white  shadow-xl w-full">
                                  <div className="relative z-10">
                                    <ul className="text-[15px]">
                                      <li>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                        >
                                          Get Support
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                        >
                                          Blogs
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                        >
                                          Case Studies
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                        >
                                          Guides
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                        >
                                          News &amp; Events
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li> */}

                            <li className="relative group px-3 py-2 cursor-pointer">
                              <button
                                onClick={handleClick}
                                onMouseEnter={() => setCategoryDropdown(false)}
                                className="hover:opacity-50 cursor-pointer"
                              >
                                Blog
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </header>
                    </div>
                  </div>
                  {/* <MegaMenuWithHover /> */}
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
                                               <FaUserCheck />

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
        <MenuSidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />

        <CategoryDropdown
          isOpen={categoryDropdown}
          setIsOpen={setCategoryDropdown}
        />
      </div>
    </>
  );
};

export default MenuNavbar;
