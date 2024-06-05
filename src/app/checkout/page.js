"use client";
import useAuth from "@/auth/useAuth";
import AddressSidebar from "@/components/Cart/AddressSidebar";
import Loader from "@/components/loader/Loader";
import OrderImagecard from "@/components/orderPage/OrderImagecard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import apiClient from "@/api/client";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { clear } from "@/redux/features/cart/cartSlice";

const page = () => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [coupans, setCoupans] = useState([]);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const selector = useSelector((state) => state.cart);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const products = selector.cart;
  const totalValue = selector.cart.reduce((total, item) => {
    return total + item.quantity * item.product.sell_price;
  }, 0);
  const discountedTotal = totalValue - discount;
  const { user } = useAuth();
  const router = useRouter();

  const orderItems = [];

  useEffect(() => {
    if (user && user.shippingAddress) {
      setShippingAddress(user.shippingAddress);
    }
    setIsLoading(false);
  }, [user]);

  useEffect(() => {
    if (!products.length) {
      router.push("/");
    }
    getCoupons();
  }, [products]);

  const getCoupons = async () => {
    try {
      const response = await apiClient.get("/variation/coupon/get");

      if (response.ok) {
        setCoupans(response.data);
      } else {
        setError(response.status);
      }
    } catch (errr) {
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    products?.map((item) => {
      orderItems.push({
        name: item?.product?.name,
        qty: item?.quantity,
        image: item?.product?.image[0],
        price: item?.product?.sell_price,
        product: item.product._id,
      });
    });

    const result = await apiClient.post("/orders/create-order", {
      orderItems,
      shippingAddress,
      paymentMethod: "COD",
      itemsPrice: totalValue,
      totalPrice: discountedTotal,
      deliveryStatus: "Processing",
      userId: user.id,
      isPaid: true,
    });

    if (result.ok) {
      dispatch(clear());
      toast.success("Transaction successful!");
      router.push(`/account/${result.data._id}`);
    } else {
      toast.error("Error. Retry");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleApplyCoupon = (couponCode) => {
    if (appliedCoupon === couponCode) {
      setDiscount(0);
      setAppliedCoupon("");
      toast.info("Coupon removed.");
    } else {
      const coupon = coupans.find((c) => c.name === couponCode);
      if (coupon) {
        setDiscount(coupon.discount);
        setAppliedCoupon(couponCode);
        toast.success("Coupon applied successfully!");
      } else {
        setDiscount(0);
        setAppliedCoupon("");
        toast.error("Invalid coupon code.");
      }
    }
  };

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
                    {shippingAddress.address},{shippingAddress.street} ,{" "}
                    {shippingAddress.city},{shippingAddress.landmark},{" "}
                    {shippingAddress.area},{shippingAddress.pincode},
                    {shippingAddress.state}
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
                className="w-3/4 bg-[#ed1d24] text-white py-2 px-4 rounded-md hover:bg-red-600"
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
                <div className="items-center w-11/12 border border-gray-300 p-4 rounded-lg">
                  <div className="text-sm mb-4">All Coupons</div>

                  {coupans.map((coupon, index) => (
                    <div
                      key={index}
                      className="items-center w-full border border-gray-300 p-4 mb-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex-1 ml-4">
                          <p className="text-sm text-gray-600">{coupon.name}</p>
                          <p className="text-xs text-gray-500">
                            Any 2 eligible products at ₹{coupon.discount}
                          </p>
                        </div>
                        <button
                          className="text-red-500 underline"
                          onClick={() => handleApplyCoupon(coupon.name)}
                        >
                          {appliedCoupon === coupon.name ? "Remove" : "Apply"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
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
                ₹ {discountedTotal}.00
              </p>
            </div>
            <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Including ₹ 103.21 in taxes
                </p>
              </div>
            </div>
            <button
              className="text-white w-full bg-primary p-2 rounded"
              onClick={handleSubmit}
            >
              Complete transaction
            </button>
          </div>
          <AddressSidebar
            isOpen={isOpenAccount}
            setIsOpen={setIsOpenAccount}
            existingAddress={shippingAddress}
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default page;
