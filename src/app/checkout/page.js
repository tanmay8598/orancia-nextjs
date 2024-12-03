"use client";
import useAuth from "@/auth/useAuth";
import AddressSidebar from "@/components/Cart/AddressSidebar";
import Loader from "@/components/loader/Loader";
import OrderImagecard from "@/components/orderPage/OrderImagecard";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import apiClient from "@/api/client";
import useRazorpay from "react-razorpay";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { clear } from "@/redux/features/cart/cartSlice";


const page = () => {
  const { user } = useAuth();
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

  //razorpay
  const [Razorpay] = useRazorpay();
  const [paymentStatus, setPaymentStatus] = useState();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(true)

  const [razorpay_payment_id, setrazorpay_payment_id] = useState()

  const totalValue = selector.cart.reduce((total, item) => {
    const price = item.discountedPrice || item.product?.sell_price;
    return total + item.quantity * price;
  }, 0);
  const discountedTotal = totalValue - discount;

  const router = useRouter();

  const [showCoupons, setShowCoupons] = useState(false);

  const toggleCoupons = () => {
    setShowCoupons(!showCoupons);
  };



  const handlePayment = useCallback(async () => {
    const result = await apiClient.get("/orders/payment", {
      total: totalValue,
      userId: user.id,
    });

    const options = {
      key: result.data.notes.key,
      amount: totalValue,
      currency: "INR",
      name: "Pinakinshine ECOM Pvt. Ltd",
      description: "Total Payment",
      image: "https://example.com/your_logo",
      order_id: result.data.id,
      handler: async (res) => {

        try {
          const paymentId = res.razorpay_payment_id;
          if (paymentId) {
            setrazorpay_payment_id(paymentId)
            setPaymentStatus(true);
          }
        } catch (error) {
          setUploadVisible(false);
          createFailedOrder();
        }
      },
      prefill: {
        email: user?.email,
        contact: user?.shippingAddress?.phone,
        name: user?.name,
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, user]);

  useEffect(() => {
    if (user && user.shippingAddress) {
      setShippingAddress(user.shippingAddress);
      checkDelivery(user.shippingAddress.pincode)
    }
    setIsLoading(false);
  }, [user]);

  const checkDelivery = async (pincode) => {
    if (!pincode || pincode.length !== 6) return


    try {
      // Replace with your actual API endpoint
      const response = await apiClient.get("/delivery/check-delivery-exist-by-pincode", { pinCode: pincode })

      if (response?.data?.inboundServiceExist == 'Yes') {
        toast.success("Delivery available!", {
          id: "transaction-success-toast",
          duration: 4000,
        });
        setDeliveryInfo(false)
      } else {
        toast.error("Delivery to your address is not available");

      }
    } catch (error) {
      console.error('Failed to fetch delivery info:', error)
    }
  }

  useEffect(() => {

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

  useEffect(() => {
    if (paymentStatus === true) {
      handleSubmit();
    }
  }, [paymentStatus]);

  const handleSubmit = async (e) => {
    // e.preventDefault();

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
        paymentMethod: "Online",
        paymentResult: "Success",
        invoiceId: razorpay_payment_id,
        itemsPrice: totalValue,
        totalPrice: discountedTotal || totalValue,
        deliveryStatus: "Processing",
        userId: user.id,
        isPaid: true,
      });
      console.log(orderResult)
      if (!orderResult.ok) {
        throw new Error("Error creating order.");
      }

      if (couponId) {
        const couponResult = await apiClient.post("/variation/coupon/post", {
          couponId,
          userId: user.id,
        });
        if (!couponResult.ok) {
          throw new Error("Error applying coupon.");
        }
      }

      dispatch(clear());

      toast.success("Transaction successful!", {
        id: "transaction-success-toast",
        duration: 1000,
      });

      router.push(`/account/${orderResult.data._id}`);
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Please retry.");
    }
  };


  if (isLoading) {
    return (
      <div className="h-screen">

        <Loader />
      </div>
    )

  }



  const removedCoupan = (couponCode) => {
    if (appliedCoupon === couponCode) {
      setDiscount(0);
      setAppliedCoupon("");
      toast.success("Coupon removed.");
      setCouponId("");
    }
  };

  const handleApplyCoupons = (couponCode) => {
    const coupon = coupans.find((c) => c.name === couponCode);

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
                <div className="items-center border border-gray-200 p-4 mb-5 rounded-lg shadow-sm bg-white">
                  {/* Show All Coupons Button */}
                  <button
                    onClick={toggleCoupons}
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md w-full mb-3 hover:bg-blue-600 transition-colors duration-200"
                  >
                    {showCoupons ? 'Hide Coupons' : 'Show All Coupons'}
                  </button>

                  {/* Coupons List */}
                  {showCoupons && (
                    <div className="mt-2">
                      <div className="text-md font-medium text-gray-700 mb-3">All Coupons</div>

                      {coupans.map((coupon, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between w-full border border-gray-300 p-3 mb-2 rounded-md shadow hover:shadow-md transition-shadow duration-200 bg-gray-50"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-700">{coupon.name}</p>
                            <p className="text-xs text-gray-500">
                              {coupon.discount}% OFF, max ₹{coupon.max} OFF
                            </p>
                          </div>
                          {appliedCoupon === coupon.name ? (
                            <button
                              className="text-red-600 text-xs px-2 py-1 rounded-full border border-red-600 hover:bg-red-100 transition-colors duration-200"
                              onClick={() => removedCoupan(coupon.name)}
                            >
                              Remove
                            </button>
                          ) : (
                            <button
                              className="text-blue-600 text-xs px-2 py-1 rounded-full border border-blue-600 hover:bg-blue-100 transition-colors duration-200"
                              onClick={() => handleApplyCoupons(coupon.name)}
                            >
                              Apply
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
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
            {/* <div className="flex my-4 justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Including ₹ 103.21 in taxes
                </p>
              </div>
            </div> */}
            <button
              disabled={deliveryInfo}
              className="text-white w-full bg-primary p-2 rounded"
              onClick={handlePayment}
            // onClick={handleSubmit}
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
      <Toaster position="bottom-right" />
      {/* <ToastContainer position="bottom-right" autoClose={3000} /> */}
    </>
  );
};

export default page;
