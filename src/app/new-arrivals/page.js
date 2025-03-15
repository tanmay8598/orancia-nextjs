"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/ShopbyCategory/Pagination";
import apiClient from "@/api/client";
import Loader from "@/components/loader/Loader";
import NewProducts from "@/components/BestSellers/NewProducts";

const Page = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState();

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get(
        "product/share-new-arrival-products",
        {
          pageNumber: currentPage,
        }
      );

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

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-2 md:pb-16 md:pt-1">
        <div className="w-full max-container h-full flex flex-col md:flex-row pb-10 gap-6 mt-5 justify-between">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 justify-center mx-auto">
            {products.length === 0 ? (
              <p className="text-center justify-center flex align-middle">
                No products found
              </p>
            ) : (
              products?.map((product, index) => (
                <NewProducts
                  key={product.id}
                  product={
                    product.productDetails ? product.productDetails : product
                  }
                />
              ))
            )}
          </div>
        </div>

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
