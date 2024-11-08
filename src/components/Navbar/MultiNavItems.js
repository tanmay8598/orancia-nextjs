"use client";
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

const MultiLevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseOver={() => setIsOpen(true)} // Open the dropdown on mouse over
      onMouseLeave={() => setIsOpen(false)} // Close the dropdown on mouse leave
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 pb-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-white hover:bg-gray-50 hover:underline ">
          Hair Care
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        show={isOpen} // Show the dropdown when isOpen is true
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute   z-10 mt-2 w-44 origin-top-right rounded-lg bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </a>
            </li>
            <li>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                    Dropdown
                    <ChevronDownIcon
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-full z-10 -mt-9 w-44 origin-top-left bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          My downloads
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Sign out
              </a>
            </li>
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MultiLevelDropdown;
