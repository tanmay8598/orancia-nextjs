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
const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [open, setOpen] = useState(false);
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
  // const cartLength = selector.cart.length;
  return (
    <>
      <div className="shadow-md sticky top-0 z-50 bg-white ">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full mt-24 max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group
                    as="div"
                    className="mt-2"
                    onMouseOver={() => setIsOpens(true)}
                    onMouseLeave={() => setIsOpens(false)}
                  >
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-red-600 text-red-600"
                                  : "border-transparent text-gray-900",
                                // text-base font-medium text-sm font-semibold
                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4  text-gray-900 ring-1 ring-inset ring-white  hover:underline"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    {isOpens && (
                      <Tab.Panels as={Fragment}>
                        {navigation.categories.map((category) => (
                          <Tab.Panel
                            key={category.name}
                            className="space-y-10 px-4 pb-8 pt-10"
                          >
                            <div className="grid grid-cols-2 gap-x-4">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-sm"
                                >
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href={item.href}
                                    className="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      className="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2   text-sm font-semibold   ring-1 ring-inset ring-white  hover:underline"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    )}
                  </Tab.Group>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <MobNavbarItems />
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* desktop menu  */}
        <header className="relative bg-white">
          {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p> */}
          <section className="py-2 bg-primary text-center md-py-3">
            <p className="text-white text-xs md:text-sm">
              🎁 Buy Any 3 Products for Rs 1395 Only!
            </p>
          </section>
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex justify-between items-center h-24">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>
                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="/" className="order-2 lg:order-1">
                    {/* <span className="sr-only">Your Company</span> */}
                    {/* <Image
                      src="/logo.png"
                      alt="logo"
                      width={100}
                      height={100}
                      className="h-[90px] md:h-100"
                    /> */}
                    <img className="h-24 w-auto" src="/logo.png" alt="loh" />
                  </a>
                </div>
                <Popover.Group className="hidden lg:ml-8 z-50 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-gray-600 text-gray-600"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 font-bold -mb-px flex items-center border-b-2 pt-px text-sm transition-colors duration-200 ease-out text-gray-900 ring-1 ring-inset ring-white hover:underline"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-50">
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center"
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className="mt-6 block font-bold text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-medium text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <a
                                                    href={item.href}
                                                    className="hover:text-red-800 hover:underline"
                                                  >
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                    <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        <NavbarItems />
                      </div>
                    </div>
                  </div>
                </Popover.Group>

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

                  {/* Cart */}

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

                  <div
                    className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <img
                      src="/cart.svg"
                      alt="cart icon"
                      priority={true}
                      fill={true}
                    />

                    <div
                      class="h-4 w-4 relative inline-flex bg-primary items-center -right-2 bottom-1 -top-8 justify-center text-white font-light text-center bg-heading-color font-heading text-sm md:text-base lg:text-lg   rounded-full h-21 w-21"
                      style={{ fontSize: "10px" }}
                    >
                      {/* {selector.cart.length > 0 ? selector.cart.length : ""} */}
                      {cartLength > 0 ? cartLength : "0"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
        <SearchSidebar isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />
        {/* <MenuSidebar isOpen={isOpenSibebar} setIsOpen={setIsOpenSidebar} /> */}
      </div>
    </>
  );
};

export default MenuNavbar;
