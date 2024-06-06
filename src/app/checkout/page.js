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
  const [couponId, setCouponId] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const selector = useSelector((state) => state.cart);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const products = selector.cart;
  const totalValue = selector.cart.reduce((total, item) => {
    return total + item.quantity * item.product.sell_price;
  }, 0);
  const discountedTotal = totalValue - discount;
  const { user } = useAuth();
  const router = useRouter();
  console.log(discountedTotal, "user");
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

    try {
      const orderItems = products.map((item) => ({
        name: item.product.name,
        qty: item.quantity,
        image: item.product.image[0],
        price: item.product.sell_price,
        product: item.product._id,
      }));

      const orderResult = await apiClient.post("/orders/create-order", {
        orderItems,
        shippingAddress,
        paymentMethod: "COD",
        itemsPrice: totalValue,
        totalPrice: discountedTotal,
        deliveryStatus: "Processing",
        userId: user.id,
        isPaid: true,
      });

      if (!orderResult.ok) {
        throw new Error("Error creating order.");
      }
      if (orderResult.ok) {
        const couponResult = await apiClient.post("/variation/coupon/post", {
          couponId,
          userId: user.id,
        });
        if (!couponResult.ok) {
          throw new Error("Error applying coupon.");
        }
      } else {
        throw new Error("Error creating order.");
      }

      // Apply coupon

      dispatch(clear());
      toast.success("Transaction successful!");
      router.push(`/account/${orderResult.data._id}`);
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Please retry.");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const removedCoupan = (couponCode) => {
    if (appliedCoupon === couponCode) {
      setDiscount(0);
      setAppliedCoupon("");
      toast.info("Coupon removed.");
      setCouponId("");
    }
  };

  const handleApplyCoupons = (couponCode) => {
    const coupon = coupans.find((c) => c.name === couponCode);
    console.log(coupon.limit, "coupon.limit");
    const isUsedByUser = coupon?.usedBy?.filter(function (User) {
      return User._id === user?.id;
    });
    // console.log(isUsedByUser, "isUsedByUser");

    if (!coupon) {
      toast.error("Invalid coupon code.");
      setDiscount(0);
      setAppliedCoupon("");
      return;
    }
    if (isUsedByUser?.length > 0) {
      toast.error("Coupon already used by the user.");
      setDiscount(0);
      setAppliedCoupon("");
      return;
    }

    const totalCartValue = selector.cart.reduce((total, item) => {
      return total + item.quantity * item.product.sell_price;
    }, 0);

    const percentageDiscount = (totalCartValue * coupon.discount) / 100;
    const effectiveDiscount = Math.min(percentageDiscount, coupon.max);
    console.log(coupon.max, "coupon.max");
    console.log(coupon.discount, "coupon.discount");
    // console.log(percentageDiscount, "percentageDiscount");
    console.log(effectiveDiscount, "effectiveDiscount");

    if (effectiveDiscount >= totalCartValue) {
      toast.error(
        `Maximum discount limit for this coupon is ₹${coupon.limit}.`
      );
      setDiscount(0);
      setAppliedCoupon("");
      return;
    }

    setDiscount(effectiveDiscount);
    setAppliedCoupon(couponCode);
    setCouponId(coupon._id);
    toast.success("Coupon applied successfully!");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleApplyCoupons(couponCode);
  };
  // console.log(coupans, "coupans");
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
              <form className="flex" onSubmit={handleFormSubmit}>
                <div className="flex-1 mr-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="px-4 mt-1 p-2 block w-full border rounded-md"
                    placeholder="Discount code or gift card"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <div>
                <div className="items-center  border border-gray-300 p-4 mb-5 rounded-lg">
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
                        {/* <button
                          className="text-red-500 underline"
                          onClick={() => removedCoupan(coupon.name)}
                        > */}
                        {appliedCoupon === coupon.name ? (
                          <button
                            className="text-red-500 underline"
                            onClick={() => removedCoupan(coupon.name)}
                          >
                            Remove
                          </button>
                        ) : (
                          <button
                            className="text-red-500 underline"
                            onClick={() => handleApplyCoupons(coupon.name)}
                          >
                            Apply
                          </button>
                        )}
                        {/* </button> */}
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
            {/* <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600">Shipping</p>
              </div>
              <p className="text-gray-600">Enter shipping address</p>
            </div> */}
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
