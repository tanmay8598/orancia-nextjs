import React from "react";

const BlogBanner = ({ title, subtitle }) => {
  return (
    <div className="bg-white pt-4 pb-4">
      <h1 className="text-red-500 text-3xl font-cursive">{title}</h1>
      <p className="text-black text-xl font-bold">{subtitle}</p>
    </div>
  );
};

export default BlogBanner;
