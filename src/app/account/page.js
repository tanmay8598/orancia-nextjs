import React from "react";

const page = () => {
  return (
    <div className="w-full max-container h-full flex pb-20 gap-10 mt-10">
      {/* nav top  */}
      <div className="flex items-center gap-5 mx-auto">
        <p>Orders</p>
        <p>Address</p>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default page;
