import React from "react";

const Page = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Cancellation and Return
      </h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Order Cancellation
          </h2>
          <p className="text-gray-700">
            Order cancellation is possible prior to processing. Once the
            processing is done, we do not allow the cancellation of any of our
            product.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Order Return
          </h2>
          <p className="text-gray-700">
            Glam & Glow products are all non-returnable due to the nature of the
            product – as they are personal care and hygiene.
          </p>
          <p className="text-gray-700 mt-4">
            All our products are non-returnable goods in the following cases.
            Kindly adhere to it:
          </p>
          <ul className="list-disc ml-8 mt-2 space-y-2 text-gray-700">
            <li>If the products have been used, modified, and opened</li>
            <li>
              If the labels, mono cartons, and other components of the original
              package are absent
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Wrong Item Delivered
          </h2>
          <p className="text-gray-700 mb-4">
            In extreme scenarios as mentioned below, we follow the given steps.
          </p>
          <ol className="list-decimal mt-2 space-y-4 text-gray-700">
            <li className="flex flex-col md:flex-row md:items-start">
              <span className="font-semibold mr-2 md:mr-4 text-black shrink-0">
                Step 1:
              </span>
              <span>
                Raise a request for replacement of the wrong product within 3
                days from the date of delivery by dropping us a mail on{" "}
                <a
                  href="mailto:pinakinshine@gmail.com"
                  className="text-blue-600 underline"
                >
                  info@glamnglow.com
                </a>
                . Mention your order ID and attach the pictures of the wrong
                product you have received.
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start">
              <span className="font-semibold mr-2 md:mr-4 text-black shrink-0">
                Step 2:
              </span>
              <span>
                Please allow us 2 business working days to review your request
                for replacement.
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start">
              <span className="font-semibold mr-2 md:mr-4 text-black shrink-0">
                Step 3:
              </span>
              <span>
                After reviewing your request, our courier partner will be sent
                to your location to collect the wrong product that was delivered
                to you.
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start">
              <span className="font-semibold mr-2 md:mr-4 text-black shrink-0">
                Step 4:
              </span>
              <span>
                Once the product is collected from your location, shipped back
                to us, and received at our location, only then will we dispatch
                the replaced product.
              </span>
            </li>
          </ol>

          <p className="text-gray-700 mt-4">
            <strong>Note:</strong>
          </p>
          <ul className="list-disc ml-8 mt-2 space-y-2 text-gray-700">
            <li>
              In case there is no reverse pick-up service available in your
              location, we will assist with an alternative solution, which is a
              refund.
            </li>
            <li>
              We will not be able to accept your replacement/refund request if
              it has been generated after 3 days of the delivery of the product.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Item Damaged
          </h2>
          <p className="text-gray-700">
            We take every precaution to ensure that you receive the product in
            optimal condition. Replacement or refund options are not available
            in case of damaged products.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Item Missing
          </h2>
          <p className="text-gray-700">
            If any of the items/products are missing, follow the same steps as
            mentioned for the wrong product delivery. Specify the missing item
            and share pictures of the received products along with the order ID
            in your request mail.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
