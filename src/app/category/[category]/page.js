"use client";
import React, { useEffect, useState } from "react";
import Product from "@/components/BestSellers/Product";
import Pagination from "@/components/ShopbyCategory/Pagination";
import ShopSideNav from "@/components/shopPage/ShopSideNav";
import ShopMobNav from "@/components/shopPage/ShopMobNav";
import apiClient from "@/api/client";
import Loader from "@/components/loader/Loader";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import NewProducts from "@/components/BestSellers/NewProducts";

const Page = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [subcat, setSubcat] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minprice, setMinprice] = useState("");
  const [maxprice, setMaxprice] = useState("");
  const [range, setRange] = useState([0, 1000]);
  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState();
  const params = useParams();

 
  useEffect(() => {
    fetchSubcategories();
    fetchProducts();
  }, [params.category, selectedSubcategory, maxprice, minprice, currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/product/get", {
        category: params.category,
        subcategory: selectedSubcategory?._id,
        min: minprice,
        max: maxprice,
      });

      if (response.ok) {
        setProducts(response.data.products);
        setPageSize(response.data.pageCount);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const response = await apiClient.get(
        "/variation/subcategory/get-by-category",
        { catId: params.category }
      );
      if (response.ok) {
        setSubcat(response.data);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 

  const handleSubcategory = (subcategory) => {
    if (selectedSubcategory && selectedSubcategory?._id === subcategory._id) {
      // If the same subcategory is clicked again, uncheck it
      setSelectedSubcategory(null);
    } else {
      // Otherwise, set the new subcategory
      setSelectedSubcategory(subcategory);
    }
  };

  const handleChanges = (event, newValue) => {
    setRange(newValue);
    setMinprice(newValue[0]);
    setMaxprice(newValue[1]);
  };

  // console.log(products);

  return (
    <>
      <div className="  max-w-screen-xl mx-2 p-2 md:pb-16 md:pt-1">
        {isOpenSearch && (
          <ShopMobNav
            isOpen={isOpenSearch}
            setIsOpen={setIsOpenSearch}
            productsss={products}
            subCatgary={subcat}
            selectedSubcategory={selectedSubcategory}
            handleSubcategory={handleSubcategory}
            handleChanges={handleChanges}
            range={range}
          />
        )}

        <div className="w-full max-container h-full flex flex-col md:flex-row pb-10 gap-6 mt-5 justify-between">
          <div className="hidden md:inline-flex h-full w-full md:w-[15%] lg:w-[20%]">
            <ShopSideNav
              productsss={products}
              subCatgary={subcat}
              selectedSubcategory={selectedSubcategory}
              handleSubcategory={handleSubcategory}
              handleChanges={handleChanges}
              range={range}
            />
          </div>

          <div className="w-full md:w-[85%] lg:w-[80%] h-full flex flex-col gap-10 px-0">
            <div className="mb-2">
              <button
                className="block md:hidden ml-1 toggle-button bg-red-500 text-white p-2 rounded-md absolute"
                onClick={() => setIsOpenSearch(!isOpenSearch)}
              >
                {isOpenSearch ? "Hide" : "Show"} Filters
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {products.length === 0 ? (
                <p className="text-center justify-center flex align-middle">
                  No products found
                </p>
              ) : (
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
        {/* <Pagination /> */}

        <Pagination
          count={pageSize}
          page={currentPage}
          siblingCount={1}
          onChange={(e, value) => setCurrentPage(value)}
        />
      </div>
    </>
  );
};

export default Page;
