import React from "react";
import firstad from "../../img/shoes1.jpg";
import secondad from "../../img/shoes2.jpg";
import thirdad from "../../img/shoes3.jpg";
import "./VerticalMenu.css";
import Wrapper from "../Wrapper/Wrapper";
import Sidebar from "../SideBar/Sidebar";
import { Link } from "react-router-dom";
const VerticalMenu = () => {
  return (
    <>  
          <div className="verticalMenuWrapper">
            <div>
              <h3 className="headingPosition">TREK BOOTS</h3>
            </div>
            <div className="advertisementWrapper">
              <div className="imageWrapper images">
                <img src={firstad} alt="picofshoe" className="images" />
              </div>
              <div className="descriptionWrapper">
                <Link to="\" className="titleOfItem">
                  <span>FORCLAZ FLEX 3</span>
                </Link>
                <span className="price">€465,00</span>
              </div>
            </div>
            <div className="advertisementWrapper">
              <div className="imageWrapper images">
                <img src={secondad} alt="picofshoe" className="images" />
              </div>
              <div className="descriptionWrapper">
                <Link to="\" className="titleOfItem">
                  <span >Approach Shoes</span>
                </Link>
                <span className="price">€673,00</span>
                <s className="originalPrice">€785,00</s>
              </div>
            </div>
            <div className="advertisementWrapper">
              <div className="imageWrapper images">
                <img src={thirdad} alt="picofshoe" className="images" />
              </div>
              <div className="descriptionWrapper">
                <Link to="\"  className="titleOfItem">
                  <span>GTX Hiking Boot</span>
                </Link>
                <p className="price">€768,00</p>
              </div>
            </div>
          </div>
    </>
  );
};
export default VerticalMenu;
