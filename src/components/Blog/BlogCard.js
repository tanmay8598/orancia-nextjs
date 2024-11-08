import Link from "next/link";
import React from "react";

const BlogCard = ({ blogData }) => {
  const short =
    blogData?.content.length > 200
      ? blogData?.content.slice(0, 200) + "..."
      : blogData?.content;

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <div className="relative">
          <Link href={`/blogs/${blogData?._id}`}>
            <img
              className="w-full"
              src={blogData?.image[0]}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </Link>
          <Link href="#!">
            <div className="text-xs absolute top-0 right-0 bg-[#ed1d24] rounded-md px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {/* {blogData?.heading} */}
              Blog
            </div>
          </Link>
        </div>
        <div className="p-4 mb-auto">
          <Link
            href={`/blogs/${blogData?._id}`}
            className="font-medium text-lg  hover:text-red-400 transition duration-500 ease-in-out inline-block mb-2"
          >
            {/* {blogData?.mtitle} */}
            {blogData?.heading}
          </Link>

          {/* <p dangerouslySetInnerHTML={{ __html: short }}></p> */}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
