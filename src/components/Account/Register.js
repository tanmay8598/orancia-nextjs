"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useRouter } from "next/navigation";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import LogoInformation from "./LogoInformation";
import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";

const Register = ({ setIsLogin, isOpen, setIsOpen }) => {
  const { logIn } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),

    email: Yup.string().required("Email is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    password: Yup.string().required("Password is required"),
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
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
        const response = await apiClient.post("/user/register", formData);

        if (response.ok) {
          toast.success("Form submitted successfully!");
          logIn(response.data.token);
          setIsOpen(false);
        } else
          (error) => {
            console.log(error);
            toast.error("Failed to register. Please try again.");
          };
      } catch (error) {
        console.log(error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      toast.error("Please correct the errors before submitting.");
    }
  };
  const handleInputNumber = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    e.target.value = inputValue;
  };
  return (
    <>
      <LogoInformation />
      <form onSubmit={handleSubmit}>
        <InputField
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          placeholder=" "
        />

        <InputField
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder=" "
        />
        <InputField
          id="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
          maxLength={10}
          onInput={handleInputNumber}
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
        >
          Register
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

export default Register;
