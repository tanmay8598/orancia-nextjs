import React from "react";

const Hero = () => {
  return (
    <div class="flex  px-5   items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div class="w-full md:w-1/2 lg:pr-32">
          <h2>Natural Makeup Infused with Precious Skincare Botanicals</h2>
          <h3 class="text-justify text-sm mt-6 md:mt-10 text-md  md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            In ancient times, women used soot from earthen Diyas to enhance
            their eyes and fresh extracts from natural, freshly cut Beetroot, to
            tint their lips and cheeks. Our new Natural Makeup Collection is
            inspired from re-introducing these age-old rituals to our discerning
            customers with diverse complexions, features and skin types. It is
            deeply enriched with natural ingredients for skin care and a
            miraculous serum formula that enhances and restores natural beauty.
          </h3>
          {/* <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
              Get started
            </button>
            <button class="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
              Watch a Demo
            </button>
          </div> */}
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src="https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/stocksy_txpb9eac5f4zwd100_small_1338327.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
