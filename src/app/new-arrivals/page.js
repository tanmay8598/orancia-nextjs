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
import BestSideNav from "@/components/BestSellers/BestSideNav";

const Page = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [product, setProducts] = useState([]);
  const [subcat, setSubcat] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minprice, setMinprice] = useState("");
  const [maxprice, setMaxprice] = useState("");
  const [range, setRange] = useState([0, 1000]);
  const params = useParams();
  useEffect(() => {
    fetchSubcategories();
    fetchProducts();
  }, [params.category, selectedSubcategory, maxprice, minprice]);

  // console.log(setMinprice(minprice), "minprice");
  // console.log(setMaxprice(maxprice), "max");

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/product/get", {
        category: params.category,
        subcategory: selectedSubcategory._id,
        min: minprice,
        max: maxprice,
      });
      // console.log(response.data.products, "response");
      if (response.ok) {
        setProducts(response.data.products);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // console.log(product, "product");
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
    // console.log(error, "eeee");
    return <div>Error: {error}</div>;
  }

  const handleSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleChanges = (event, newValue) => {
    setRange(newValue);
    setMinprice(newValue[0]);
    setMaxprice(newValue[1]);
    // console.log(newValue[0]);
    // console.log(newValue[1]);
  };

  return (
    <>
      <div className="  max-w-screen-xl mx-2 p-2 md:pb-16 md:pt-1">
        {isOpenSearch && (
          <ShopMobNav
            isOpen={isOpenSearch}
            setIsOpen={setIsOpenSearch}
            productsss={product}
            subCatgary={subcat}
            selectedSubcategory={selectedSubcategory}
            handleSubcategory={handleSubcategory}
            handleChanges={handleChanges}
            range={range}
          />
        )}

        <div className="w-full max-container h-full flex flex-col md:flex-row pb-10 gap-6 mt-5 justify-between">
          <div className="hidden md:inline-flex h-full w-full md:w-[15%] lg:w-[20%]">
            {/* <ShopSideNav
              productsss={products}
              subCatgary={subcat}
              selectedSubcategory={selectedSubcategory}
              handleSubcategory={handleSubcategory}
              handleChanges={handleChanges}
              range={range}
            /> */}
            <BestSideNav
              productsss={product}
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {product?.length === 0 ? (
                <p className="text-center justify-center flex align-middle">
                  No products found
                </p>
              ) : (
                product?.map((product) => (
                  // <Product key={product.id} product={product} />
                  <NewProducts key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default Page;
