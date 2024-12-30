import Link from "next/link";
import React from "react";

const BlogCard = ({ blogData }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <div className="relative">
        <Link href={`/blogs/${blogData?._id}`}>
          <div className="h-72 overflow-hidden">
            <img
              className="w-full h-full object-fill"
              src={blogData?.image[0]}
              alt="blog-card-image"
            />
          </div>
        </Link>

        <div className="text-xs absolute top-0 right-0 bg-[#ed1d24] rounded-md px-4 py-2 text-white mt-3 mr-3">
          Blog
        </div>
      </div>
      <div className="p-4 mb-auto">
        <Link
          href={`/blogs/${blogData?._id}`}
          className="font-medium text-lg hover:text-red-400 transition duration-500 ease-in-out inline-block mb-2"
        >
          {blogData?.heading}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
