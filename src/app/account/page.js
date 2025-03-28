"use client";
import AddressPage from "@/components/Account/AddressPage";
import MyProfile from "@/components/Account/MyProfile";
import OrderPage from "@/components/Account/OrderPage";
import React, { useState } from "react";
import useAuth from "../../auth/useAuth";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const [activeTab, setActiveTab] = useState("orders"); // Default active tab is "orders"
  const { user, logOut } = useAuth();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const router = useRouter();

  if (!user) {
    return router.push("/");
  }

  return (
    <div className="w-full max-container h-full flex flex-col pb-20 mt-10">
      {/* Tab navigation */}
      <div className="flex justify-center gap-10 mt-5 border-b pb-3">
        <div
          className={`cursor-pointer ${activeTab === "orders" ? "text-blue-500" : "text-gray-500"
            }`}
          onClick={() => handleTabClick("orders")}
        >
          Orders
        </div>
        <div
          className={`cursor-pointer ${activeTab === "profile" ? "text-blue-500" : "text-gray-500"
            }`}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </div>
        <div
          className={`cursor-pointer ${activeTab === "address" ? "text-blue-500" : "text-gray-500"
            }`}
          onClick={() => handleTabClick("address")}
        >
          Address
        </div>
        <div
          className={`cursor-pointer ${activeTab === "logout" ? "text-blue-500" : "text-gray-500"
            }`}
          onClick={() => {
            // toast.success("Logout success!");
            logOut();
          }}
        >
          Logout
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-5">
        {activeTab === "orders" && (
          <div>
            {/* Orders content */}
            <OrderPage />
          </div>
        )}
        {activeTab === "profile" && (
          <div>
            {/* Orders content */}
            <MyProfile />
          </div>
        )}
        {activeTab === "address" && (
          <div>
            {/* Address content */}
            <AddressPage />
          </div>
        )}
        {activeTab === "logout" && (
          <div>
            {/* Logout content */}
            <p>Logout content goes here</p>
          </div>
        )}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Page;
