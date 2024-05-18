import Image from "next/image";
import React from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../../public/oranica.png";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 bg-[#8c8d94]  font-sans   font-normal text-xs  text-white mt-12 drop-shadow">
        {/* Section 1 */}

        <div className="p-6 lg:p-14">
          {/* <Image src={logo} className="w-full h-[200px] object-contain" /> */}
          <p className="font-medium text-3xl">Orancia.in</p>
          <p className="mt-4 regular-14 text-sm">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="mt-4 flex gap-2">
            <BsFacebook size={30} />
            <RiInstagramFill size={30} />
            <BsWhatsapp size={30} />
          </div>
          <div className="mt-4 text-sm">
            © Copyright
            <a href="https://www.ixtminds.com"> orancia.in</a>
          </div>
        </div>
        {/* Section  */}
        <div className="p-6 lg:p-14">
          <p className="font-medium text-xl">Help</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">Contact Us</li>
            <li className="mb-3">Frequently asked questions </li>
            <li className="mb-3">Store Locatorut </li>
            <li className="mb-3">Cancellation & Returntact </li>
            <li className="mb-3">Shipping & Delivery</li>
            <li className="mb-3">Sell on Orancia</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="p-6 lg:p-14">
          <p className="font-medium text-xl">Useful Links</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">Home</li>
            <li className="mb-3">My Account</li>
            <li className="mb-3">About Us</li>
            <li className="mb-3">Contact Us</li>
            <li className="mb-3">T&C</li>
            <li className="mb-3">Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-6 lg:p-14">
          <p className="font-medium text-xl">Contact</p>
          <div className="mt-4 text-sm">
            <div className="flex items-center mb-2">
              <MdLocationPin style={{ marginRight: "10px" }} /> Lucknow, India
            </div>
            <div className="flex items-center mb-2">
              <MdLocalPhone style={{ marginRight: "10px" }} /> +974-30014946
            </div>
            <div className="flex items-center mb-2">
              <MdEmail style={{ marginRight: "10px" }} /> info@orancia.in
            </div>
          </div>
          <img
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="Payment Methods"
            className="mt-4"
          />
        </div>

        {/* Section 4 */}
        <div className="p-6 lg:p-14">
          <p className="font-medium text-xl">My SHOP</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">MAKEUP</li>
            <li className="mb-3">Body Care</li>
            <li className="mb-3">Hair Care</li>
            <li className="mb-3">Men's Care</li>
            <li className="mb-3">Wellness</li>
            <li className="mb-3">Gifting</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 bg-gray-200  font-sans   text-sm  text-blue-gray-500  font-medium  drop-shadow">
        {/* Section 1 */}

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1">
            <div className="m-2">
              <div className="bg-red-500 rounded-[29px] p-2 w-[56px] ">
                <Image
                  src="/van.png"
                  className="w-full h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">Free Shipping</div>
              <hr className="py-1 " />
              <div>On Orders Above ₹ 299</div>
            </div>
          </div>
        </div>
        {/* Section 1 */}

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1">
            <div className="m-2">
              <div className="bg-red-500 rounded-[29px] p-2 w-[56px] ">
                <Image
                  src="returns.png"
                  className="w-full h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">15-Day Return Policy</div>
              <hr className="py-1 " />
              <div>EASY RETURNS</div>
            </div>
          </div>
        </div>
        {/* Section 2 */}

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1 ">
            <div className="m-2 ">
              <div className="bg-red-500 rounded-[29px] p-2 w-[56px] ">
                <Image
                  src="/brand.png"
                  className="w-full h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">100% AUTHENTIC</div>
              <hr className="py-1" />
              <div>Products Sourced Directly</div>
            </div>
          </div>
        </div>
        {/* Section 1 */}

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1">
            <div className="m-2">
              <div className="bg-red-500 rounded-[29px] p-2 w-[56px] ">
                <Image
                  src="brand-image.png"
                  className="w-full h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">1900+ BRANDS</div>
              <hr className="py-1 " />
              <div>1.2 Lakh+ Products</div>
            </div>
          </div>
        </div>
        {/* Section 1 */}

        <div className="p-6 lg:p-14 lg:pr-10">
          <div className="flex p-1">Show us some love ❤ on social media</div>
          <div className="mt-2 flex gap-2">
            <BsFacebook size={30} className="cursor-pointer" />
            <RiInstagramFill size={30} className="cursor-pointer" />
            <BsWhatsapp size={30} className="cursor-pointer" />
            <FaYoutube size={30} className="cursor-pointer" />
            <BsTwitterX size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
