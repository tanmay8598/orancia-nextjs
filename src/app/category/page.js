"use client";
import apiClient from "@/api/client";
import BlogBanner from "@/components/Blog/BlogBanner";
import ShopCategoryCard from "@/components/ShopbyCategory/ShopCategoryCard";
import Loader from "@/components/loader/Loader";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/variation/category/get");
        if (response.ok) {
          const data = response.data;
          setCategories(data);
        } else {
          console.error("Failed to fetch categories:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="pt-5 max-w-screen-xl mx-auto p-5 sm:p-10 md:pb-16 md:pr-16 md:pl-16 md:pt-1">
        <BlogBanner
          title="SHOP BY CATEGORY"
          // subtitle="Insights and news shaping the future of travel."
        />
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10  lg:mt-5 px-3 lg:px-0 place-items-center place-content-center">
            <ShopCategoryCard categories={categories} />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
