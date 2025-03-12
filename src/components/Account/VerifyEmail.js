
import React, { useState } from "react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import InputField from "./InputField";
import LogoInformation from "./LogoInformation";
import apiClient from "@/api/client";
import useAuth from './../../auth/useAuth';

const VerifyEmail = ({ email, setIsOpen, setIsOpen2 }) => {
  const { logIn } = useAuth();

  const [formData, setFormData] = useState({
    otp: "",
  });



  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
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

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      try {
        const response = await apiClient.post(`/user/verify-user-profile`, {
          email: email,
          otp: formData.otp,
        });

				console.log(response)

        if (response.ok) {
          toast.success(response.data.message);
          // setIsOpen(false);

					  setTimeout(() => {
            setIsOpen(false);
            setIsOpen2(false);
            logIn(response.data.token);
          }, 1000);
        } else {
					setIsOpen(false);
					setIsOpen2(false);
          toast.error(response.data.message);
        }
      } catch (error) {
				setIsOpen(false);
				setIsOpen2(false);
        console.error("API Error:", error);
        toast.warning("Failed to verify your email. Please try again.");
      }
    }
  };

  return (
    <>
      <LogoInformation />

      <form onSubmit={handleVerifyEmail}>
        <p className="text-base mb-2 ">
          Please enter the OTP sent to your email
        </p>
        <InputField
          id="otp"
          label="OTP"
          value={formData.otp}
          onChange={handleInputChange}
          error={errors.otp}
          placeholder=" "
        />

        <button
          className="bg-[#ed1d24] text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Verify Otp
        </button>
      </form>

      <Toaster position="bottom-right" />
    </>
  );
};

export default VerifyEmail;
