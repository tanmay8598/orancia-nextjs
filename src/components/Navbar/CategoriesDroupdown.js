import apiClient from "@/api/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CategoriesDroupdown = () => {
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/variation/category/get");

      if (response.ok) {
        setCategories(response.data);
      } else {
        //   console.log(error)
        setError(error.status);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="absolute top-0 -left-[502px] w-screen transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
        <div className="relative top-[47px] p-6 bg-white  shadow-xl w-full">
          <div className="relative z-10">
            <div className="grid grid-cols-4 gap-6 py-6 pl-20 pr-10">
              {categories.map((catData) => (
                <>
                  <div key={catData._id}>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <div className="flex w-full items-center">
                          <div
                            className="h-[40px] w-[40px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-md bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${catData.image})`,
                            }}
                          ></div>

                          <div className="flex-1">
                            <Link
                              // href="#"
                              href={`/category/${catData._id}`}
                              className="block p-2 ml-2 rounded-lg hover:bg-red-400 hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-white"
                            >
                              {catData.name}
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesDroupdown;
