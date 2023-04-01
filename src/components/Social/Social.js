import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";

const Social = () => {
  return (
    <>
      <div className="socialWrapper">
        <h3>INSTAGRAM</h3>
        <div className="socialTextWrapper"></div>
        <div className="buttonWrapper">
          <Link className="viewMore">VIEW MORE</Link>
        </div>
      </div>
    </>
  );
};

export default Social;
