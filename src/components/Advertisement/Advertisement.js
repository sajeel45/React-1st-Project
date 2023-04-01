import React from "react";
import "./Advertisement.css";
import firstad from "../../img/advertisement.jpg";
import secondad from "../../img/mainad2.jpg";

const Advertisement = () => {
    return(
    <div className="advertisementWrapper">
        <div className="firstAdvertisement">
            <img src={firstad} alt="advertisement"/>
        </div>
        <div className="secondAdvertisement">
            <img src={secondad} alt="advertisment"/>
        </div>
    </div>
    );
}
export default Advertisement;