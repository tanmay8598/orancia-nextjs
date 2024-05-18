"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import OrderCardHeader from "./OrderCardHeader";

const OrderImages = () => {
  const router = useRouter();
  const id = "abc";
  const handleClick = () => {
    router.push(`/account/${id}`);
  };
  return (
    <div className="bg-white  flex justify-center mb-5 items-center">
      <div className="bg-white rounded-black shadow-md rounded-xl border border-gray-500 w-full md:w-3/4">
        <OrderCardHeader />

        <div class="space-y-8 p-4 sm:space-y-0 sm:p-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-700">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-700">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-700">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-700">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg ">
              <div className="flex-shrink-0 m-3">
                <button className="bg-red-400 rounded-xl text-white font-medium text-xs py-2 px-6 sm:px-12 w-full ">
                  Track Order
                </button>
              </div>
              <div className="flex-shrink-0 m-3">
                <button
                  className="bg-red-400 rounded-xl text-white font-medium text-xs py-2 px-4 sm:px-8 w-full "
                  onClick={handleClick}
                >
                  View Order Detail
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2  p-4 border-t border-gray-500   rounded-b-xl  justify-between">
          <div>Archive order</div>
        </div>
      </div>
    </div>
  );
};

export default OrderImages;
