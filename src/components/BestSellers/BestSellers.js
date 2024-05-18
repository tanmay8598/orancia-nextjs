"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BestSellerCarousel from "./BestSellerCarousel";
import apiClient from "@/api/client";

// const data = [
//   {
//     id: 0,
//     name: "Moroccan Argan Conditioner For  ",
//     price: "100",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: ["https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"],
//     slug: "morocacan-argan-conditioner-dry-hair",
//   },
//   {
//     id: 1,
//     name: "Red Onion Hair Shampoo, 300ml",
//     price: "200",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: [
//       "https://files.stbotanica.com/site-images/400x400/fc4de260-1fbf-11ec-83b7-c7f6905fb422.jpg",
//     ],
//   },
//   {
//     id: 3,
//     name: "GO Colored Purple Hair Conditioner 200ml",
//     price: "300",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: [
//       "https://files.stbotanica.com/site-images/400x400/7c4ecb10-1fab-11ec-9d44-3d19798b1975.jpg",
//     ],
//   },
//   {
//     id: 4,
//     name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
//     price: "400",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
//   },
//   {
//     id: 4,
//     name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
//     price: "400",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
//   },
//   {
//     id: 4,
//     name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
//     price: "400",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
//   },
//   {
//     id: 4,
//     name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
//     price: "400",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
//   },
//   {
//     id: 4,
//     name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
//     price: "400",
//     category: {
//       id: 0,
//       name: "Skin care",
//     },
//     image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
//   },
// ];
const BestSellers = () => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    try {
      const response = await apiClient.get("product/get");
      // console.log(response, "response");
      if (response.ok) {
        setProduct(response.data.products);
      } else {
        setError(response.status);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  // console.log(product, "pro");
  return (
    <section>
      <div className="mx-auto max-w-screen-3xl px-4 py-10">
        {/* <h3 className="text-center text-3xl mb-1 md:text-4xl font-medium"> */}
        <h3 className="h3  text-center md:text-4xl mb-11 mt-11">
          Best Sellers
        </h3>

        <p className="text-center mb-[20px] ">
          The World's Premium Brands In One Destination
        </p>
        <BestSellerCarousel products={product} />

        <Link href="/best-sellers">
          <button className="btn btn-accent rounded-lg mx-auto mt-8">
            See all
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
