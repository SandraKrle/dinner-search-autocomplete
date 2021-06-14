import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

function Hero({ heroTextSlim, heroTextBold, children }) {
  return (
    <div className="hero">
      <div className="hero-text">
        <div style={{ fontWeight: 300 }}>{heroTextSlim}</div>
        <div style={{ fontWeight: 500 }}>{heroTextBold}</div>
      </div>
      <div className="hero-content">{children}</div>
    </div>
  );
}

Hero.defaultProps = {
  heroTextSlim: "Search over",
  heroTextBold: "10,000 recipes"
};

Hero.propTypes = {
  heroTextSlim: PropTypes.string.isRequired,
  heroTextBold: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Hero;
