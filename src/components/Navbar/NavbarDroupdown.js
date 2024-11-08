import Image from "next/image";
import React from "react";

const NavbarDroupdown = ({ hideNavbar, textContent }) => {
  return (
    <>
      <div
        onMouseLeave={hideNavbar}
        className="absolute left-0 right-0 top-full bg-white h-72 z-10"
      >
        <div className="flex justify-between  max-w-screen-xl mx-auto p-4 text-black font-semibold ">
          <div className="w-1/3 px-6 cursor-pointer ">
            <div className="hover:text-red-400">{textContent}</div>
          </div>
          <div className="w-1/3 px-6 ">
            <ul className="cursor-pointer ">
              <li className="hover:text-red-400 pb-4">
                Illuminating Moisturizer{" "}
              </li>
              <li className="hover:text-red-400 pb-4">
                Matte Serum Foundation{" "}
              </li>
              <li className="hover:text-red-400 pb-4">Matte Compact Powder </li>
              <li className="hover:text-red-400 pb-4">BB Cream </li>
              <li className="hover:text-red-400 pb-4">Makeup Setting Spray </li>
              <li className="hover:text-red-400 pb-4">
                Supermelt Cleansing Balm{" "}
              </li>
            </ul>
          </div>
          <div className="w-1/3 px-6">
            {/* <ul className="">
              <li className="pb-4">Makeup1 </li>
              <li className="pb-4">Makeup1 </li>
              <li className="pb-4">Makeup1 </li>
              <li className="pb-4">Makeup1 </li>
              <li className="pb-4">Makeup1 </li>
              <li className="pb-4">Makeup1 </li>
            </ul> */}
            <div className=" flex justify-between mb-4 ">
              <div>
                <Image
                  src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className=" flex justify-between ">
              <div>
                <Image
                  src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="Picture of the author"
                />
              </div>
              <div>
                <Image
                  src="https://files.stbotanica.com/site-images/400x400/STBOT470-01.jpg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDroupdown;
