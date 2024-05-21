"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import apiClient from "@/api/client";
import BestSellerCarousel from "../BestSellers/BestSellerCarousel";
const NewArrivals = () => {
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
  return (
    <section>
      <div className="mx-auto max-w-screen-3xl px-4 py-10">
        <h3 className="h3  text-center md:text-4xl mb-11 mt-11">
          New Arrivals
        </h3>

        <p className="text-center mb-[20px] ">
          The World's Premium Brands In One Destination
        </p>
        <BestSellerCarousel products={product} />

        <Link href="/new-arrivals">
          <button className="btn btn-accent rounded-lg mx-auto mt-8">
            See all
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
