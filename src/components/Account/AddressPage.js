import React, { useEffect, useState } from "react";
import AddressSidebar from "../Cart/AddressSidebar";
import useAuth from "@/auth/useAuth";
import Loader from "../loader/Loader";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
const AddressPage = () => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shippingAddress, setShippingAddress] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.shippingAddress) {
      setShippingAddress(user.shippingAddress);
    }
    setIsLoading(false);
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl text-center font-bold mb-4">Addresses</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-300 flex flex-col sm:flex-row">
          <div className="flex-1 flex-grow border-b sm:border-b-0 border-gray-300">
            <div className="p-6">
              {shippingAddress ? (
                <>
                  <p>
                    {shippingAddress.address},{shippingAddress.street},
                    {shippingAddress.city},{shippingAddress.landmark},
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
              <div className="mt-3 justify-between flex space-x-2">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsOpenAccount(true)}
                >
                  Edit
                </button>
                {/* <button className="text-red-500 hover:underline">Delete</button> */}
              </div>
            </div>
          </div>
          <div className="flex-1 flex-grow flex justify-center items-center bg-blue-gray-100 sm:rounded-r sm:border-l border-gray-300">
            <button
              onClick={() => setIsOpenAccount(true)}
              className="text-[#ed1d24] hover:underline flex items-center p-6"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>Add a new address</div>
            </button>
          </div>
        </div>
      </div>
      <AddressSidebar
        isOpen={isOpenAccount}
        setIsOpen={setIsOpenAccount}
        existingAddress={shippingAddress}
      />
    </>
  );
};

export default AddressPage;
