import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import NavbarDroupdown from "./NavbarDroupdown";

const MegaMenu = ({ showNavbar, hideNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu className="relative inline-block text-left">
        <Menu.Button
          onMouseEnter={showNavbar}
          onMouseOver={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-white   hover:underline"
        >
          Bestsellers menu
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </Menu>
      {isOpen && (
        <>
          <NavbarDroupdown hideNavbar={hideNavbar} />
        </>
      )}
    </>
  );
};

export default MegaMenu;
