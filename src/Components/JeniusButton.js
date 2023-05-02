import React from "react";
import "../Styles/JeniusButton.css";

const JeniusButton = (props) => {
  return (
    <button className="jenius-button white b bg-purple hover-bg-purple bn br-pill hover-shadow-inner h3 w-50 f4 ">
      {props.buttonName}
    </button>
  );
};

export default JeniusButton;
