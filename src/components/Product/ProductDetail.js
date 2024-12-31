"use client";
import React, { useState, useEffect } from "react";
import { ReviewSection } from "@/components/ReviewSection/ReviewSection";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper/Wrapper";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/cart/cartSlice";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import apiClient from "@/api/client";
import ProductReview from "@/components/Account/ProductReview";
import PincodeChecker from "@/components/Pincode/PincodeChecker";



import KnowYourIngredients from "../whatClientSays/KnowYourIngredients";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";
import useAuth from "@/auth/useAuth";

const ProductDetail = ({ productId }) => {
    const { user } = useAuth();

    //note* 
    // productId is groupId here in this case

    const [product, setProduct] = useState();
    const [groupProducts, setGroupProducts] = useState();
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    const [products, setProducts] = useState();
    const params = useParams();
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [selectedOffer, setSelectedOffer] = useState();
    const [isDealClicked, setIsDealClicked] = useState(false);
    const [discountedPrice, setDiscountedPrice] = useState(0);

    //sizes
    const [size, setSize] = useState("");
    const [sizes, setSizes] = useState();

    useEffect(() => {
        // fetchProduct();
        fetchSimilarProducts();  //similar product from same category

        fetchProductsByGroupId()
    }, [productId, params.category]);

    const fetchSimilarProducts = async () => {
        try {
            const response = await apiClient.get("/product/get", {
                category: params.category,
            });

            if (response.ok) {
                setProducts(response.data.products);
            } else {
                setError(response.statusText);
            }
        } catch (error) {
            error.message;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        addItemInRecentlyViewed()
        getRecentlyViewedItems();
    }, [product, user])

    // const fetchProduct = async () => {
    //   try {
    //     const response = await apiClient.get(`/product/get-by-id`, {
    //       productId,
    //     });

    //     if (!response.ok) {
    //       setProduct(null);
    //       throw new Error("Failed to fetch product");
    //     }
    //     addItemInRecentlyViewed();
    //     setSize(response.data.size?.name);
    //     setProduct(response.data);

    //     // fetchProductsByGroupId(response.data.groupId);
    //     setLoading(false);
    //   } catch (error) {
    //     setProduct(null);
    //     console.error("Error fetching product:", error);
    //     setLoading(false);
    //   }
    // };

    const addItemInRecentlyViewed = async () => {
        try {
            const response = await apiClient.post(
                `/product/add-item-in-recently-viewed`,
                {
                    userId: user?.id,
                    productId: product?._id,
                }
            );
        } catch (error) {
            console.log("Error occured", error);
        }
    };

    const getRecentlyViewedItems = async () => {

        try {
            const response = await apiClient.get(
                `/product/get-recently-viewed-item`,
                {
                    userId: user?.id,
                }
            );

            setRecentlyViewed(response.data.recentlyViewedItems);
        } catch (error) {
            console.log("Error occured", error);
        }
    };
    // console.log(product)
    const fetchProductsByGroupId = async (groupId) => {
        try {
            const response = await apiClient.get(`/product/get-by-groupid`, {
                groupId: productId,
            });
            setProduct(response.data[0])

            setSize(response.data[0].size?.name);
            if (!response.ok) {
                setProduct(null);
                throw new Error("Failed to fetch product");
            }

            var allSizes = response.data?.map((item) => {
                return item?.size?.name;
            });
            //creating sizes array
            allSizes = [...new Set(allSizes)];
            setSizes(allSizes);

            setGroupProducts(response.data);
            setLoading(false);
        } catch (error) {
            setGroupProducts(null);
            console.error("Error fetching product:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen">
                <Loader />
            </div>
        );
    }

    if (product == null) {
        return (
            <div className="flex flex-1 justify-center items-center h-screen">
                <p className="text-center text-xl text-gray-500">Product not found</p>
            </div>
        );
    }

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            if (quantity < product?.countInStock.qty) {
                setQuantity(quantity + 1);
            }
        }
    };

    const notify = () => {
        dispatch(add({ product, quantity }));

        toast.success("Success. Check your cart!", {
            id: "cart-success-toast",
        });
    };

    const handleOfferSelection = (quantitys, discount) => {
        quantitys = Number(quantitys);

        const newDiscountedPrice = product.sell_price * (1 - discount / 100);
        setDiscountedPrice(newDiscountedPrice);
        setSelectedOffer(quantitys);
    };
    const handleButtonClick = () => {
        if (selectedOffer) {
            dispatch(add({ product, quantity: selectedOffer, discountedPrice }));
            setIsDealClicked(true);
            toast.success("Success. Check your cart!", {
                id: "cart-success-toast",
            });
        } else {
            toast.error("Please select an offer!");
        }
    };

    const handleChangeSize = (e) => {
        setSize(e.target.value);
        const xyz = e.target.value;

        const product1 = groupProducts?.filter(function (el) {
            return el.size?.name === xyz;
        });
        if (product1) {
            setProduct(product1[0]);
        }
    };

    return (
        <section className="pt-10 pb-10">
            <Toaster position="bottom-right" />
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* desktop image  */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={product?.image} />
                    </div>

                    {/* right  */}
                    <div className="flex flex-col md:w-[50%]">
                        <div className="   md:px-0">
                            {/* links */}

                            <div className="flex flex-row items-center mb-2  ">
                                <p className="text-sm underline">Home</p>
                                <p className="px-1">/</p>
                                <p className="text-sm underline">{product?.category?.name}</p>
                                <p className="px-1">/</p>
                                <p className="text-sm underline">
                                    {product?.subcategory?.name}
                                </p>
                            </div>
                            <p className="text-2xl font-semibold md:text-4xl">
                                {product?.name}
                            </p>
                            <ProductReview
                                initialRating={product?.rating}
                                initialTotalReviews={product?.reviews?.length}
                            />
                            <p className="text-3xl mt-2 font-medium md:hidden">
                                ₹ {product?.sell_price}
                            </p>
                        </div>

                        {/* add to cart  */}
                        <div className="order-1  md:px-0">
                            <p className="text-sm text-gray-500 mb-2  md:mt-2 md:text-md">
                                MRP INCLUSIVE OF ALL TAXES
                            </p>
                            <p className="text-3xl mt-2 mb-2 font-semibold hidden md:block md-6 ">
                                ₹ {product?.sell_price}
                            </p>

                            <div className="mb-4 lg:w-[50%]">
                                {sizes?.length > 0 && sizes[0] !== undefined ? (
                                    <>
                                        <label
                                            htmlFor="size-select"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Select size
                                        </label>
                                        <select
                                            id="size-select"
                                            name="size"
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            onChange={handleChangeSize}
                                        >
                                            {sizes.map((size) => (
                                                <option value={size} key={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>
                                    </>
                                ) : (
                                    <p className="text-gray-500">No sizes available</p>
                                )}
                            </div>

                            {/* counter  */}
                            <div className="py-2 px-2 mt-2  sm:mt-1    inline-block bg-white border border-gray-200 rounded-lg">
                                <div className="flex items-center  w-[150px] justify-between  gap-x-1.5">
                                    <button
                                        onClick={() => handleQuantity("dec")}
                                        type="button"
                                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                        data-hs-input-number-decrement=""
                                    >
                                        <svg
                                            className="flex-shrink-0 size-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                        </svg>
                                    </button>
                                    <input
                                        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                                        type="text"
                                        readOnly
                                        value={quantity}
                                        data-hs-input-number-input=""
                                    />
                                    <button
                                        onClick={() => handleQuantity("inc")}
                                        type="button"
                                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                        data-hs-input-number-increment=""
                                    >
                                        <svg
                                            className="flex-shrink-0 size-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex md:w-full md:h-12 md:justify-between my-4 sm:mt-0">
                                {product?.countInStock?.qty === 0 ? (
                                    <div className="md:flex md:w-full md:h-12 md:justify-between mt-6">
                                        {/* <div className="btn btn-primary w-full mt-2 md:mt-0 sm:w-3/4 md:6 rounded-md"> */}
                                        <div className="btn btn-primary   mt-6 md:mt-0 sm:w-3/4 md:6 rounded-md w-full text-center bg-red-200 text-white py-2  font-semibold   hover:bg-red-300 focus:scale-95 transition-all">
                                            Out of Stock
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mt-4 w-full">
                                        <button
                                            onClick={() => notify()}
                                            className={`bg-[#ed1d24] text-white w-full py-3 rounded-md `}
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                )}
                            </div>
                            <PincodeChecker />
                            {/* offer card */}
                            <div className="my-5">
                                <div className="pt-4">
                                    <h5 className="text-lg font-bold mb-2">
                                        Buy more, save more!
                                    </h5>
                                    <p className="text-gray-700">
                                        Don't miss out on these amazing deals!
                                    </p>
                                </div>
                                <div className="my-2">
                                    {product?.discount.map((offer) => {
                                        const discountedPrice =
                                            product?.sell_price * (1 - offer.discount / 100);
                                        return (
                                            <div
                                                key={offer._id}
                                                className="my-5 p-3 border border-gray-400 rounded-lg"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <div className="px-2">
                                                            <input
                                                                type="radio"
                                                                name="offer"
                                                                value={offer.quantity}
                                                                // onChange={() =>
                                                                //   handleOfferSelection(offer.quantity)

                                                                // }
                                                                onChange={() =>
                                                                    handleOfferSelection(
                                                                        offer.quantity,
                                                                        offer.discount
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <div className="font-semibold">
                                                            Buy {offer?.quantity} save {offer?.discount}%
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <del>₹ {product?.sell_price}</del>
                                                        <div className="font-semibold">
                                                            ₹ {discountedPrice.toFixed(2)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="py-2">
                                    <button
                                        onClick={handleButtonClick}
                                        className={`bg-[#ed1d24] text-white w-full py-3 rounded-md ${!selectedOffer || isDealClicked
                                            ? "cursor-not-allowed opacity-50"
                                            : ""
                                            }`}
                                        disabled={!selectedOffer || isDealClicked}
                                    >
                                        {isDealClicked ? "Deal grabbed!" : "Grab this deal"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className="mt-5 md:mt-5  bg-detailsBg py-5 md:p-1 md:bg-transparent gap-3 order-2  md:order-1 md:w-[90%]  md:text-sm ">
                    <div className="mb-8 bg-[#FFF6F6] rounded border-blue-gray-100 spa p-4">
                        <p className="text-xl font-semibold mb- md:text-md">
                            Product Description
                        </p>
                        <span className="text-sm   font-medium ">
                            Size : {product?.size?.name ? product?.size?.name : "Not available"}
                        </span>

                        <div className="">
                            <div
                                dangerouslySetInnerHTML={{ __html: product?.description }}
                                className="[&_*]:m-0 [&_*]:p-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-2"
                            />
                        </div>
                    </div>
                    <div className="mb-8 bg-[#FFF6F6] rounded border-blue-gray-100 p-4">
                        <p className="text-xl font-semibold mb-2 md:text-md">
                            Product Details
                        </p>
                        <div className=" ">
                            <div
                                dangerouslySetInnerHTML={{ __html: product?.details }}
                                className="[&_*]:m-0 [&_*]:p-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-2"
                            />
                        </div>
                    </div>
                    {product?.ingredients && (
                        <div className="mb-8 bg-[#FFF6F6] rounded border-blue-gray-100 p-4">
                            <p className="text-xl font-semibold mb-2 md:text-md">
                                Product Ingredients
                            </p>
                            <div className=" ">
                                <div
                                    dangerouslySetInnerHTML={{ __html: product?.ingredients }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <RelatedProducts products={products} />
                <KnowYourIngredients />

                {recentlyViewed?.length > 0 && (
                    <RecentlyViewed products={recentlyViewed} />
                )}

                <div>
                    <ReviewSection reviews={product?.reviews} />
                </div>
            </Wrapper>
        </section>
    );
};

export default ProductDetail;
