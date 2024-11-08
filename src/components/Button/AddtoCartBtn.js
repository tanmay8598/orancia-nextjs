import React from "react";

const AddtoCartBtn = ({ btnStyles, textStyles, onClick }) => {
  return (
    <button className={`${btnStyles} bg-[#ed1d24]`} onClick={onClick}>
      <p className={`${textStyles}`}>Add to cart</p>
    </button>
  );
};

export default AddtoCartBtn;
