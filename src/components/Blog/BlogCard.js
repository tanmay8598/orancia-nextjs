import React from "react";

const BlogCard = () => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col">
        <a href="/myblog/myblogDetail/"></a>
        <div className="relative">
          <a href="/myblog/myblogDetail/">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-red-600 rounded-md px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              Blog
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <a
            href="/myblog/myblogDetail/"
            className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            Simplest Salad Recipe ever
          </a>
          <p className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        {/* <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <span
            href="/myblog/myblogDetail/"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <span className="ml-1">6 mins ago</span>
          </span>

          <span
            href="/myblog/myblogDetail/"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <svg
              className="h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            <span className="ml-1">39 Comments</span>
          </span>
        </div> */}
      </div>
    </>
  );
};

export default BlogCard;
