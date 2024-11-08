import Image from "next/image";
import React from "react";

const OurValues = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-3xl  p-10 ">
        <h3 className="h3  text-center md:text-4xl mb-10 mt-11">Our Values</h3>

        <div className="w-full"></div>
        <Image
          src="https://adn-static1.nykaa.com/media/wysiwyg/2021/who-are-we/Nykaa-Beauty.jpg"
          className="w-full h-full"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </section>
    // <section>
    //   <div className="mx-auto max-w-screen-3xl  p-10 bg-red-100 my-20 ">
    //     <h3 className="h3  text-center md:text-4xl mb-10 mt-0">Our Values</h3>

    //     <Image
    //       src="https://adn-static1.nykaa.com/media/wysiwyg/2021/who-are-we/Nykaa-Beauty.jpg"
    //       className="w-full h-full"
    //       width={500}
    //       height={500}
    //       alt="Picture of the author"
    //     />
    //   </div>
    // </section>
  );
};

export default OurValues;
