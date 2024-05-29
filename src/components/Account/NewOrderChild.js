"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { useRouter } from "next/navigation";
const NewOrderChild = ({ orderData }) => {
  const router = useRouter();
  console.log(orderData, "orderData");
  const handleOrder = () => {
    router.push(`/account/${orderData?._id}`);
    // router.push(`/order-details/`);
  };

  return (
    <>
      <div className="bg-white  flex justify-center mb-5 items-center">
        <div className="bg-white rounded-black shadow-md rounded-xl border p-5   w-full md:w-3/4">
          <div className="header text-center">
            <div className="grid grid-cols-1 sm:grid-cols-4 border-b pb-4 gap-2">
              <div className="grid   col-span-1 border-r">
                <div className="text-gray-400">Order Id</div>
                <div className="text-sm">{orderData?._id}</div>
              </div>
              <div className="grid col-span-1 border-r">
                <div className="text-gray-400">Order Date</div>
                <div className="text-sm">
                  {orderData
                    ? new Date(orderData.createdAt).toLocaleString()
                    : "N/A"}
                </div>
              </div>
              <div className="grid col-span-1 border-r">
                <div className="text-gray-400">Delivery Date</div>
                <div className="text-sm">
                  {orderData
                    ? new Date(orderData.updatedAt).toLocaleString()
                    : "N/A"}
                </div>
              </div>
              <div className="grid col-span-1  ">
                <div className="text-gray-400">Ship to</div>
                <div className="text-sm">
                  {orderData?.shippingAddress?.city}
                </div>
              </div>
            </div>
            {orderData.orderItems.map((itemData) => (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-6  py-4  text-center">
                  <div className="grid col-span-1 mr-4 ">
                    <div className=" rounded">
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
                      <span className="text-gray-400">Product : </span>
                      <span> {itemData.product}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Quantity : </span>
                      <span> {itemData.qty}</span>
                    </div>
                  </div>
                  <div className="grid col-span-1 text-left sm:text-right  ">
                    ₹{itemData.price}
                  </div>
                </div>
              </>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-4 border-t text-center pt-4 gap-2">
              <div className="grid   col-span-2 sm:text-left    ">
                <div className="flex justify-between sm:justify-normal">
                  <div className="text-gray-400 ">Total Amount : </div>
                  <div> ₹{orderData.totalPrice}</div>
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
