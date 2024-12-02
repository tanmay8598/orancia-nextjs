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
              para="Fostering Customer Trust & loyalty"
            />
          </div>
          <div className="grid grid-cols-1">
            <ChildCard
              hedding="Our Mission"
              para="To delight the customers with our authentic products & services."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCard;
