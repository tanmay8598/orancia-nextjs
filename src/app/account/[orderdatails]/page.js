import OrderDetailsPage from "@/components/Account/OrderDetailsPage";
import OrderImages from "@/components/Account/OrderImages";
import OrderSummaryCard from "@/components/Account/OrderSummeryCard";
import React from "react";
const Page = () => {
  const orderId = "123456";
  const orderStatus = "Processing";

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-12 underline text-center">
        Orders Detail Page
      </h1>
      <OrderDetailsPage />
      {/* <OrderImages /> */}
    </div>
  );
};

export default Page;
