import Banner from "@/components/Banner/Banner";
import BestSellers from "@/components/BestSellers/BestSellers";
import BlogHero from "@/components/Blog/BlogHero";
import DiffrenceBnner from "@/components/DiffrenceBanner/DiffrenceBnner";
import Marquees from "@/components/Marquee/Marquees";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import ShopbyCategory from "@/components/ShopbyCategory/ShopbyCategory";
import SingleBanner from "@/components/SingleBanner/SingleBanner";
import WhatClient from "@/components/whatClientSays/WhatClient";


export default function Home() {

  return (
    <div>
      <Banner />
      <Marquees />
      <ShopbyCategory />
      <BestSellers />
      <SingleBanner />
      <NewArrivals />
      <WhatClient />
      <DiffrenceBnner />
      <BlogHero />
    </div>
  );
}
