import React, { use, useState } from "react";
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
import { User } from "lucide-react";

const AddressForm = ({ setIsLogin, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    address: "",
    street: "",
    email: "",
    mobileNumber: "",
    area: "",
    pincode: "",
    landmark: "",
  });
  const [errors, setErrors] = useState({});
  const user = useAuth();
  const router = useRouter();
  console.log(router, "router");

  const schema = Yup.object().shape({
    address: Yup.string()
      .required("Enter Address is required")
      .min(3, "Enter Address must be at least 3 characters"),

    street: Yup.string()
      .required("Enter Street is required")
      .min(3, "Enter Street must be at least 3 characters"),
    // email: Yup.string().required("Email is required"),
    mobileNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    email: Yup.string().required("Email is required"),
    area: Yup.string().required("area is required"),
    pincode: Yup.string()
      .required("Pin Code is required")
      .matches(/^\d{6}$/, "Pin Code must be exactly 6 digits"),
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
    if (!isValid) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    try {
      const response = await apiClient.post("/user/saveShippingAddress", {
        userId: user.id,
        shippingAddress: {
          address,
          street,
          mobileNumber,
          email,
          pincode,
          landmark,
          area,
        },
      });
      console.log(response, "resa");
      if (response.ok) {
        setFormData({
          address: "",
          street: "",
          mobileNumber: "",
          email: "",
          area: "",
          pincode: "",
          landmark: "",
        });
        setIsOpen(false);
        toast.success("Address added successfully!");
      } else {
        toast.error("An error occurred while saving the address.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleInputNumber = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    e.target.value = inputValue;
  };
  return (
    <>
      <p className="mb-4">Please fill in the fields below : </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-2 gap-2 relative">
          <InputField
            id="address"
            label="Address"
            value={formData.address}
            onChange={handleInputChange}
            error={errors.address}
            placeholder=" "
          />
          <InputField
            id="street"
            label="Street"
            value={formData.street}
            onChange={handleInputChange}
            error={errors.street}
            placeholder=" "
          />
        </div>

        <InputField
          id="mobileNumber"
          label="Phone Number"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          error={errors.mobileNumber}
          maxLength={10}
          onInput={handleInputNumber}
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
          id="landmark"
          label="Landmark (Optional)"
          value={formData.landmark}
          onChange={handleInputChange}
          placeholder=" "
        />
        <div className="mb-4 grid grid-cols-2 gap-2 relative">
          <InputField
            id="area"
            label="area"
            value={formData.area}
            onChange={handleInputChange}
            error={errors.area}
            placeholder=" "
          />
          <InputField
            id="pincode"
            label="PIN Code"
            value={formData.pincode}
            onChange={handleInputChange}
            error={errors.pincode}
            maxLength={6}
            onInput={handleInputNumber}
            placeholder=" "
          />
        </div>

        <button
          className="bg-red-500 text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ADD A NEW ADDRESS
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddressForm;