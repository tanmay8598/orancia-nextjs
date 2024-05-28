"use client";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const NewOrderCard = () => {
  const router = useRouter();
  const handleOrder = () => {
    router.push("/order-details");
  };
  return (
    <>
      <div className="bg-white  flex justify-center mb-5 items-center">
        <div className="bg-white rounded-black shadow-md rounded-xl border p-5   w-full md:w-3/4">
          <div className="header text-center">
            <div className="grid grid-cols-1 sm:grid-cols-4 border-b pb-4 gap-2">
              <div className="grid   col-span-1 border-r">
                <div className="text-gray-400">Order Number</div>
                <div>#2562015893</div>
              </div>
              <div className="grid col-span-1 border-r">
                <div className="text-gray-400">Order Date</div>
                <div>may 27, 2024</div>
              </div>
              <div className="grid col-span-1 border-r">
                <div className="text-gray-400">Delivery Date</div>
                <div>may 28, 2024</div>
              </div>
              <div className="grid col-span-1  ">
                <div className="text-gray-400">Ship to</div>
                <div>UP India</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6  py-4  text-center">
              <div className="grid col-span-1  ">
                <div className=" rounded">
                  {" "}
                  <Image
                    src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className="object-contain object-center w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <div className="grid col-span-4 sm:p-2 pt-2  text-left  ">
                <div className="font-semibold">
                  Main's Regular Fit Polo Black T-shirt
                </div>
                <div>
                  <span className="text-gray-400">Color : </span>
                  <span> Black</span>
                </div>
                <div>
                  <span className="text-gray-400">Size : </span>
                  <span> M</span>
                </div>
                <div>
                  <div className="flex text-[#4F46E5]">
                    <MdOutlineStar className="mt-1" />
                    Rate Now
                  </div>
                </div>
              </div>
              <div className="grid col-span-1 text-left sm:text-right  ">
                $80.00
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 border-t text-center pt-4 gap-2">
              <div className="grid   col-span-2 sm:text-left    ">
                <div className="flex justify-between sm:justify-normal">
                  <div className="text-gray-400 ">Total Amount : </div>
                  <div> $160</div>
                </div>
              </div>
              <div className="grid   col-span-2   ">
                <div
                  className="flex cursor-pointer sm:justify-end text-[#4F46E5]"
                  onClick={handleOrder}
                >
                  {/* <div>
                    <IoDownloadOutline className="mt-[3px]" />{" "}
                  </div> */}
                  <div> View Order Detail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOrderCard;
