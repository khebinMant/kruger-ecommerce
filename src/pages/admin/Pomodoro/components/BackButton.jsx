import React from "react";

const BackButton = (props) => {
  return (
    <button {...props} className="backButton">
      <i class="fa-solid fa-arrow-left-long"></i>
      <p>Back</p>
    </button>
  );
};

export default BackButton;
