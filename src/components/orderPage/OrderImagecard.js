import Image from "next/image";
import React from "react";

const OrderImagecard = ({ item }) => {
  return (
    <>
      <div className="flex justify-between items-center pb-4 ">
        <Image
          src={item.product.image[0]}
          width={80}
          height={80}
          alt="Picture of the author"
          className="object-cover object-center  "
        />
        <div className="flex-1 ml-4">
          <p className="text-base font-semibold">{item.product.name}</p>
        </div>
        <div className="flex-1 ml-4">
          <p className="text-sm text-gray-500">
            Price: ₹ {item.product.price}*{item.quantity}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderImagecard;
