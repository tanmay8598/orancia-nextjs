// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// const ProductDetailsCarousel = ({ images }) => {
//   return (
//     <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] ">
//       <Carousel
//         infiniteLoop={true}
//         showIndicators={false}
//         showStatus={false}
//         thumbWidth={60}
//         className="productCarousel"
//       >
//         {images?.map((img, index) => (
//           <img src={img} alt={`Image ${index + 1}`} />
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default ProductDetailsCarousel;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              width={1360} // Adjust the width according to your layout requirements
              height={760} // Adjust the height according to your layout requirements
              layout="responsive"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
