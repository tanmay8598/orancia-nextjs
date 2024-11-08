"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogBanner from "./BlogBanner";
import apiClient from "@/api/client";
import Loader from "../loader/Loader";
import { Pagination } from "@mui/material";

const BlogsDetails = () => {
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

  return (
    <>
      <div
        className="  pt-5   max-w-screen-xl mx-auto p-5 sm:p-10 
      md:pb-16
      md:pr-16
      md:pl-16
      md:pt-1

      "
      >
        <BlogBanner
          title="Blog"
          // subtitle="Insights and news shaping the future of travel."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-12 gap-10">
          {allblogs && allblogs.length > 0 ? (
            allblogs.map((blogData) => (
              <BlogCard key={blogData._id} blogData={blogData} />
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
        <Pagination
          count={blogList.pageCount}
          color="primary"
          onChange={(e, value) => setCurrentPageNo(value)}
        />
      </div>
    </>
  );
};

export default BlogsDetails;
