import React from "react";
import BlogCard from "../Blog/BlogCard";
import OrderSummaryCard from "./OrderSummeryCard";
import OrderImages from "./OrderImages";
import NewOrderCard from "./NewOrderCard";
import EmptyOrder from "./EmptyOrder";

const OrderPage = () => {
  const orderId = "123456";
  const orderStatus = "Processing";

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-12 underline text-center">
        Your Orders
      </h1>{" "}
      {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4 gap-10"> */}
      <NewOrderCard />
      {/* <OrderSummaryCard /> */}
      {/* <OrderImages /> */}
      {/* </div> */}
    </div>
  );
};

export default OrderPage;
