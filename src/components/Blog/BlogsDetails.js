import React from "react";
import BlogCard from "./BlogCard";
import BlogBanner from "./BlogBanner";

const BlogsDetails = () => {
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
          subtitle="Insights and news shaping the future of travel."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-12 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-12 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-12 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
