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
import WhatClient from "@/components/whatClientSays/WhatClient";

export default function Home() {
  const { user } = useAuth();
  // console.log("user", user);
  return (
    <div>
      {/* <div className="max-container"> */}
      <Banner />
      <Marquees />
      <BestSellers />
      <SingleBanner data="https://discoverpilgrim.com/cdn/shop/files/Buy_any_2_699_App_Banner_1120x876_4.jpg?v=1712293794&width=800" />
      <ShopbyCategory />
      {/* <ImageGallery data={data} /> */}
      {/* <Hero /> */}

      <NewArrivals />

      <WhatClient />
      <DiffrenceBnner />

      <BlogHero />
    </div>
  );
}
