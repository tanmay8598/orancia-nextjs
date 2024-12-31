"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { useRouter } from "next/navigation";
const NewOrderChild = ({ orderData }) => {
  const router = useRouter();

  const handleOrder = () => {
    router.push(`/account/${orderData?._id}`);
  };

  const handleOrderClick = (orderId) => {
    // router.push(`/product/${orderId}`);
  };

  return (
    <>
      <div className="flex justify-center mb-5 items-center">
        <div className="bg-white shadow-lg rounded-xl border p-6 w-full md:w-3/4">
          <div className="header text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b pb-4 gap-4">
              <div className="text-center lg:text-left border-r">
                <div className="text-lg font-medium text-gray-800">Order Id</div>
                <div className="text-sm text-gray-500 mt-1">{orderData?._id}</div>
              </div>
              <div className="text-center lg:text-left border-r">
                <div className="text-lg font-medium text-gray-800">Order Date</div>
                <div className="text-sm text-gray-500 mt-1">
                  {orderData
                    ? new Date(orderData.createdAt).toLocaleString()
                    : "N/A"}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg font-medium text-gray-800">Ship to</div>
                <div className="text-sm text-gray-500 mt-1">
                  {orderData?.shippingAddress?.city}
                </div>
              </div>
            </div>

            {orderData.orderItems.map((itemData) => (
              <div key={itemData._id} className="py-4">
                <div
                  className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4 text-left"
                  onClick={() => handleOrderClick(itemData._id)}
                >
                  <div className="col-span-1">
                    <Image
                      src={itemData.image}
                      width={80}
                      height={80}
                      alt="Product Image"
                      className="object-cover w-full h-full rounded-md shadow"
                    />
                  </div>

                  <div className="col-span-4 sm:pl-2">
                    <div className="text-lg font-semibold text-gray-800">{itemData.name}</div>
                    {/* <div className="text-sm text-gray-500 mt-1">
                      <span className="font-medium text-gray-700">Product:</span> {itemData.product}
                    </div> */}
                    <div className="text-sm text-gray-500 mt-1">
                      <span className="font-medium text-gray-700">Quantity:</span> {itemData.qty}
                    </div>
                  </div>

                  <div className="col-span-1 text-right text-lg font-semibold text-gray-800">
                    ₹{itemData.price}
                  </div>
                </div>
              </div>
            ))}

            <div className="lg:flex justify-between  grid-cols-1 sm:grid-cols-2 border-t pt-4 gap-4 relative">
              <div className="flex justify-between sm:justify-start items-center col-span-1">
                <div className="text-lg font-medium text-gray-700">Total Amount:</div>
                <div className="text-lg font-semibold text-gray-800 ml-2">₹{orderData.totalPrice}</div>
              </div>
              <div className="sm:text-left col-span-1 mt-5 lg:mt-0">
                <button
                  className="text-indigo-600 font-medium hover:underline"
                  onClick={handleOrder}
                >
                  View Order Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NewOrderChild;
