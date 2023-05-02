import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const nav = () => {
  return (
    <>
      <nav className="nav dt w-100 border-box pa3 ph5-ns bg-light-purple">
        <img
          src="https://i.ibb.co/b61qSfY/JLogo.jpg"
          className="logo"
          alt="Logo"
        />

        <div className="dtc v-mid w-75 tr">
          <Link
            className="link white f6 f5-ns dib mr3 mr4-ns underline-hover hover-green"
            to="/"
            title="Home"
          >
            Home
          </Link>
          <Link
            className="link white f6 f5-ns dib mr3 mr4-ns underline-hover hover-green"
            to="/about"
            title="About"
          >
            About Us
          </Link>
          <Link
            className="link white f6 f5-ns dib mr3 mr4-ns underline-hover hover-green"
            to="/faq"
            title="FAQs"
          >
            FAQS
          </Link>
          <Link
            className="link white f6 f5-ns dib mr3 mr4-ns underline-hover hover-green"
            to="/press"
            title="Press"
          >
            Press
          </Link>
        </div>
      </nav>
    </>
  );
};

export default nav;
