import React from "react";
import "./Products.css";
import firstproduct from "../../img/dometentgray.jpg";
import secondproduct from "../../img/frametentblue.jpg";
import thirdproduct from "../../img/familytentblue.jpg";
import fourthproduct from "../../img/familytentgreen.jpg";

const Products = () => {
    return(
        <>  
        <div className="productsWrapper">
    <div className="productsHeadingWrapper">
        <p className="stylingHeading">NEW ARRIVALS</p>
    </div>
    <div className="productsMainWrapper">
    <div className="firstProductWrapper">
      <div className="firstProductimageWrapper">
            <img src={firstproduct} alt="tentImage"/>
      </div>
      <div className="firstProductheadingWrapper">
            <p className="firstProductHeading">Dome Tent</p>
            <button className="firstproductbutton"></button>
      </div>
      <div className="firstProductpriceWrapper">
            <span className="firstProductprice">€345,00</span>
            <br></br>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
      </div>
    </div>
    <div className="secondProductWrapper">
      <div className="secondProductimageWrapper">
            <img src={secondproduct} alt="tentImage"/>
      </div>
      <div className="secondProductheadingWrapper">
            <p className="secondProductHeading">
                Frame Tent
            </p>
            <button className="secondProductbuttonblue"></button>
            <button className="secondProductbuttongreen"></button>
            <button className="secondProductbuttonblack"></button>
            <button className="secondProductbuttonyellow"></button>
      </div>
      <div className="secondProductpriceWrapper">
            <span className="secondProductprice">€150,00</span>
            <br></br>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
        </div>
    </div>
    <div className="thirdProductWrapper">
      <div className="thirdProductimageWrapper">
            <img src={thirdproduct} alt="tentImage"/>
      </div>
      <div className="thirdProductheadingWrapper">
            <p className="thirdProductHeading">Large Family Tent</p>
            <button className="secondProductbuttonblue"></button>
            <button className="secondProductbuttonyellow"></button>
            <button className="secondProductbuttonblack"></button>
            <button className="secondProductbuttongreen"></button>
            <button className="secondProductbuttonpink"></button> 
      </div>
      <div className="thirdProductpriceWrapper">
            <span className="secondproductprice">€678,00</span>
            <br></br>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
      </div>
    </div>
    <div className="fourthProductWrapper">
      <div className="fourthProductimageWrapper">
            <img src={fourthproduct} alt="tentImage"/>
      </div>
      <div className="fourthProductheadingWrapper">
            <p className="fourthproductheading">Tunnel Tent</p>
            <button className="secondProductbuttonblue"></button>
            <button className="secondProductbuttonyellow"></button>
            <button className="secondProductbuttonblack"></button>
            <button className="secondProductbuttongreen"></button>
            <button className="secondProductbuttonpink"></button> 
      </div>
      <div className="fourthProductpriceWrapper">
            <p className="fourthproductprice">€120,00</p>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
            <i class="fa-light fa-star"></i>
      </div>
    </div>
    </div>
  </div>
  </>

  )
};

export default Products;
