import React from "react";

const Page = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Shipping and Delivery
      </h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Shipping Timelines
          </h2>
          <p className="text-gray-700">
            All our orders are dispatched within 24-48 working hours after order
            placement. The order is delivered by the date given at the time of
            checkout. In case of certain unavoidable conditions, the shipping
            timelines may be affected.
          </p>
          <p className="text-gray-700 mt-4">
            If you don't receive any shipping information, kindly contact us at:
          </p>
          <ul className="list-disc ml-8 mt-2 space-y-2 text-gray-700">
            <li>
              Email:{" "}
              <a
                href="mailto:info@glamnglow.com"
                className="text-blue-600 underline"
              >
                info@glamnglow.com
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Payment Options
          </h2>
          <p className="text-gray-700">
            Cash on Delivery (COD) is not available for our products. We only
            accepts prepaid orders.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Order Tracking
          </h2>
          <p className="text-gray-700">
            You can track your order with the tracking ID or tracking link
            provided to you after the shipment of the product.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Shipping Charges
          </h2>
          <p className="text-gray-700">
            All our orders have free shipping charges above a certain value.
            Below that value, you will have to pay a certain price for the
            shipping of your order along with the product price.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
