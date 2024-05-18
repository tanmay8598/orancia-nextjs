import {
  decrementQuantity,
  incrementQuantity,
  remove,
} from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  let total = item.product.price * item.quantity;
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(remove(item.product._id));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.product._id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.product._id));
  };
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      {/* image  */}
      <div className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] relative ">
        <Image
          // src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
          src={item.product.image[0]}
          fill
          priority
          sizes="(max-width: 110px) 110px, 110px"
          className="object-contain"
          alt=""
        />
      </div>

      {/* info  */}
      <div className="w-full max-w-[220px] lg:max-w-[320px] flex flex-col justify-center gap-4 ">
        <div className="flex items-center justify-between">
          <p className="text-xs lg:text-sm font-medium w-3/4">
            {item.product.name}
          </p>
          <button
            className="cursor-pointer"
            // onClick={handleRemoveItemsss}
            onClick={handleRemoveItem}
          >
            <MdClose />
          </button>
        </div>

        {/* qty  */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4 border-2 px-2 rounded-sm">
            <button
              // onClick={() => handleQuantity("dec")}
              onClick={handleDecrement}
            >
              <FaMinus className="text-[10px]" />
            </button>
            <div className="text-sm">{item.quantity}</div>
            <button onClick={handleIncrement}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div>₹{total}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
