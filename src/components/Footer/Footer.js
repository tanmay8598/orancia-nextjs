import Image from "next/image";
import React, { useState } from "react";
import { BsFacebook, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

import { RiInstagramFill } from "react-icons/ri";
import logo from "../../../public/oranica.png";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";
import AccountSidebar from "../Cart/AccountSidebar";
import useAuth from "@/auth/useAuth";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const handleRedirect = () => {
    router.push("/account/");
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 bg-[#8c8d94]  font-sans   font-normal text-xs  text-white mt-12 drop-shadow">
        {/* Section 1 */}

        <div className="p-6 lg:p-14">
          {/* <Image src={logo} className="w-full h-[200px] object-contain" /> */}
          <p className="font-medium text-3xl">Orancia.in</p>
          <p className="mt-4 regular-14 text-sm">
            {" "}
            Unleash Your Inner Radiance with magic of our Premium skincare
            products
          </p>
          <p className="mt-4 regular-14 text-sm">Social media links.</p>
          <div className="mt-1 flex gap-2">
            <a href="https://www.facebook.com/profile.php?id=61551878665744">
              <BsFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/orancia.in/?hl=en">
              <RiInstagramFill size={30} />
            </a>
            <a href="https://x.com/Orancia2519" className="items-center">
              <BsTwitterX size={26} />
            </a>
            <a href="https://www.linkedin.com/in/orancia-a-beauty-ab86b5327/">
              <BsLinkedin size={24} />
            </a>
          </div>
        </div>
        {/* Section  */}

        <div className="p-6 lg:p-14">
          <p className="font-medium text-xl">Help</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">
              {" "}
              <Link href="/contact-us/" className="normal-case font-normal">
                Contact Us
              </Link>
            </li>
            <li className="mb-3">
              <Link
                href="/frequently-asked/"
                className="normal-case font-normal"
              >
                Frequently asked questions
              </Link>{" "}
            </li>

            <li className="mb-3">
              <Link
                href="/cancellation-return/"
                className="normal-case font-normal"
              >
                Cancellation & Return
              </Link>
            </li>
            <li className="mb-3">
              {" "}
              <Link
                href="/shipping-delivery"
                className="normal-case font-normal"
              >
                Shipping & Delivery
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-6 lg:p-14">
          <p className="font-medium text-xl">Useful Links</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">
              {" "}
              <Link href="/" className="normal-case font-normal">
                Home
              </Link>
            </li>

            <li className="mb-3">
              <Link href="#" className="normal-case font-normal">
                {!user ? (
                  <div
                    // className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                    onClick={() => setIsOpenAccount(true)}
                  >
                    {/* <Link> */}
                    My Account
                    {/* </Link> */}
                  </div>
                ) : (
                  <div
                    // className="relative h-4 w-4 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer"
                    onClick={handleRedirect}
                  >
                    My Account
                  </div>
                )}
              </Link>{" "}
            </li>

            <li className="mb-3">
              <Link href="/privacy-policy" className="normal-case font-normal">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/who_are_we" className="normal-case font-normal">
                Who Are we
              </Link>
            </li>
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
              <MdLocalPhone style={{ marginRight: "10px" }} /> 9005345980
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
        <div className="lg:col-span-5 lg:flex justify-center items-center lg:w-full">
          <div className=" w-full flex items-center justify-around mb-4">
            <Image
              src="/gmpCertified.png"
              alt="Tag 1"
              width={80}
              height={80}
              className="rounded-full hover:scale-105 transition-transform object-cover"
            />
            <Image
              src="/mwithl.png"
              alt="Tag 2"
              width={80}
              height={80}
              className="rounded-full hover:scale-105 transition-transform object-cover"
            />

            <div>

            

<div className="w-[81px] h-[81px] rounded-full overflow-hidden relative">
    <Image
      src="/blkwt.png"
      alt="Tag 3"
      className="hover:scale-105 transition-transform object-cover"
      fill
    />
  </div>
              <Image
                src="/ayushwithoutbg.png"
                alt="Tag 3"
                width={80}
                height={78}
                className="rounded-full hover:scale-105 transition-transform object-cover absolute bottom-[38px]"
              />
            </div>
              
          </div>
        </div>
        <div className="lg:col-span-5 lg:flex justify-center items-center lg:w-full mb-4 ">
          <div className="mt-4 text-sm text-center">
            Developed & Managed By
            <a href="https://www.ixtminds.com"> ixt minds </a>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-5 bg-gray-200  font-sans   text-sm  text-blue-gray-500  font-medium  drop-shadow">

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1 justify-center sm:justify-normal">
            <div className="m-2">
              <div
                className="bg-[#ed1d24] rounded-[29px] object-center p-3 sm:p-2 
              w-[50px] sm:w-[56px] "
              >
                <Image
                  src="/free-delivery.png"
                  className="w-full sm:h-[40px]   rounded-full"
                  height={40}
                  width={40}
                  alt="image"
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">Free Shipping</div>

              <div>Order Above ₹ 299</div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1 justify-center sm:justify-normal">
            <div className="m-2">
              <div className="bg-[#ed1d24] rounded-[29px] p-2 w-[50px] sm:w-[56px] ">
                <Image
                  src="/returns.png"
                  className="w-full sm:h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                  alt="image"
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">15Day Return Policy</div>

              <div>EASY RETURNS</div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1 justify-center sm:justify-normal ">
            <div className="m-2 ">
              <div className="bg-[#ed1d24] rounded-[29px] p-2 sm:w-[56px] w-[50px] ">
                <Image
                  src="/brand.png"
                  className="w-full sm:h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                  alt="image"
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">100% AUTHENTIC</div>
              <div>Products Directly</div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-14 lg:pr-3">
          <div className="flex p-1 justify-center sm:justify-normal">
            <div className="m-2">
              <div className="bg-[#ed1d24] rounded-[29px] p-2 sm:w-[56px]  w-[50px]">
                <Image
                  src="/brand-image.png"
                  className="w-full sm:h-[40px] object-contain rounded-full"
                  height={40}
                  width={40}
                  alt="image"
                />
              </div>
            </div>
            <div className="m-2">
              <div className="pb-1">1900+ BRANDS</div>

              <div>1.2 Lakh+ Products</div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-14 lg:pr-10">
          <div className="flex p-1 justify-center sm:justify-normal">
            Show us some love ❤ on social media
          </div>
          <div className="mt-2 flex gap-2 justify-center">
            <BsFacebook size={30} className="cursor-pointer" />
            <RiInstagramFill size={30} className="cursor-pointer" />
            <BsWhatsapp size={30} className="cursor-pointer" />
            <FaYoutube size={30} className="cursor-pointer" />
            <BsTwitterX size={30} className="cursor-pointer" />
          </div>
        </div>
      </div> */}
      <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
    </>
  );
};

export default Footer;
