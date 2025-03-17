import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";


const MyProfile = () => {
  const { user, logIn } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);



  const handleSubmit = async (e) => {

    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }
    const response = await apiClient.post('/user/update-profile', {
      id: user.id,
      name,
      email,
      password
    })


    if (response.ok) {
      logIn(response.data.token)
      toast.success('Profile updated');
      setConfirmPassword("")
      setPassword("")
    } else {
      toast.warning('Error retry');
    }
  };

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl text-center font-bold mb-4">My Profile</h1>
        <div className="max-w-2xl w-full lg:w-[400px] mx-auto bg-white rounded-lg shadow-md border border-gray-300">
          <div className="p-6">
            <p className="text-gray-600 mt-1">Name: {user?.name}</p>
            <p className="text-gray-600 mt-1">Email: {user?.email}</p>
          </div>
        </div>
        <div className="max-w-2xl w-full lg:w-[400px] mx-auto bg-white rounded-lg shadow-md border border-gray-300 mt-6 p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Update Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              // required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Update Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              // required
              />
            </div>
            <div className="relative">

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Update Password
              </label>
              <input
                // type="password"
                id="password"
                name="password"
                value={password}
                type={isPasswordVisible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              // required
              />
               <button
                type="button"
                className="absolute top-14 right-0 pr-3 transform -translate-y-1/2 flex items-center text-sm leading-5"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <BiSolidHide className="text-lg" />
                ) : (
                  <BiSolidShow className="text-lg" />
                )}
              </button>
            </div>
            </div>
            <div className="relative">

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Update Password
              </label>
              <input
               
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                type={isConfirmPasswordVisible ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              // required
              />
               <button
                type="button"
                className="absolute top-14 right-0 pr-3 transform -translate-y-1/2 flex items-center text-sm leading-5"
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              >
                {isConfirmPasswordVisible ? (
                  <BiSolidHide className="text-lg" />
                ) : (
                  <BiSolidShow className="text-lg" />
                )}
              </button>
            </div>
            </div>
        
            <button
              type="submit"
              className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent-hover"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default MyProfile;
