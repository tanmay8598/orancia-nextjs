import Link from "next/link";
import Image from "next/image";
import React from "react";

const BlogCard = ({ blogData }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Link href={`/blogs/${blogData?._id}`} aria-label={`Read more about ${blogData?.heading}`}>
          <div className="h-72 w-full relative overflow-hidden">
            <Image
              src={blogData?.image[0]}
              alt={blogData?.heading || "Blog Image"}
              fill // Fill the container
              className="object-fit" // Maintain aspect ratio
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
              priority={false} // Lazy load by default
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
          aria-label={`Read more about ${blogData?.heading}`}
        >
          {blogData?.heading}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;