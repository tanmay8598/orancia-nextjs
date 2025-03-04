import Image from "next/image";
import React from "react";

const DifferenceBanner = () => {
  return (
    <div className="container max-w-screen-lg py-16 relative mx-auto">
      {/* Heading */}
      <div className="text-center">
        <p className="text-2xl font-semibold md:text-4xl mb-11 mt-11">
          Why Settle for Less When You Can Have the Best?
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-10">
        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div className="text-gray-700 text-sm md:text-base">
            <p>
              Want the best solutions for your skin issues? Or want to unlock the secrets of glowing skin? Hold on—Orancia is here!
            </p>
            <p className="mt-4">
              Orancia is a beauty and wellness brand established in 2024. With its tagline “Unleash your inner radiance”, it aims to revolutionize the skincare journey of people with the magic of its premium products.
            </p>
          </div>
          <div></div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div></div>
          <div className="text-gray-700 text-sm md:text-base">
            <p>
              Orancia believes in nurturing your skin with natural products to radiate your inner glow rather than hiding your flaws. Orancia, as a brand, targets to provide more ayurvedic solutions to your skin-related issues helping you to feel confident in your skin.
            </p>
            <p className="mt-4">
              Orancia’s tested product formulations are based on ancient Ayurvedic methods supported by modern technologies. They are free from toxic chemicals, parabens, phthalates, mineral oil, and petroleum and contain natural, skin-friendly ingredients that magically elevate the timeless beauty of your skin. So, why wait? Choose natural, choose Orancia!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Images */}
      <div className="absolute top-1 -left-12 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <Image
          src="https://restaurant-tcj.netlify.app/assets/leaf-C1v4Wmxv.png"
          alt="Decorative leaf illustration"
          width={160}
          height={160}
          className="max-w-[160px]"
          priority // Prioritize loading this image
        />
      </div>
      <div className="absolute lg:-bottom-20 -bottom-32 -left-4 sm:bottom-0 sm:left-0 sm:opacity-100">
        <Image
          src="https://restaurant-tcj.netlify.app/assets/tomato-BArVx_-y.png"
          alt="Decorative tomato illustration"
          width={280}
          height={280}
          className="max-w-[280px]"
        />
      </div>
      <div className="absolute top-10 md:top-32 -right-16 sm:right-20 opacity-50 sm:opacity-100">
        <Image
          src="https://restaurant-tcj.netlify.app/assets/lemon-B-yhuoNo.png"
          alt="Decorative lemon illustration"
          width={200}
          height={200}
          className="max-w-[200px]"
        />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0">
        <Image
          src="https://restaurant-tcj.netlify.app/assets/apple-B3cOfIDT.png"
          alt="Decorative apple illustration"
          width={200}
          height={200}
          className="max-w-[200px]"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-[50%] left-[40%] -translate-x-1/2">
        <Image
          src="https://restaurant-tcj.netlify.app/assets/kiwi-Do64hCSg.png"
          alt="Decorative kiwi illustration"
          width={200}
          height={200}
          className="max-w-[200px]"
        />
      </div>
    </div>
  );
};

export default DifferenceBanner;