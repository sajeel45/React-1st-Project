import React from "react";
import "./Equipment.css";
import keychain from "../../img/keychain.jpg";
import redbag from "../../img/RedBagpic.jpg";
import clip from "../../img/clip.jpg";
import brownbag from "../../img/brownbag.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const equipments = [
  {
    id: 1,
    images: [{ src: keychain }, { src: clip }],
    alt: "image",
    title: "Hook Keychain",
    price: "900,00",
  },
  {
    id: 2,
    images: [{ src: redbag }, { src: brownbag }],
    alt: "image",
    title: "Teton Backpacks",
    price: "650,00",
  },
];
const Equipment = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageIndex = () => {
    setImageIndex(imageIndex === 0 ? 1 : 0 );
  };
  return (
    <div className="equipmentsMainWrapper">
      <h3>EQUIPMENTS</h3>

      <Carousel showArrows={true} showThumbs = {false}>
        {equipments.map((item, index) => (
          <div
            className="equipmentWrapper"
            key={index}
            style={{ width: "100%" }}
          >
          <>
                <div className="equipmentImageWrapper" key={index}>
                  <img src={item.images[imageIndex].src} alt={item.alt} />
                </div>

                <div className="equipmentTitleWrapper">
                  <p className="equipmentTitle">{item.title}</p>
                  

                  
                    <div className="equipmentButtons">
                    {item.images.map((indexes)=>(
                    <button
                    key={indexes}
                    className="equipmentButton"
                    onClick={handleImageIndex}
                  ></button>
                  ))}
                    </div>
                
                </div>
              </>
            
            <div className="equipmentPriceWrapper">
              <p className="equipmentPrice">€{item.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Equipment;
