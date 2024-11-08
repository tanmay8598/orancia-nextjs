import React from "react";
import NewOrderCard from "./NewOrderCard";


const OrderPage = () => {


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-12 underline text-center">
        Your Orders
      </h1>{" "}

      <NewOrderCard />

    </div>
  );
};

export default OrderPage;
