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
  console.log(item.product, "item");

  let total = item.product?.sell_price * item.quantity;
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(remove(item.product?._id));
  };
  console.log(item, "item");
  const handleIncrement = () => {
    dispatch(incrementQuantity(item.product?._id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.product?._id));
  };

  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     if (quantity < product?.countInStock.qty) {
  //       setQuantity(quantity + 1);
  //     }
  //     // setQuantity(quantity + 1);
  //   }
  // };
  return (
    <>
      <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
        <div className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] relative p-2 ">
          <Image
            // src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
            src={item.product?.image[0]}
            fill
            priority
            sizes="(max-width: 110px) 110px, 110px"
            className="object-contain"
            alt=""
          />
        </div>

        <div className="w-full max-w-[220px] lg:max-w-[320px] flex flex-col justify-center px-3 gap-4 ">
          <div className="flex items-center justify-between  ">
            <p className="text-xs lg:text-sm font-medium w-3/4">
              {item.product?.name}
            </p>
            <button
              className="cursor-pointer"
              // onClick={handleRemoveItemsss}
              onClick={handleRemoveItem}
            >
              <MdClose />
            </button>
          </div>

          <div className="flex items-center justify-between  ">
            <div className="flex gap-4 border-2 px-2 rounded-sm">
              <button onClick={handleDecrement}>
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
    </>
  );
};

export default CartItem;
