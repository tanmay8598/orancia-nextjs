"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosCart } from "react-icons/io";

const page = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <>
      <div className="shadow-lg m-8 rounded-md   pb-2  p-6 shadow-blue-gray-300 bg-white">
        {/* order header section */}
        <div className="grid grid-cols-1  border-b-2 mb-2  ">
          <div className="flex justify-between pb-2">
            <div className="flex text-[#4F46E5] pt-2">
              <div>
                <IoIosCart className="mt-1 mr-1 " />
              </div>
              <div>My Order Details</div>
            </div>
            <div
              onClick={handleBackClick}
              className="cursor-pointer bg-red-600 p-2 text-white rounded  "
            >
              Back
            </div>
          </div>
        </div>
        {/* odrder details */}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
          <div class=" ">
            <div className="border-b-2 p-3-b-2 mb-4 font-semibold text-gray-600 text-xl">
              Order Details
            </div>
            <div className="font-semibold text-gray-600 text-lg">
              <div className="mb-2">Order Id : 7</div>
              <div className="mb-2">Tracking Id/No.: funda-FgocLv9kYR</div>
              <div className="mb-2">Order Date : 18-05-2024 11:42 AM</div>
              <div className="mb-2">Payment Mode : Pay by Paypal</div>
            </div>
            <div className="border p-3-2 text-lg p-2 text-green-600">
              Order Status Message : IN PROGRESS
            </div>
          </div>
          <div class=" ">
            <div className="border-b-2 p-3-b-2 mb-4 font-semibold text-gray-600 text-xl">
              User Details
            </div>
            <div className="font-semibold text-gray-600 text-lg">
              <div className="mb-2">Full Name : Vimal Raj</div>
              <div className="mb-2">Email Id : vimal@gmail.com</div>
              <div className="mb-2">Phone No.: 8172848306</div>
              <div className="mb-2">Address : Gomati Nagar Lucknow</div>
              <div className="mb-2">Pin code : 226141</div>
            </div>
          </div>
        </div>
        {/* order item */}
        <div className="mb-4">
          <div className="grid grid-cols-1   mb-2  ">
            <div className="border-b-2 p-3-b-2 mb-4 font-semibold text-gray-600 text-xl">
              Order Item
            </div>
          </div>
          <div>
            <div className="w-full overflow-x-auto">
              <table className="w-full border-2 border-collapse">
                <thead>
                  <tr>
                    <th className="border p-3 border-gray-300">Item Name</th>
                    <th className="border p-3 border-gray-300">Image</th>
                    <th className="border p-3 border-gray-300">Quantity</th>
                    <th className="border p-3 border-gray-300">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 border-gray-300">
                      The Sliding Mr. Bones
                    </td>
                    <td className="border p-3 border-gray-300">
                      <div className="rounded">
                        <Image
                          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                          width={200}
                          height={200}
                          alt="Picture of the author"
                          className="object-contain object-center w-full h-20 rounded-lg"
                        />
                      </div>
                    </td>
                    <td className="border p-3 border-gray-300">1961</td>
                    <td className="border p-3 border-gray-300">
                      Malcolm Lockyer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
