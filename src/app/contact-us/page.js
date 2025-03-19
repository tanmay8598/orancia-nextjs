"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const ContactUsPage = () => {
  const router = useRouter();
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    const nameRegex = /^[A-Za-z\s]*$/;

    if (nameRegex.test(value)) {
      setFormData((prev) => ({ ...prev, name: value }));
    }
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const phoneRegex = /^[0-9]*$/; // Allows only numeric values

    if (phoneRegex.test(value)) {
      setFormData((prev) => ({ ...prev, phone: value }));
    }
  };

  // email js
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    } else if (!validateName(formData.name)) {
      newErrors.name = "Name should contain only letters.";
    }
    if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address.";

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Please enter exactly 10 digits.";
    }

    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const serviceId = "service_bemimfu";
      const templateId = "template_mzjkisy";
      const publicKey = "RdiwV32iaxKKxW4Hr";

      const templateParams = {
        from_name: formData.name,
        user_email: formData.email,
        user_mobile: formData.phone,
        to_name: "Orancia",
        message: formData.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          toast.success("Email sent successfully!");
          setTimeout(() => {
            router.push("/");
          }, 1000);
          setFormData(initialFormData);
        })
        .catch((error) => {
          console.error("Error sending email", error);
          toast.error("Email not sent");
        });
    }
  };

  return (
    <>
      <div className="bg-gray-50 py-10 lg:py-16 px-6 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-lg lg:text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Send your queries and other concerns to us. We’ll respond to them as
            soon as possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Write to us
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleNameChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone/Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Your Phone Number"
                    maxLength="10"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary-dark transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                PinakinShine Ecom Pvt. Ltd.
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Address:</strong>
                <br />
                D-5/614, Vikas Khand 5, Gomti Nagar, Lucknow-226010
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Phone/Mobile:</strong> 9005345980
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> support@pinakinshine.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default ContactUsPage;
