"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./InputField";
import LogoInformation from "./LogoInformation";
import { useRouter } from "next/navigation";
import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";

const LoginForm = ({ setIsRegistering, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const { logIn } = useAuth();
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const validate = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const formattedErrors = err.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      try {
        const response = await apiClient.post("/user/login", formData);

        if (response.ok) {
          // toast.success("Login successful!");
          logIn(response.data.token);
          setIsOpen(false);
        } else {
          console.error("Login failed:");
          toast.error("Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      toast.error("Please correct the errors before submitting.");
    }
  };

  return (
    <>
      <LogoInformation />

      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder=" "
        />
        <InputField
          id="password"
          label="Password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          placeholder=" "
        />

        <button
          className="bg-red-700 text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => setIsOpen(true)}
        >
          Login
        </button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default LoginForm;
