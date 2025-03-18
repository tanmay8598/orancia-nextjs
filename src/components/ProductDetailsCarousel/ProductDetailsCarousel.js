import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Modal from "react-modal";
import { FaSearchPlus } from "react-icons/fa"; // Zoom icon

// Set the app element for react-modal
if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}

const ProductDetailsCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false); // Reset zoom state when closing modal
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed); // Toggle zoom state
  };

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img, index) => (
          <div key={index} onClick={() => openModal(img)}>
            <img
              src={img}
              alt={`Image ${index + 1}`}
              width={1360}
              height={760}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </Carousel>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Zoomed Image"
        className="modal"
        overlayClassName="overlay"
      >
        <div
          className="relative w-full h-full"
          style={{ height: "100vh", width: "100vw" }}
        >
          <div
            className="relative w-full h-full cursor-zoom-in"
            onClick={toggleZoom} // Toggle zoom on click
          >
            <Image
              src={selectedImage}
              alt="Zoomed Image"
              layout="fill"
              objectFit="contain"
              className={`transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"
                }`} // Apply zoom effect
            />
            {/* Zoom icon (visible on hover) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <FaSearchPlus className="text-white text-4xl" />
            </div>
          </div>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-black text-white p-2 rounded-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetailsCarousel;