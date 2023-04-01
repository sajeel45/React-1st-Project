import React from "react";
import "./Verticalad.css";
import firstad from "../../img/sideSlider1.jpg";
import secondad from "../../img/sideSlider2.jpg";
import thirdad from "../../img/sideSlider3.jpg";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const Verticalad = () => {
    
    const images = [
        {
            original: firstad,
            
        },
        {
            original:secondad,
            
        },
        {
            original:thirdad,
            
        }
    ]
    return(
        <>
        <div className="verticaladWrapper">
            <ReactImageGallery
            items={images} 
            autoPlay = {true}
            infinite = {true}
            slideDuration = {500}
            showPlayButton = {false}
            showFullscreenButton = {false}
            showNav = {false}
            style={{ maxHeight: '500px' }}
            or
            />
        </div>
        
        </>
    )
}
export default Verticalad;