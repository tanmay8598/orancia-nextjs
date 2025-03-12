import React, { useState } from "react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import InputField from "./InputField";
import LogoInformation from "./LogoInformation";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import ForgetPassword from "./ForgetPassword";
import useAuth from "@/auth/useAuth";
import apiClient from "@/api/client";
import VerifyEmail from './VerifyEmail';

const LoginForm = ({ setIsRegistering, isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false);
  const [showVerifyEmail, setShowVerifyEmail] = useState(false); 
  const [registeredEmail, setRegisteredEmail] = useState(""); 


  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const { logIn } = useAuth();

  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;
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

        console.log(response)


     
          if (response.data.isEmailVerfied === true) { 
            toast.success("Login successful!", {
              id: "login-success-toast",
              duration: 1000,
            });
            logIn(response.data.token);
        
            setTimeout(() => {
              setIsOpen(false);
            }, 1000);
          } else if (response.data.isEmailVerfied === false) {
          
            setRegisteredEmail(response.data.email); 
            setShowVerifyEmail(true);
            toast.error(response.data.message);
          }
        else {
          toast.error(response.data.message || "Login failed. Please try again.");
          console.error("Login failed:", response.data);
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
      {
      forgetPasswordOpen ? (
        <ForgetPassword
          isOpen={forgetPasswordOpen}
          setIsOpen={setForgetPasswordOpen}
        />
      ) : 
      showVerifyEmail ? (
        <VerifyEmail
          isOpen={showVerifyEmail}
          email={formData.email}
          setIsOpen={setShowVerifyEmail}
          setIsOpen2={setIsOpen}

        />
      ) : 
      (
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
            <div className="relative">
              <InputField
                id="password"
                label="Password"
                type={isPasswordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                placeholder=" "
              />
              <button
                type="button"
                className="absolute -inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <BiSolidHide className="text-lg" />
                ) : (
                  <BiSolidShow className="text-lg" />
                )}
              </button>
            </div>
            <p
              className="text-sm mb-2 mt-4 underline cursor-pointer"
              onClick={() => setForgetPasswordOpen(true)}
            >
              Forgot password?
            </p>
            <button
              className="bg-[#ed1d24] text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={() => setIsOpen(true)}
            >
              Login
            </button>
          </form>
        </>
      )}
      <Toaster position="bottom-right" />
    </>
  );
};

export default LoginForm;
