import React from "react";
import "../Styles/Intro.css";
import JeniusButton from "./JeniusButton";

const Intro = () => {
  return (
    <div className="container bg-center bg-cover">
      <div className="flex justify-start items-center vh-100">
        <div className="heading tc tl-ns flex flex-column w-35-l">
          <h1 className="intro-header ma0 pb0 f0 f-5">
            <div className="pa2 tl">Smarter Banking,</div>
            <div className="pa2 tl">Richer Life</div>
          </h1>
          <p className="text tl word-wrap break-word measure f4 f-4">
            You deserve a full-service digital bank that can help you master
            your money and enrich your life — so we’re building one. <br />
            That’s Jenius!
          </p>
          <JeniusButton className="j-button" buttonName="Join Our Waitlist!" />
          <div className="mobile-img-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
