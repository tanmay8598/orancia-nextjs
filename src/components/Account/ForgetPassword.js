import React, { useState } from "react";
import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";
import InputField from "./InputField";
import LogoInformation from "./LogoInformation";
import { useRouter } from "next/navigation";
import apiClient from "@/api/client";

const ForgetPassword = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});


  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
  });
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



  const handleSendPassword = async (e) => {
    e.preventDefault();
    const isValid = await validate(); 
  
    if (!isValid) {
      toast.error("Please correct the errors first");
      return;
    }
  
    try {
      const response = await apiClient.post(`/user/reset-password`, {
        email: formData.email,
      });
  
      if (response.ok) {
        toast.success(response.data.message || "Password reset email sent successfully!");
        setIsOpen(false);
      } else {
        toast.error(response.data.message || "Failed to send password recovery email");
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Failed to send password recovery email. Please try again");
    }
  };

  return (
    <>
      <LogoInformation />

      <form onSubmit={handleSendPassword}>
        <p className="text-base mb-2 ">Please enter your email to reset your password</p>
        <InputField
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder=" "
        />

        <button
          className="bg-[#ed1d24] text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        // onClick={handleSendPassword}
        >
          Send Password
        </button>
      </form>

      <Toaster position="bottom-right" />
    </>
  );
};

export default ForgetPassword;
