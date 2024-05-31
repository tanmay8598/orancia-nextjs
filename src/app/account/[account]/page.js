// import OrderDetailsPage from "@/components/Account/OrderDetailsPage";
// import OrderImages from "@/components/Account/OrderImages";
// import OrderSummaryCard from "@/components/Account/OrderSummeryCard";
// import React from "react";
// const Page = () => {
//   const orderId = "123456";
//   const orderStatus = "Processing";

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-12 underline text-center">
//         Orders Detail Page
//       </h1>
//       <OrderDetailsPage />
//       <OrderImages />
//     </div>
//   );
// };

// export default Page;
"use client";
import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";
import OrderAddress from "@/components/OrderAddress";
import Loader from "@/components/loader/Loader";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosCart } from "react-icons/io";

const page = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    if (user) {
      getMyOrder();
    }
  }, [user]);

  const getMyOrder = async () => {
    try {
      const response = await apiClient.get("/orders/myorders-details", {
        id: params.account,
      });
      console.log(response, "respo");
      if (response.ok) {
        setMyOrder(response.data);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const handleBackClick = () => {
    router.push("/account/");
  };

  return (
    <>
      <div className="shadow-lg m-8 rounded-md   pb-2  p-6 shadow-blue-gray-300 bg-white">
        {/* order header section */}
        <div className="grid grid-cols-1  border-b-2 mb-2  ">
          <div className="flex justify-between pb-2">
            <div className="flex text-[#4F46E5] pt-2">
              <div>
                <IoIosCart className="mt-1 mr-1 " />
              </div>
              <div>My Order Details</div>
            </div>
            <div
              onClick={handleBackClick}
              className="cursor-pointer bg-red-600 p-2 text-white rounded  "
            >
              Back
            </div>
          </div>
        </div>
        <OrderAddress mydata={myOrder} /> {/* order item */}
        <div className="mb-4">
          <div className="grid grid-cols-1   mb-2  ">
            <div className="border-b-2 p-3-b-2 mb-4 font-semibold text-gray-600 text-xl">
              Items
            </div>
          </div>
          <div>
            <div className="w-full overflow-x-auto">
              <table className="w-full border-2 border-collapse">
                <thead>
                  <tr>
                    <th className="border p-3 border-gray-300">Product Name</th>
                    <th className="border p-3 border-gray-300">
                      Product Image
                    </th>
                    <th className="border p-3 border-gray-300">Quantity</th>
                    <th className="border p-3 border-gray-300">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrder?.orderItems?.length > 0 ? (
                    myOrder.orderItems.map((data, index) => (
                      <tr key={index}>
                        <td className="border p-3 border-gray-300">
                          {data?.name}
                        </td>
                        <td className="border p-3 border-gray-300">
                          <div className="rounded">
                            <Image
                              src={data?.image}
                              width={200}
                              height={200}
                              alt="Picture of the author"
                              className="object-contain object-center w-full h-20 rounded-lg"
                            />
                          </div>
                        </td>
                        <td className="border p-3 text-center border-gray-300">
                          {data?.qty}
                        </td>
                        <td className="border p-3 text-center border-gray-300">
                          ₹{data?.price}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="border p-3 border-gray-300 text-center"
                      >
                        No order items available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
