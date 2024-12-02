// import Image from "next/image";
// import React from "react";

// const OurValues = () => {
//   return (
//     <section>
//       <div className="mx-auto max-w-screen-3xl  p-10 ">
//         <h3 className="h3  text-center md:text-4xl mb-10 mt-11">Our Values</h3>

//         <div className="w-full">
//           Embracing Nature
//         </div>
//         <div className="w-full">Harmony and Balance of Natural Ingredients</div>
//         <div className="w-full">Aim High,Sparkle Everywhere</div>
//         <div className="w-full">Purity and Integrity</div>
//         <div className="w-full">Connecting and Empowering Women</div>
//         <div className="w-full">Fire, Inspire & Desire</div>
//         {/* <Image
//           src="https://adn-static1.nykaa.com/media/wysiwyg/2021/who-are-we/Nykaa-Beauty.jpg"
//           className="w-full h-full"
//           width={500}
//           height={500}
//           alt="Picture of the author"
//         /> */}
//       </div>
//     </section>
//     // <section>
//     //   <div className="mx-auto max-w-screen-3xl  p-10 bg-red-100 my-20 ">
//     //     <h3 className="h3  text-center md:text-4xl mb-10 mt-0">Our Values</h3>

//     //     <Image
//     //       src="https://adn-static1.nykaa.com/media/wysiwyg/2021/who-are-we/Nykaa-Beauty.jpg"
//     //       className="w-full h-full"
//     //       width={500}
//     //       height={500}
//     //       alt="Picture of the author"
//     //     />
//     //   </div>
//     // </section>
//   );
// };

// export default OurValues;

import React from "react";
import {
  FaLeaf,
  FaBalanceScale,
  FaStar,
  FaHeart,
  FaUsers,
  FaFire,
} from "react-icons/fa";

const OurValues = () => {
  const values = [
    { icon: <FaLeaf />, title: "Embracing Nature" },
    {
      icon: <FaBalanceScale />,
      title: "Harmony and Balance of Natural Ingredients",
    },
    { icon: <FaStar />, title: "Aim High, Sparkle Everywhere" },
    { icon: <FaHeart />, title: "Purity and Integrity" },
    { icon: <FaUsers />, title: "Connecting and Empowering Women" },
    { icon: <FaFire />, title: "Fire, Inspire & Desire" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16">
        <h3 className="text-center text-3xl font-bold text-gray-800 md:text-4xl mb-12">
          Our Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-primary mb-4">{value.icon}</div>
              <h4 className="text-lg font-medium text-gray-700">
                {value.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
