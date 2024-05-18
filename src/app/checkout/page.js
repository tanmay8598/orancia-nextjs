"use client";
import AddressSidebar from "@/components/Cart/AddressSidebar";
import CoopanBox from "@/components/orderPage/CoopanBox";
import CoopanForm from "@/components/orderPage/CoopanForm";
import OrderImagecard from "@/components/orderPage/OrderImagecard";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const selector = useSelector((state) => state.cart);
  const totalValue = selector.cart.reduce((total, item) => {
    return total + item.quantity * item.product.price;
  }, 0);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Address </h2>
            <div className="bg-blue-gray-100 mb-6 rounded-lg p-4">
              <p>Vibhutikhad GomatiNagar Lucknow </p>
              <p>lko, AN, 677543, IN</p>
            </div>
            <div className="text-center mb-6 ">
              <button
                type="submit"
                className="w-3/4 bg-red-500 text-white  py-2 px-4 rounded-md hover:bg-red-600   "
                onClick={() => setIsOpenAccount(true)}
              >
                + Use a diffrent address
              </button>
            </div>
            <hr className="mb-6" />
            <div>
              <h2 className="text-lg font-semibold mb-4">Payment </h2>
              <div className="text-sm">
                <p>All transactions are secure and encrypted.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Your Products</h2>
            {/* Product list goes here */}
            <div className="flex flex-col space-y-4">
              <div>
                {selector.cart &&
                  selector.cart.map((item, index) => (
                    <OrderImagecard item={item} key={index} />
                  ))}
              </div>

              <CoopanForm />
              <CoopanBox />
            </div>

            <div className="flex my-4 justify-between items-center">
              <div className="flex-1 ">
                <p className="text-sm text-gray-600">Subtotal</p>
              </div>
              <p className="text-black font-semibold  ">₹{totalValue}.00</p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1 ">
                <p className="text-sm text-gray-600">Shipping</p>
              </div>
              <p className="  text-gray-600  ">Enter shipping address</p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1 ">
                <p className="text-black text-2xl font-semibold">Total</p>
              </div>
              <span className="text-sm text-gray-600">INR </span>
              <p className="text-black text-2xl font-semibold  ">
                ₹{totalValue}.00
              </p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1 ">
                <p className="text-sm text-gray-600">
                  Including ₹103.21 in taxes
                </p>
              </div>
            </div>
          </div>
          {/* <AddressSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} /> */}
          <AddressSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
        </div>
      </div>
    </>
  );
};

export default page;
