import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const CartItem = ({ item }) => {
  var name = "Moroccan Argan Conditioner For Dry Hair";
  const short = name.replace(/(.{27})..+/, "$1");
  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      {/* image  */}
      <div className="w-[110px] h-[110px] relative ">
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
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <p className="text-xs lg:text-sm font-medium">{short}</p>
          <button>
            <MdClose />
          </button>
        </div>

        {/* qty  */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button>
              <FaMinus className="text-[10px]" />
            </button>
            <div>2</div>
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
