"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Parser } from "html-to-react";
import apiClient from "@/api/client";
import Loader from "../loader/Loader";

const BlogContent = ({ blogid }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await apiClient.get(
        `blog/blogbyid/${blogid.blogDetail}`
      );
      console.log(response.data);
      if (response.ok) {
        setData(response?.data);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  return (
    <div className="mx-4 sm:mx-14 max-w-screen-2x1 py-5 px-7 lg:h-full lg:mb-10 lg:mt-5">
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto">
          {data?.image?.[0] ? (
            <Image
              src={data.image[0]}
              alt="logo"
              height={3000}
              width={2000}
              className="w-full md:h-[700px] min-h-[200px]"
            />
          ) : (
            <p>Image not available</p>
          )}
          <h3 className="font-bold text-3x1 1g:text-5xl mt-10">
            {" "}
            {data.heading}
          </h3>
          <div className="mt-2 lg:mt-10 w-auto text-justify fit-img">
            {Parser().parse(data.content)}
          </div>
          {error && <p className="text-red-500">{error}</p>}{" "}
        </div>
      )}
    </div>
  );
};

export default BlogContent;
