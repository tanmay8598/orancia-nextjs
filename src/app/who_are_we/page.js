"use client";
import Gallery from "@/components/whoweare/Gallery";
import OurValues from "@/components/whoweare/OurValues";
import WhoWeAre from "@/components/whoweare/WhoWeAre";
import WhoWeAreCard from "@/components/whoweare/WhoWeAreCard";
import React from "react";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <WhoWeAreCard />
      <OurValues />
      {/* <Gallery /> */}
    </div>
  );
};

export default page;
