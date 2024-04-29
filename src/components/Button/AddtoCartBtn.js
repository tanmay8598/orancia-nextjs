import React from "react";

const AddtoCartBtn = ({ btnStyles, textStyles, onClick }) => {
  return (
    <button className={`${btnStyles}`} onClick={onClick}>
      <p className={`${textStyles}`}>Add to cart</p>
    </button>
  );
};

export default AddtoCartBtn;
