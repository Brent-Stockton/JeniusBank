import React from "react";
import "../Styles/ReviewCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <div className="quote-icon" style={{ color: props.color }}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <div className="review-text">{props.text}</div>
      <div className="reviewer-name">{props.name}</div>
    </div>
  );
};

export default ReviewCard;
