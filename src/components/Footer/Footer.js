import Image from "next/image";
import React, { useState } from "react";
import { BsFacebook, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
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
      <div className="grid grid-cols-1 lg:grid-cols-4 bg-black font-sans font-normal text-xs text-white mt-12 drop-shadow">
        {/* Section 1: Brand Info */}
        <div className="p-4 lg:p-14">
          <p className="font-medium text-2xl lg:text-3xl">Orancia.in</p>
          <p className="mt-4 text-sm">
            Unleash Your Inner Radiance with the magic of our Premium skincare
            products
          </p>
          <p className="mt-4 text-sm">Social media links.</p>
          <div className="mt-1 flex gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61571499286384"
              target="_blank"
            >
              <BsFacebook className="size-6 lg:size-8" />
            </a>
            <a href="https://www.instagram.com/orancia_skin/" target="_blank">
              <RiInstagramFill className="size-6 lg:size-8" />
            </a>
            <a href="https://x.com/Orancia2519" target="_blank">
              <BsTwitterX className="size-6 lg:size-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/orancia-skincare-321471344/"
              target="_blank"
            >
              <BsLinkedin className="size-6 lg:size-8" />
            </a>
          </div>
        </div>

        {/* Section 2: Help */}
        <div className="p-4 lg:p-14">
          <p className="font-medium text-xl">Help</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">
              <Link href="/contact-us/" className="normal-case font-normal">
                Contact Us
              </Link>
            </li>
            <li className="mb-3">
              <Link
                href="/frequently-asked/"
                className="normal-case font-normal"
              >
                FAQ
              </Link>
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
              <Link
                href="/shipping-delivery"
                className="normal-case font-normal"
              >
                Shipping & Delivery
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Useful Links */}
        <div className="p-4 lg:p-14">
          <p className="font-medium text-xl">Useful Links</p>
          <ul className="mt-4 text-sm">
            <li className="mb-3">
              <Link href="/" className="normal-case font-normal">
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link href="#" className="normal-case font-normal">
                {!user ? (
                  <div onClick={() => setIsOpenAccount(true)}>My Account</div>
                ) : (
                  <div onClick={handleRedirect}>My Account</div>
                )}
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/privacy-policy" className="normal-case font-normal">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/who_are_we" className="normal-case font-normal">
                Who Are We
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact */}
        <div className="p-4 lg:p-14">
          <p className="font-medium text-xl">Contact</p>
          <div className="mt-4 text-sm">
            <div className="flex items-start mb-2">
              <MdLocationPin className="mr-2" />
              Pinakinshine Ecom Pvt Ltd <br /> D-5/614, Vikas Khand, Gomtinagar,
              Lucknow
            </div>
            <div className="flex items-center mb-2">
              <MdLocalPhone className="mr-2" /> +91-9005345980
            </div>
            <div className="flex items-center mb-2">
              <MdEmail className="mr-2" /> support@pinakinshine.com
            </div>
          </div>
          <Image
            width={200}
            height={100}
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="Payment Methods"
            className="mt-4 max-w-full"
          />
        </div>

        {/* Section 5: Certifications */}
        <div className="lg:col-span-4 flex justify-center items-center w-full p-4">
          <div className="w-full flex flex-wrap justify-around gap-4">
            {/* GMP Certified */}
            <div className="w-16 h-16 rounded-full overflow-hidden relative">
              <Image
                src="/gmpCertified.png"
                alt="GMP Certified"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* Made with Love */}
            <div className="w-16 h-16 rounded-full overflow-hidden relative">
              <Image
                src="/mwithl.png"
                alt="Made with Love"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* AYUSH Certified */}
            <div className="w-16 h-16 rounded-full overflow-hidden relative">
              <Image
                src="/ayushwithoutbg.png"
                alt="AYUSH Certified"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Section 6: Developed By */}
        <div className="lg:col-span-4 flex justify-center items-center w-full p-4">
          <div className="text-sm text-center">
            Developed & Managed By{" "}
            <a
              href="https://www.ixtminds.com"
              target="_blank"
              className="underline"
            >
              ixt minds
            </a>
          </div>
        </div>
      </div>

      <AccountSidebar isOpen={isOpenAccount} setIsOpen={setIsOpenAccount} />
    </>
  );
};

export default Footer;
