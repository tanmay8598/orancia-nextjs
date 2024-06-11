import Link from "next/link";
import React from "react";

const DiffrenceBnner = () => {
  return (
    <>
      <div className="container py-16 relative">
        <div className="">
          <p className="  font-semibold text-center md:text-4xl mb-11 mt-11">
            Summer Ready Skin care
          </p>
        </div>
        <div>
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p>
                  Pilgrim is "Clean Compatible". Not just free of harmful and
                  toxic chemicals but uses only those ingredients that either
                  enhance the health of our hair & skin or support the
                  effectiveness of formulations.
                </p>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p>
                  Pilgrim is "Clean Compatible". Not just free of harmful and
                  toxic chemicals but uses only those ingredients that either
                  enhance the health of our hair & skin or support the
                  effectiveness of formulations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Link href="/best-sellers"> */}
        <div className="flex justify-center mt-10 sm:mt-14">
          {/* <button className="bg-red-400 px-10 py-3 text-white font-medium z-10 sm:z-0 rounded-lg mx-auto mt-8 ">
            See all
          </button> */}
        </div>
        {/* </Link> */}
        <div className=" absolute top-1 -left-12 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 ">
          <img
            src="https://restaurant-tcj.netlify.app/assets/leaf-C1v4Wmxv.png"
            className="max-w-[160px] "
          />
        </div>
        <div className=" absolute -bottom-20 -left-16 sm:bottom-0 sm:left-0   ">
          <img
            src="https://restaurant-tcj.netlify.app/assets/tomato-BArVx_-y.png"
            className="max-w-[280] "
          />
        </div>
        <div className=" absolute top-10 -right-16  sm:right-20   opacity-50  sm:opacity-100">
          <img
            src="https://restaurant-tcj.netlify.app/assets/lemon-B-yhuoNo.png"
            className="max-w-[200px] "
          />
        </div>
        <div className=" hidden sm:block absolute bottom-0 right-0">
          <img
            src="https://restaurant-tcj.netlify.app/assets/apple-B3cOfIDT.png"
            className="max-w-[200px] "
          />
        </div>
        <div className="   absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 ">
          <img
            src="https://restaurant-tcj.netlify.app/assets/kiwi-Do64hCSg.png"
            className="max-w-[200px] "
          />
        </div>
      </div>
    </>
  );
};

export default DiffrenceBnner;
