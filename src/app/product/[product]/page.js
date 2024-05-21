"use client";
import AddtoCartBtn from "@/components/Button/AddtoCartBtn";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ReviewSection } from "@/components/ReviewSection/ReviewSection";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper/Wrapper";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/cart/cartSlice";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import apiClient from "@/api/client";
import useAuth from "@/auth/useAuth";
import ProductReview from "@/components/Account/ProductReview";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const relproducts = [
  {
    id: 0,
    name: "Moroccan Argan Conditioner For Dry Hair",
    price: "100",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: ["https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"],
    slug: "morocacan-argan-conditioner-dry-hair",
  },
  {
    id: 1,
    name: "Red Onion Hair Shampoo, 300m",
    price: "200",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: [
      "https://files.stbotanica.com/site-images/400x400/fc4de260-1fbf-11ec-83b7-c7f6905fb422.jpg",
    ],
  },
  {
    id: 3,
    name: "GO Colored Purple Hair Conditioner 200ml",
    price: "300",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: [
      "https://files.stbotanica.com/site-images/400x400/7c4ecb10-1fab-11ec-9d44-3d19798b1975.jpg",
    ],
  },
  {
    id: 4,
    name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
    price: "400",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
  },
  {
    id: 4,
    name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
    price: "400",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
  },
  {
    id: 4,
    name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
    price: "400",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
  },
  {
    id: 4,
    name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
    price: "400",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
  },
  {
    id: 4,
    name: "Vitamin C 20%, E & Hyaluronic Acid Face Serum, 20ml",
    price: "400",
    category: {
      id: 0,
      name: "Skin care",
    },
    image: ["https://files.stbotanica.com/site-images/400x400/STBOT492-1.jpg"],
  },
];

const page = () => {
  const router = useParams();
  // console.log(router, "ro");
  const productId = router.product;

  const [product, setProduct] = useState();

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const { user } = useAuth();
  // console.log(user, "userr");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiClient.get(`/product/get-by-id`, {
          productId,
        });
        console.log(response, "res");
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  console.log(product, "products");

  const notify = () => {
    // dispatch(add({ product: products[0], quantity }));
    dispatch(add({ product, quantity }));
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section className="pt-5 pb-10">
      <ToastContainer />
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
              {/* mobile images  */}
              {/* <div className="mt-5 w-full object-contain relative block md:hidden ">
                <Image
                  src="https://hellobody.eu/cdn/shop/products/HB_Cocos-Fresh_1530x2040px.jpg?v=1681475509&width=1206"
                  width={473}
                  height={290}
                  priority
                  alt=""
                />
                <div className="bg-accent absolute top-3 left-3 px-2 py-1 rounded-sm">
                  <p className="text-sm font-medium text-white">Top Seller</p>
                </div>
              </div> */}
            </div>

            {/* add to cart  */}
            <div className="order-1  md:px-0">
              <p className="text-sm text-gray-500 mb-2  md:mt-2 md:text-md">
                MRP INCLUSIVE OF ALL TAXES
              </p>
              <p className="text-3xl mt-2 mb-2 font-semibold hidden md:block md-6 ">
                ₹ {product?.sell_price}
                <span className="text-sm ml-1 font-medium ">
                  Size : {product?.size?.name}
                </span>
              </p>
              {/* counter  */}
              <div className="md:flex md:w-full md:h-12 md:justify-between">
                <div class="py-2 px-2      inline-block bg-white border border-gray-200 rounded-lg">
                  <div class="flex items-center justify-between  gap-x-1.5">
                    <button
                      onClick={() => handleQuantity("dec")}
                      type="button"
                      class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-input-number-decrement=""
                    >
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <input
                      class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                      type="text"
                      value={quantity}
                      data-hs-input-number-input=""
                    />
                    <button
                      onClick={() => handleQuantity("inc")}
                      type="button"
                      class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-input-number-increment=""
                    >
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <AddtoCartBtn
                  btnStyles="btn btn-primary w-full   mt-2 md:mt-0 sm:w-3/4  md:6 rounded-md"
                  textStyles="text-md font-regular"
                  onClick={() => notify()}
                />
              </div>
            </div>

            {/* details */}

            <div className="mt-5 md:mt-5  bg-detailsBg py-5 md:p-1 md:bg-transparent order-2 md:order-1 md:w-[90%]  md:text-sm ">
              <div className="mb-2">
                <p className="text-md   md:text-md">Product Details</p>

                <div dangerouslySetInnerHTML={{ __html: product?.details }} />
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: product.description }} /> */}
              {/* <ul className="md:text-md text-gray-500 ">
                <li className="text-md mt-1 flex flex-row mb-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0713/4140/8532/files/Vector_15.svg"
                    className="mr-2 h-4 w-4 mt-1"
                  />
                  <p className="leading-7">
                    Gently removes excess sebum and daily makeup
                  </p>
                </li>
                <li className="text-md mt-1 flex flex-row mb-2 ">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0713/4140/8532/files/Vector_15.svg"
                    className="mr-2 h-4 w-4 mt-1"
                  />
                  <p className="leading-7">
                    Contains natural mild cleansing agents like coco-glucoside
                    and sodium cocoyl glutamate
                  </p>
                </li>
                <li className="text-md mt-1 flex flex-row mb-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0713/4140/8532/files/Vector_15.svg"
                    className="mr-2 h-4 w-4 mt-1"
                  />
                  <p className="leading-7">
                    Glycerin and urea keep the skin moisturised
                  </p>
                </li>
                <li className="text-md mt-1 flex flex-row mb-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0713/4140/8532/files/Vector_15.svg"
                    className="mr-2 h-4 w-4 mt-1"
                  />
                  <p className="leading-7">
                    Glycerin and urea keep the skin moisturised
                  </p>
                </li>
              </ul> */}
              <div className="mb-2">
                <p className="text-md md:text-md">Product Description</p>

                <div
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                />
              </div>

              <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="text-sm font-poppins lg:text-md font-medium"
                  >
                    Application
                  </AccordionHeader>
                  <AccordionBody className="text-sm font-poppins lg:text-md leading-7">
                    In the morning and evening, apply the foam to wet skin and
                    massage your face and neck, using circular motions. Rinse
                    with warm water and wipe your face gently.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="text-sm font-poppins lg:text-md font-medium"
                  >
                    Why it works?
                  </AccordionHeader>
                  <AccordionBody className="text-sm font-poppins lg:text-md leading-7">
                    Our cleansing foam with a creamy texture gently cleanses
                    your face deeply. Composed of cleansing agents that are
                    particularly effective and gentle on skin, ridding it of
                    impurities and excess sebum without drying it out.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="text-sm font-poppins lg:text-md font-medium"
                  >
                    Ingredients
                  </AccordionHeader>
                  <AccordionBody className="text-sm font-poppins lg:text-md leading-7">
                    KEY INGREDIENTS Glycerin: moisturising properties, helps to
                    strengthen the skin's protective barrier. Coco-glucoside: a
                    natural mild cleanser. Peat extract: purifies the skin.
                    Aqua, Sodium Cocoamphoacetate, Coco-Glucoside, Glycerin,
                    Lauryl Glucoside, Parfum (natural), Sodium Chloride, Sodium
                    Cocoyl Glutamate, Sodium Lauryl Glucose Carboxylate, Lactic
                    Acid, Hydroxypropyl Oxidized Starch PG-Trimonium Chloride,
                    Potassium Sorbate, Sodium Benzoate, Starch
                    Hydroxypropyltrimonium Chloride, Levulinic Acid, Panthenol,
                    Allantoin, Sodium Levulinate, Isopropyl Alcohol, Sodium
                    Lactate, Urea, Moor (Peat) Extract, Sodium Carbonate, Cocoyl
                    Proline, Rosa Canina Extract*, P-Anisic Acid. * Organic
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={relproducts} />
        <div>
          <ReviewSection reviews={product?.reviews} />
        </div>
      </Wrapper>
    </section>
  );
};

export default page;
