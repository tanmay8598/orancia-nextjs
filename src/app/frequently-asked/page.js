import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Orancia FAQs</h1>

      {/* Order and Delivery Related Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Order and Delivery Related
        </h2>

      

        <div className="">
          <section className="mb-8">
            <h3 className="text-lg font-medium mb-4">
              How can I place my order?
            </h3>
            <p className="mb-4">
              Please follow the steps below if you wish to purchase any of our
              products:
            </p>
            <ol className="space-y-4">
              <li className="flex gap-2 flex-wrap items-start">
                <span className="font-bold">Step 1:</span>
                <span>Explore the products available on our website.</span>
              </li>
              <li className="flex gap-2 flex-wrap items-start">
                <span className="font-bold">Step 2:</span>
                <span>Click on the product you wish to purchase.</span>
              </li>
              <li className="flex gap-2 flex-wrap items-start">
                <span className="font-bold">Step 3:</span>
                <span>
                  The product page will appear. Add the quantity of the product
                  you want to buy. Click the ‘Add to Cart’ button.
                </span>
              </li>
              <li className="flex gap-2 flex-wrap items-start">
                <span className="font-bold">Step 4:</span>
                <span>
                  Go to the cart icon at the top right corner and click on it.
                  Your cart page will appear. Your selected product(s) will
                  appear here.
                </span>
              </li>
              <li className="flex gap-2 flex-wrap items-start">
                <span className="font-bold">Step 5:</span>
                <span>
                  Click the check-out button. You'll be taken to the checkout
                  page. Fill in your shipping address and payment information.
                </span>
              </li>
              <li className="flex gap-2 flex-wrap items-start">
                <span className="font-bold">Step 6:</span>
                <span>
                  Proceed with the payment. Once your payment is confirmed,
                  you'll receive an order confirmation email.
                </span>
              </li>
            </ol>
          </section>
        </div>

        {/* Question: How can I track my order? */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-lg">
            How can I track my order?
          </h3>
          <p>
            You will receive the tracking ID or tracking link on the provided
            contact number and/or email once your order is shipped. You can
            track your order using that link or ID.
          </p>
        </div>

        {/* Additional Questions */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-lg">
            When will I receive my order?
          </h3>
          <p>
            Your order will be delivered by the date provided at the time of
            order placement. Sometimes, it may arrive early or in some extreme
            conditions, it can be delayed. You will be notified for the same.
            However, we aim to always deliver your order on time. We will keep
            you updated on any changes to your delivery schedule.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-lg">
            Can I check if my order has been confirmed?
          </h3>
          <p>
            You will receive a confirmation message on your contact number
            and/or email after order placement. Additionally, you can also log
            into your account on our website to check the status of your order.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-lg">
            Can I change my order after placing it?
          </h3>
          <p>
            No, you cannot change your order once you have placed it. However,
            you can contact our customer service team at{" "}
            <a href="tel:+9005345980" className="text-blue-600">
              9005345980
            </a>{" "}
            or{" "}
            <a href="mailto:pinakinshine@gmail.com" className="text-blue-600">
              pinakinshine@gmail.com
            </a>{" "}
            to discuss your options.
          </p>
        </div>
        {/* Add more questions as needed */}
      </section>

      {/* Product Related Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Product Related
        </h2>

        {/* Question: Are your products tested on animals? */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-lg">
            Are your products tested on animals?
          </h3>
          <p>No, we do not use animals in our product testing.</p>
        </div>

        {/* Question: Can I use products of other brands along with your products? */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-lg">
            Can I use products of other brands along with your products?
          </h3>
          <p>
            Yes, you can use them with products of other brands in most of the
            cases. However, occasionally there might be exceptions. It's always
            a good idea to check the specific product instructions or consult
            with a skincare professional for any potential interactions or
            contradictions.
          </p>
        </div>

        {/* Add more questions as needed */}
      </section>
    </div>
  );
};

export default page;
