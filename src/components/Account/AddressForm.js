import React, { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useRouter } from "next/navigation";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import LogoInformation from "./LogoInformation";

const AddressForm = ({ setIsLogin, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    fName: "",
    last_name: "",
    // plan: "",
    email: "",
    phone_number: "",
    streetName: "",
    city: "",
    pin_code: "",
    landmark: "",
    // gender: "",
    state: "",
    // isDefault: false,
  });
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    fName: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),
    last_name: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters"),
    // email: Yup.string().required("Email is required"),
    phone_number: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits"),
    streetName: Yup.string().required("Full Address is required"),
    city: Yup.string().required("City is required"),
    pin_code: Yup.string()
      .required("Pin Code is required")
      .matches(/^\d{6}$/, "Pin Code must be exactly 6 digits"),
    // gender: Yup.string().required("gender is required"),
    state: Yup.string().required("State is required"),
    // plan: Yup.string().required("Plan is required"),
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
      console.log("Form data:", formData);
      setFormData({
        fName: "",
        last_name: "",
        // plan: "",
        phone_number: "",
        streetName: "",
        city: "",
        pin_code: "",
        landmark: "",
        // gender: "",
        state: "",
        // isDefault: false,
      });
      toast.success("Form submitted successfully!");
      setIsOpen(false);
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
      <p className="mb-4">Please fill in the fields below : </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-2 gap-2 relative">
          <InputField
            id="fName"
            label="First name"
            value={formData.fName}
            onChange={handleInputChange}
            error={errors.fName}
            placeholder=" "
          />
          <InputField
            id="last_name"
            label="Last name"
            value={formData.last_name}
            onChange={handleInputChange}
            error={errors.last_name}
            placeholder=" "
          />
        </div>

        <InputField
          id="phone_number"
          label="Phone Number"
          value={formData.phone_number}
          onChange={handleInputChange}
          error={errors.phone_number}
          maxLength={10}
          onInput={handleInputNumber}
          placeholder=" "
        />
        <InputField
          id="streetName"
          label="Full Address"
          value={formData.streetName}
          onChange={handleInputChange}
          error={errors.streetName}
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
            id="city"
            label="City"
            value={formData.city}
            onChange={handleInputChange}
            error={errors.city}
            placeholder=" "
          />
          <InputField
            id="pin_code"
            label="PIN Code"
            value={formData.pin_code}
            onChange={handleInputChange}
            error={errors.pin_code}
            maxLength={6}
            onInput={handleInputNumber}
            placeholder=" "
          />
        </div>
        {/* <SelectField
          id="gender"
          label="gender"
          value={formData.gender}
          onChange={handleInputChange}
          error={errors.gender}
        >
          <option value="">Select a gender...</option>
          <option value="India">Male</option>
          <option value="India">Female</option>
          <option value="India">Other</option>
        </SelectField> */}
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
        {/* <SelectField
          id="plan"
          label="plan"
          value={formData.plan}
          onChange={handleInputChange}
          error={errors.plan}
        >
          <option value="">Select a plan...</option>
          <option value="India">Plan A</option>
          <option value="India">Plan B</option>
          <option value="India">Plan C</option>
        </SelectField> */}
        {/* <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isDefault"
            checked={formData.isDefault}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label htmlFor="isDefault">Set as default</label>
        </div> */}

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
