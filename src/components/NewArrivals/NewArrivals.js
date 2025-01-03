"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import apiClient from "@/api/client";
import BestSellerCarousel from "../BestSellers/BestSellerCarousel";

const NewArrivals = () => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiClient.get(
        "product/share-new-arrival-products"
      );

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
        <p className=" text-2xl font-semibold text-center md:text-4xl mb-11 mt-11">
          New Arrivals
        </p>

        <BestSellerCarousel products={product} type='new-arrivals' />
        <div className="my-8">
          <Link href="/new-arrivals">
            <button className="btn btn-accent rounded-lg mx-auto mt-8">
              See all
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
