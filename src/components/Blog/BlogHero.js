"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogBanner from "./BlogBanner";
import apiClient from "@/api/client";
import Loader from "../loader/Loader";
import { Pagination } from "@mui/material";
import Link from "next/link";

const BlogHero = () => {
  const [error, setError] = useState();
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  useEffect(() => {
    getAllBlog();
  }, [currentPageNo]);

  const getAllBlog = async () => {
    try {
      const response = await apiClient.get("/blog", {
        pageNumber: currentPageNo,
      });
      if (response.ok) {
        setBlogList(response?.data);
      } else {
        setError(response.status);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const allblogs = blogList.blogs;
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  console.log(blogList, "blo");

  return (
    <div class="  max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div class="border-b mb-5 flex justify-between text-sm">
        <div class="text-red-600 flex items-center pb-2 pr-2 border-b-2 border-red-600 uppercase">
          <a href="#" class="font-semibold inline-block">
            Blog
          </a>
        </div>

        {/* <a href="myblog">See All</a> */}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {allblogs && allblogs.length > 0 ? (
          allblogs
            .slice(0, 3)
            .map((blogData) => (
              <BlogCard key={blogData._id} blogData={blogData} />
            ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
      <Link href="/myblog">
        <button className="btn btn-accent rounded-lg mx-auto mt-8">
          See all
        </button>
      </Link>
    </div>
  );
};

export default BlogHero;
