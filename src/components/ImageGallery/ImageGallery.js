import React from "react";

const ImageGallery = ({ data }) => {
  return (
    <div class="bg-white h-full py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            class="drop-shadow-sm group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={data[0].img}
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Skin Care
            </span>
          </a>

          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={data[1].img}
              loading="lazy"
              alt="Photo by Magicle"
              class="drop-shadow-sm  absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Hair Care
            </span>
          </a>

          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={data[2].img}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="drop-shadow-sm absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Makeup
            </span>
          </a>

          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={data[3].img}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="drop-shadow-sm absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Wellnes
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
