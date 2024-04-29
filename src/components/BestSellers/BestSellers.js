import Link from "next/link";
import React from "react";
import BestSellerCarousel from "./BestSellerCarousel";

const data = [
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
    name: "Red Onion Hair Shampoo, 300ml",
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

const BestSellers = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-3xl px-4 py-10">
        <h2 className="text-center font-medium">Best Sellers</h2>

        <p className="text-center mb-[30px]">
          The World's Premium Brands In One Destination
        </p>
        <BestSellerCarousel products={data} />

        <Link href="/best-sellers">
          <button className="btn btn-accent mx-auto mt-8">See all</button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
