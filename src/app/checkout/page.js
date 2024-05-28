"use client";
import useAuth from "@/auth/useAuth";
import AddressSidebar from "@/components/Cart/AddressSidebar";
import Loader from "@/components/loader/Loader";
import CoopanBox from "@/components/orderPage/CoopanBox";
import CoopanForm from "@/components/orderPage/CoopanForm";
import OrderImagecard from "@/components/orderPage/OrderImagecard";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
const page = () => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const selector = useSelector((state) => state.cart);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const totalValue = selector.cart.reduce((total, item) => {
    return total + item.quantity * item.product.sell_price;
  }, 0);
  const { user } = useAuth();
  console.log(user, "user");
  useEffect(() => {
    if (user && user.shippingAddress) {
      setShippingAddress(user.shippingAddress);
    }
    setIsLoading(false);
  }, [user]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Address </h2>
            <div
              className="bg-blue-gray-100 mb-6 rounded-lg p-4"
              style={{
                background: "var(--Colors-Prime-Gray-Prime-Gray-50, #F9FAFB)",
              }}
            >
              {shippingAddress ? (
                <>
                  <p>
                    {shippingAddress.address},{shippingAddress.street},
                    {shippingAddress.landmark}, {shippingAddress.area},
                    {shippingAddress.pincode},{shippingAddress.state}
                  </p>

                  <p className="flex py-1 ">
                    <MdAddIcCall className="mr-1 mt-1" />{" "}
                    {shippingAddress.mobileNumber}
                  </p>
                  <p className="flex pb-1 ">
                    <IoMdMailUnread className="mr-1 mt-1" />{" "}
                    {shippingAddress.email}
                  </p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="text-center mb-6">
              <button
                type="submit"
                className="w-3/4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                onClick={() => setIsOpenAccount(true)}
              >
                + Use a different address
              </button>
            </div>
            <hr className="mb-6" />
            <div>
              <h2 className="text-lg font-semibold mb-4">Payment</h2>
              <div className="text-sm">
                <p>All transactions are secure and encrypted.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Your Products</h2>
            <div className="flex flex-col space-y-4">
              <div className="h-64 overflow-y-scroll">
                {selector.cart ? (
                  selector.cart.map((item, index) => (
                    <OrderImagecard item={item} key={index} />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <div>
                <CoopanForm />
              </div>
              <div>
                <CoopanBox />
              </div>
            </div>

            <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600">Subtotal</p>
              </div>
              <p className="text-black font-semibold">₹ {totalValue}.00</p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600">Shipping</p>
              </div>
              <p className="text-gray-600">Enter shipping address</p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-black text-2xl font-semibold">Total</p>
              </div>
              <p className="text-black text-2xl font-semibold">
                ₹ {totalValue}.00
              </p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Including ₹ 103.21 in taxes
                </p>
              </div>
            </div>
          </div>
          <AddressSidebar
            isOpen={isOpenAccount}
            setIsOpen={setIsOpenAccount}
            existingAddress={shippingAddress}
          />
        </div>
      </div>
    </>
  );
};

export default page;
