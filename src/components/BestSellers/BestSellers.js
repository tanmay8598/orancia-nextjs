"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BestSellerCarousel from "./BestSellerCarousel";
import apiClient from "@/api/client";
import Loader from "../loader/Loader";

const BestSellers = () => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    try {
      const response = await apiClient.get("product/get");

      if (response.ok) {
        setProduct(response.data.products);
      } else {
        setError(response.status);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-3xl px-4 pb-4 md:py-10">
        <p className="  font-semibold text-center md:text-4xl mb-11 mt-11">
          Best Sellers
        </p>

        <BestSellerCarousel products={product} />

        <div className="my-8">
          <Link href="/best-sellers">
            <button className="btn btn-accent rounded-lg mx-auto mt-2 sm:mt-8">
              See all
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
