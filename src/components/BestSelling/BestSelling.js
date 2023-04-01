import React from "react";
import "./BestSelling.css";
import rapplerack from "../../img/rapplerack.jpg";
import handband from "../../img/handband.jpg";
import clock from "../../img/clock.jpg";
import secondclock from "../../img/clock2.jpg";
import ladderlog from "../../img/ladderlog.jpg";
import rope from "../../img/rope.jpg";
import designdaypack from "../../img/designdaypack.jpg";
import binoculars from "../../img/binoculars.jpg";
import paringknife from "../../img/paringknife.jpg";
import paringKnife from "../../img/paringknife2.jpg";
import bottleholder from "../../img/bottleholder.jpg";
import bottleHolder from "../../img/bottleholder2.jpg";
import binocular from "../../img/binoculars.jpg";
import binocular2 from "../../img/binocular2.jpg";
import jumprope from "../../img/jumprope.jpg";
import jumpRope from "../../img/ropehelmet.jpg";
import { useState } from "react";

const products = [
  {
    id: 1,
    source: [{ src: rapplerack }, { src: handband }],
    alt: "image",
    title: "Rapple Rack",
    price: "739,00",
  },
  {
    id: 2,
    source: [{ src: clock }, { src: secondclock }],
    alt: "clock",
    title: "Golden Clock",
    price: "878,00",
  },
  {
    id: 3,
    source: [{ src: ladderlog }, { src: rope }],
    alt: "image",
    title: "Ladder Golf",
    price: "360,00",
  },
  {
    id: 4,
    source: [{ src: designdaypack }, { src: binoculars }],
    alt: "image",
    title: "Design Daypack",
    price: "459,00",
  },
  {
    id:5,
    source: [{src:paringknife},{src:paringKnife}],
    alt: "image",
    title: "Paring Knife",
    price: "180,00"
  },
  {
    id:6,
    source:[{src:bottleholder},{src:bottleHolder}],
    alt:"image",
    title:"Hiking Bottle Holder",
    price: "800,00"
  },
  {
    id:7,
    source:[{src:jumprope},{src:jumpRope}],
    alt:"image",
    title:"Jump Rope",
    price:"200,00"
  },
  {
    id:8,
    source:[{src:binocular},{src:binocular2}],
    alt:"image",
    title:"Water Proof Camera",
    price:"370,00"
  }

];
const BestSelling = () => {
  const [selectedImageIndexes, setSelectedImageIndexes] = useState(Array(products.length).fill(0));

  const handleImageChange = (index) => {
    setSelectedImageIndexes((prevState) => {
      const newState = [...prevState];
      newState[index] = prevState[index] === 0 ? 1 : 0;
      return newState;
    });
  };

  return (
    <>
      <div className="bestProductsWrapper">
        <div className="bestProductsHeadingWrapper">
          <h3 className="heading">BEST SELLING</h3>
        </div>
        <div className="bestProductsMainWrapper">
          {products.map((product,index) => (
            <div key={index}>
              <div className="productImageWrapper">
                
                  <div>
                    <img src={product.source[selectedImageIndexes[index]].src} alt={product.alt} />
                    
                  </div>
                
              </div>
              
              <div className="productheadingWrapper">
                <p className="productTitle">{product.title}</p>
                
                    {product.source.map((source,i) => (
                <button
                      className="bestSellingButton"
                      key={i}
                      onClick={()=>handleImageChange(index)}
                      
                    ></button>
                    ))}
                
                    
              </div>
              
              <div className="productPriceWrapper">
                <span className="productPrice">€{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default BestSelling;
