import React from "react";
import ChildCard from "./ChildCard";

const WhoWeAreCard = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-3xl bg-red-100  p-16 ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  ">
          <div className="grid grid-cols-1">
            <ChildCard
              hedding="Our Vision"
              para="Bring inspiration and joy to people, everywhere, everyday."
            />
          </div>
          <div className="grid grid-cols-1">
            <ChildCard
              hedding="Our Mission"
              para="To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCard;
