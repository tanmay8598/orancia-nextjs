"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BestSellerCarousel from "./BestSellerCarousel";
import apiClient from "@/api/client";
import { ArrowRightCircleIcon } from "lucide-react";

const BestSellers = () => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiClient.get(
        "product/share-best-seller-products"
      );



      if (response.ok) {
        setProduct(response.data.products);
      } else {
        setError(response.status);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-3xl px-4 pb-4 md:py-10">
        <p className="text-2xl font-semibold text-center md:text-4xl mb-2 md:mb-11 mt-4">
          Best Sellers
        </p>

        <BestSellerCarousel products={product} showType={true} />

        <div className="my-8">
          <Link href="/best-sellers" className="flex flex-row items-center justify-center gap-1">
            {/* <button className="btn btn-accent rounded-lg mx-auto mt-2 sm:mt-8">
              See all
            </button> */}
            <p className="font-medium text-center">VIEW ALL</p>
            <ArrowRightCircleIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
