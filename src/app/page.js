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
import KnowYourIngredients from "./../components/whatClientSays/KnowYourIngredients";
import apiClient from "./../api/client";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bannerImage, setBannerImage] = useState();

  const sigleBannerImage = async () => {
    const response = await apiClient.get(`/variation/bottombanner/list`);

    setBannerImage(response?.data?.banners[0]?.image);
  };

  useEffect(() => {
    sigleBannerImage();
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
      <ShopbyCategory />
      <BestSellers />
      <SingleBanner data={bannerImage} />
      <NewArrivals />
      <WhatClient />
      <DiffrenceBnner />
      <BlogHero />
    </div>
  );
}
