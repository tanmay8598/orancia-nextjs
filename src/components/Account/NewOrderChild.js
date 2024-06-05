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
    router.push(`/product/${orderId}`);
  };

  return (
    <>
      <div className="bg-white  flex justify-center mb-5 items-center">
        <div className="bg-white rounded-black shadow-md rounded-xl border p-5   w-full md:w-3/4">
          <div className="header text-center">
            <div className="grid grid-cols-1 lg:grid-cols-4 border-b pb-4 gap-2">
              <div className="grid   col-span-1 border-r">
                <div className="">Order Id</div>
                <div className="text-sm text-gray-500">{orderData?._id}</div>
              </div>
              <div className="grid col-span-1 border-r">
                <div className="">Order Date</div>
                <div className="text-sm text-gray-500">
                  {orderData
                    ? new Date(orderData.createdAt).toLocaleString()
                    : "N/A"}
                </div>
              </div>
              <div className="grid col-span-1 border-r">
                <div className="">Delivery Date</div>
                <div className="text-sm text-gray-500">
                  {orderData
                    ? new Date(orderData.updatedAt).toLocaleString()
                    : "N/A"}
                </div>
              </div>
              <div className="grid col-span-1  ">
                <div className="">Ship to</div>
                <div className="text-sm text-gray-500">
                  {orderData?.shippingAddress?.city}
                </div>
              </div>
            </div>
            {orderData.orderItems.map((itemData) => (
              <div key={itemData._id}>
                <div
                  className="grid grid-cols-1 sm:grid-cols-6  py-4  text-center"
                  onClick={() => handleOrderClick(itemData._id)}
                >
                  <div className="grid col-span-1 mr-4 ">
                    <div className=" rounded cursor-pointer">
                      {" "}
                      <Image
                        // src="https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-02.jpg"
                        src={itemData.image}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="object-contain object-center w-full h-full rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid col-span-4 sm:p-2 pt-2  text-left gap-4  ">
                    <div className="font-semibold">{itemData.name}</div>
                    <div>
                      <span className="">Product : </span>
                      <span className="text-gray-500"> {itemData.product}</span>
                    </div>
                    <div>
                      <span className="">Quantity : </span>
                      <span className="text-gray-500"> {itemData.qty}</span>
                    </div>
                  </div>
                  <div className="grid text-gray-500 col-span-1 text-left sm:text-right  ">
                    ₹{itemData.price}
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-4 border-t text-center pt-4 gap-2">
              <div className="grid   col-span-2 sm:text-left    ">
                <div className="flex justify-between sm:justify-normal">
                  <div className=" ">Total Amount : </div>
                  <div className="text-gray-500"> ₹{orderData.totalPrice}</div>
                </div>
              </div>
              <div className="grid   col-span-2   ">
                <div
                  className="flex cursor-pointer sm:justify-end text-[#4F46E5]"
                  onClick={handleOrder}
                >
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

export default NewOrderChild;
