import React from "react";

const AddtoCartBtn = ({ btnStyles, textStyles, onClick }) => {
  return (
    <button className={`${btnStyles} bg-[#ed1d24]`} onClick={onClick}>
      <p className={`${textStyles}`}>ADD TO CART</p>
    </button>
  );
};

export default AddtoCartBtn;
