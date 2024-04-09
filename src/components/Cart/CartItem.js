import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const CartItem = ({ item }) => {
  var name = "Moroccan Argan Conditioner For Dry Hair";
  const short = name.replace(/(.{27})..+/, "$1");
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      {/* image  */}
      <div className="w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] relative ">
        <Image
          src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
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
          <p className="text-xs lg:text-sm font-medium w-3/4">{short}</p>
          <button>
            <MdClose />
          </button>
        </div>

        {/* qty  */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4 border-2 px-2 rounded-sm">
            <button>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="text-sm">2</div>
            <button>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div>₹200</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
