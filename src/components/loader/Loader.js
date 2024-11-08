import React from "react";

const Loader = () => {
  const styles = {
    borderRadius: "0.475rem",
    boxShadow: "0 0 50px 0 rgb(82 63 105 / 15%)",
    backgroundColor: "#fff",
    // color: "#d34f45",
    fontWeight: "500",
    margin: "0",
    width: "auto",
    padding: "1rem 2rem",
    top: "calc(50% - 2rem)",
    left: "calc(50% - 4rem)",
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div
          className="m-12 inline-block h-20 w-20 animate-spin rounded-full border-4   border-red-400 border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white "
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
};

export default Loader;
