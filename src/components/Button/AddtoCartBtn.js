import React from "react";

const AddtoCartBtn = ({ btnStyles, textStyles }) => {
  return (
    <button className={`${btnStyles}`}>
      <p className={`${textStyles}`}>Add to cart</p>
    </button>
  );
};

export default AddtoCartBtn;
