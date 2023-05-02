import React from "react";
import ReviewCard from "./ReviewCard";
import "../Styles/ReviewCardList.css";
import Reviews from "./Reviews";

const ReviewCardList = () => {
  return (
    <div>
      <h1 className="r-intro-header ma0 pb0 f0 f-5">
        <div className="pa2 tl">Don't Just Take Our Word for It</div>
      </h1>

      <div className="RCL-container">
        {Reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            text={review.text}
            color={review.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCardList;
