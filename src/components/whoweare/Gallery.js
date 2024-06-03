"use client";
import React from "react";
import Slider from "react-slick";

const Gallery = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const images = [
    {
      src: "https://picsum.photos/id/818/700/700",
      alt: "Statue of Liberty",
      caption: "Statue of Liberty",
    },
    {
      src: "https://picsum.photos/id/537/700/700",
      alt: "Night Sky",
      caption: "Night Sky",
    },
    {
      src: "https://picsum.photos/id/136/700/700",
      alt: "Ravine Between Rocks",
      caption: "Ravine Between Rocks",
    },
    {
      src: "https://picsum.photos/id/337/700/700",
      alt: "Wheat Farm",
      caption: "Wheat Farm",
    },
    {
      src: "https://picsum.photos/id/737/700/700",
      alt: "City Street",
      caption: "City Street",
    },
    {
      src: "https://picsum.photos/id/217/700/700",
      alt: "Crumbling Pier",
      caption: "Crumbling Pier",
    },
    {
      src: "https://picsum.photos/id/416/700/700",
      alt: "Foggy Mountains",
      caption: "Foggy Mountains",
    },
    {
      src: "https://picsum.photos/id/811/700/700",
      alt: "Dense Forest",
      caption: "Dense Forest",
    },
    {
      src: "https://picsum.photos/id/902/700/700",
      alt: "Sunset Over Mountains",
      caption: "Sunset Over Mountains",
    },
    {
      src: "https://picsum.photos/id/514/700/700",
      alt: "SUV in Front of Building",
      caption: "SUV in Front of Building",
    },
    {
      src: "https://picsum.photos/id/111/700/700",
      alt: "Classic Vehicle",
      caption: "Classic Vehicle",
    },
    {
      src: "https://picsum.photos/id/168/700/700",
      alt: "Stacked Rocks",
      caption: "Stacked Rocks",
    },
    {
      src: "https://picsum.photos/id/210/700/700",
      alt: "Brick Wall",
      caption: "Brick Wall",
    },
    {
      src: "https://picsum.photos/id/270/700/700",
      alt: "Waterfront",
      caption: "Waterfront",
    },
    {
      src: "https://picsum.photos/id/315/700/700",
      alt: "Overgrown Buildings",
      caption: "Overgrown Buildings",
    },
    {
      src: "https://picsum.photos/id/562/700/700",
      alt: "Dying Trees",
      caption: "Dying Trees",
    },
    {
      src: "https://picsum.photos/id/385/700/700",
      alt: "Ocean View",
      caption: "Ocean View",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="h3  text-center md:text-4xl mb-10 mt-11">Our Gallery</h3>
      </div>
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <figure
              key={index}
              className="relative flex flex-col items-center justify-center h-[80%] w-auto min-h-[100px] mr-14 snap-start transition-all ease-in-out duration-300 first:ml-14"
            >
              <div className="p-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  width="600"
                  height="600"
                  className="h-full w-auto shadow-md rounded-md opacity-90 brightness-100 outline-none transition-all ease-in-out duration-300 hover:h-[calc(100%-40px)] hover:brightness-150 hover:rounded-lg hover:outline-solid hover:outline-1 hover:outline-white hover:outline-offset-5"
                />
              </div>
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
