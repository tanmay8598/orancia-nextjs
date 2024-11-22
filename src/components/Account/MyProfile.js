import useAuth from "@/auth/useAuth";
import React from "react";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl text-center font-bold mb-4">My Profile</h1>
        <div className="max-w-2xl w-full  lg:w-[400px] mx-auto bg-white rounded-lg shadow-md border border-gray-300 flex flex-col sm:flex-row">
          <div className="flex-1 flex-grow border-b sm:border-b-0 border-gray-300">
            <div className="p-6">
              <p className="text-gray-600 mt-1">Name : {user?.name}</p>
              <p className="text-gray-600 mt-1">Email : {user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
