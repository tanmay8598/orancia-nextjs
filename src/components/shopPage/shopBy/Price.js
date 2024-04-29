"use client";
import React, { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Slider,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Price = () => {
  const [open, setOpen] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-base font-poppins text-black lg:text-md font-semibold"
        >
          Price
        </AccordionHeader>
        <AccordionBody className="text-sm font-poppins lg:text-md leading-7 mt-2">
          <Slider color="red" defaultValue={20} />
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Price;