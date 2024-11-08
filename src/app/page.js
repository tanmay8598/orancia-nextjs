"use client";
import useAuth from "@/auth/useAuth";
import Banner from "@/components/Banner/Banner";
import BestSellers from "@/components/BestSellers/BestSellers";
import BlogHero from "@/components/Blog/BlogHero";
import DiffrenceBnner from "@/components/DiffrenceBanner/DiffrenceBnner";
import Heading from "@/components/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Marquees from "@/components/Marquee/Marquees";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import ShopbyCategory from "@/components/ShopbyCategory/ShopbyCategory";
import SingleBanner from "@/components/SingleBanner/SingleBanner";
import Loader from "@/components/loader/Loader";
import WhatClient from "@/components/whatClientSays/WhatClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <Marquees />
      <BestSellers />
      <SingleBanner data="https://discoverpilgrim.com/cdn/shop/files/Buy_Any_3_At_999_Homepage_Desktop_Banner_1920x520_82bb6c8a-800c-481b-8a2c-fdfa2e1315ba.jpg?v=1715843796&width=2000" />
      <ShopbyCategory />
      {/* <ImageGallery /> */}
      {/* <Hero /> */}
      <NewArrivals />
      <WhatClient />
      <DiffrenceBnner />
      <BlogHero />
    </div>
  );
}
