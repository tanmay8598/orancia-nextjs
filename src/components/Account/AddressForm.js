import React, { useEffect, useState } from "react";
import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

import InputField from "./InputField";
import { useRouter } from "next/navigation";
import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";
import SelectField from "./SelectField";

const AddressForm = ({ setIsLogin, isOpen, setIsOpen, existingAddress }) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    street: "",
    email: "",
    mobileNumber: "",
    area: "",
    pincode: "",
    landmark: "",
    state: "",
  });
  const [errors, setErrors] = useState({});
  const { user, logIn } = useAuth();

  useEffect(() => {
    if (existingAddress) {
      setFormData(existingAddress);
    }
  }, [existingAddress]);
  const schema = Yup.object().shape({
    address: Yup.string()
      .required("Enter Address is required")
      .min(3, "Enter Address must be at least 3 characters"),
    city: Yup.string()
      .required("Enter City is required")
      .min(3, "Enter City must be at least 3 characters"),
    street: Yup.string()
      .required("Enter Street is required")
      .min(3, "Enter Street must be at least 3 characters"),
    mobileNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    area: Yup.string().required("Area is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .required("Pin Code is required")
      .matches(/^\d{6}$/, "Pin Code must be exactly 6 digits"),
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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

  useEffect(() => {
    if (formData?.pincode?.length === 6) {
      fetchPincodeDetails(formData.pincode);
    }
  }, [formData.pincode]);

  const fetchPincodeDetails = async (pincode) => {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();

      if (data[0].Status === "Success") {
        const postOffice = data[0].PostOffice[0];
        setFormData((prev) => ({
          ...prev,
          city: postOffice.District,
          state: postOffice.State,
          area: postOffice.Name,
        }));
      }
    } catch (error) {
      console.error("Error fetching pincode details:", error);
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
          address: formData.address,
          city: formData.city,
          street: formData.street,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          pincode: formData.pincode,
          landmark: formData.landmark,
          area: formData.area,
          state: formData.state,
        },
      });

      if (response.status === 200) {
        logIn(response.data.token);
        setFormData({
          address: "",
          city: "",
          street: "",
          mobileNumber: "",
          email: "",
          area: "",
          pincode: "",
          landmark: "",
          state: "",
        });

        toast.success("Address added successfully!", {
          id: "address-success-toast",
          duration: 1000,
        });

        // Wait for the toast to be shown before closing the modal
        setTimeout(() => {
          setIsOpen(false);
        }, 1000);
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
      <p className="mb-4">Please fill in the fields below:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-2 gap-2">
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
        <div className="mb-4 grid grid-cols-2 gap-2">
          <InputField
            id="city"
            label="City"
            value={formData.city}
            onChange={handleInputChange}
            error={errors.city}
            placeholder=" "
          />
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
        </div>
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
        <div className="mb-4 grid grid-cols-2 gap-2">
          <InputField
            id="area"
            label="Area"
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
        <SelectField
          id="state"
          label="State"
          value={formData.state}
          onChange={handleInputChange}
          error={errors.state}
        >
          <option value="">Select a state...</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </SelectField>
        <button
          className="bg-red-500 text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ADD A NEW ADDRESS
        </button>
      </form>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Toaster position="bottom-right" />
    </>
  );
};

export default AddressForm;
