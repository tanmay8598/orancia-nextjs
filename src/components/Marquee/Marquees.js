import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeChild from "./MarqueeChild";
const Marquees = () => {
  return (
    <>
      <Marquee className="gap-3">
        <MarqueeChild title="◉ No Sulphates" />
        <MarqueeChild title="◉ No Phthalates" />
        <MarqueeChild title="◉ No Parabens" />
        <MarqueeChild title="◉ No Minerals Oil" />
        <MarqueeChild title="◉ No Petroleum" />
        <MarqueeChild title="◉ No Harmful Chemicals" />
      </Marquee>
    </>
  );
};

export default Marquees;
