import React from "react";
import "./Banner.css";
import banner from "../../img/banner.jpg";

const Banner = (props) => {
    return(
    <div className="bannerWrapper" style={{marginTop:props.marginTop,width:props.width}}>
        <img  src={banner} alt="banner"/>
    </div>
    );
};
export default Banner;
