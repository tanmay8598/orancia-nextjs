import Image from "next/image";
import React from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../../public/oranica.png";

const Footer = () => {
  return (
    <div className="flex max-sm:flex-col bg-[#f5f5f5] mt-12 drop-shadow">
      {/* left  */}
      <div className="flex-1 p-20 max-sm:p-5">
        {/* <Image src={logo} className="w-full h-[200px] object-contain" /> */}
        <p className="font-medium  text-3xl">Orancia.in</p>
        <p className="mt-4 regular-14">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="mt-4 flex gap-2">
          <BsFacebook size={30} />
          <RiInstagramFill size={30} />
          <BsWhatsapp size={30} />
        </div>
        <div className="mt-4">
          © Copyright
          <a href="https://www.ixtminds.com"> orancia.in</a>
        </div>
      </div>
      {/* center  */}
      <div className="flex-1 mt-7 p-20 max-sm:p-5">
        <p className="font-medium  text-xl ">Useful Links</p>
        <ul className="flex flex-wrap mt-4">
          <li className="w-[50%] mb-3">Home</li>
          <li className="w-[50%] mb-3">My Acount</li>
          <li className="w-[50%] mb-3">About Us</li>
          <li className="w-[50%] mb-3">Contact Us</li>
          <li className="w-[50%] mb-3">T&C</li>
          <li className="w-[50%] mb-3">Privacy Policy</li>
        </ul>
      </div>

      {/* right  */}
      <div className="flex-1 mt-7 p-20 max-sm:p-5 max-sm:bg-[#fff8f8]">
        <p className="font-medium  text-xl ">Contact</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flexStart max-sm:text-sm">
            <MdLocationPin style={{ marginRight: "10px" }} /> Lucknow, India
          </div>
          <div className="flexStart max-sm:text-sm ">
            <MdLocalPhone style={{ marginRight: "10px" }} /> +974-30014946
          </div>
          <div className="flexStart max-sm:text-sm ">
            <MdEmail style={{ marginRight: "10px" }} /> info@orancia.in
          </div>
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" className="mt-4" />
      </div>
    </div>
  );
};

export default Footer;
