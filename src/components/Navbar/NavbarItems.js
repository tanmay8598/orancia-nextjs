import React, { useEffect, useState } from "react";
import SubNavbarItems from "./SubNavbarItems";
import MultiLevelDropdown from "./MultiNavItems";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import NavbarDroupdown from "./NavbarDroupdown";

const NavbarItems = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const items = [
    {
      name: "Express is one of the most popular web frameworks for  ",
      link: "#",
    },
    { name: "data along with built-in type casting", link: "#" },
    {
      name: "Node.js that supports routing, middleware, view system… Mongoose is a promise-based Node.js ODM for MongoDB that provides a straight-forward, schema-based solution to model our application ,",
      link: "#",
    },
  ];
  const showNavbar = () => {
    setIsDropdownOpen(true);
  };
  const hideNavbar = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <ul className="h-full  lg:flex justify-between">
        <li>
          <Menu className="relative inline-block text-left">
            <Menu.Button
              onMouseEnter={showNavbar}
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-white   hover:underline"
            >
              Bestsellers
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </Menu>
        </li>
        <li>
          <SubNavbarItems
            items={items}
            heading="Health Care"
            isOpen={isDropdownOpen}
          />
        </li>

        <li>
          <MultiLevelDropdown isOpen={isDropdownOpen} />
        </li>

        <li>
          <MultiLevelDropdown isOpen={isDropdownOpen} />
        </li>

        <li>
          <Menu className="relative inline-block text-left">
            <Menu.Button
              onMouseEnter={showNavbar}
              // onMouseLeave={hideNavbar}
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-white   hover:underline"
            >
              Bestsellers
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </Menu>
        </li>
      </ul>
      {isDropdownOpen && (
        <>
          <NavbarDroupdown
            hideNavbar={hideNavbar}
            textContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />
        </>
      )}
    </>
  );
};

export default NavbarItems;
