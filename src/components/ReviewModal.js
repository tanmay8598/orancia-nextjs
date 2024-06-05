"use client";
import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";
import { useParams } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReviewModal = ({ isOpen, onClose }) => {
  const router = useParams();
  const productId = router.product;
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    rating: 0,
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    rating: Yup.number().required("Rating is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "rating" ? parseInt(value) : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      const response = await apiClient.post("/product/create-review", {
        productId: productId,
        user,
        rating: formData.rating,
        comment: formData.comment,
      });
      if (response.ok) {
        toast.success("Review submitted successfully!");
        setFormData({
          rating: 0,
          comment: "",
        });
        onClose();
      } else {
        console.error("Failed to submit review");
        toast.error("Failed to submit review. Please try again.");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Error submitting review:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => setFormData({ ...formData, rating: i })}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: "red",
            padding: "5px",
          }}
        >
          {i <= formData.rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-lg font-medium mb-4">Write a Review</h2>

            <div className="flex items-center mb-4">{renderStars()}</div>
            {errors.rating && (
              <div className="text-[#ed1d24] mb-2">{errors.rating}</div>
            )}
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Your Comment"
              className="w-full border rounded-md py-2 px-3 mb-4 resize-none"
              rows="4"
            />
            {errors.comment && (
              <div className="text-[#ed1d24] mb-2">{errors.comment}</div>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Submit
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-[#ed1d24] text-white rounded-md ml-4"
              >
                Close
              </button>
            </div>
          </div>
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
        </div>
      )}
    </>
  );
};

export default ReviewModal;
