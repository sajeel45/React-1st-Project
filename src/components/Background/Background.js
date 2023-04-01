import React from "react";
import "./Background.css";
import background from "../../img/background.jpg";

const Background = () =>{
  return(
      <div className="backgroundWrapper">
        <img src={background}/>
      </div>
      );
};
export default Background;