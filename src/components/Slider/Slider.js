import React from "react";
import slider1 from "../../img/slider1.jpg";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.jpg";
import slider4 from "../../img/slider4.jpg";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Slider.css";


const images = [
  { original: slider1, thumbnail: slider1},
  { original: slider2, thumbnail: slider2 },
  { original: slider3, thumbnail: slider3 },
  { original: slider4, thumbnail: slider4 },
];

function Carousel(props) {
  return (
    <div
      style={{ paddingTop: props.paddingTop, width: props.width }}
      className="galleryWrapper"
    >
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        infinite={true}
        autoPlay={true}
        slideDuration={500}
        style={{ maxHeight: "500px"}}
      />
    </div>
  );
}

export default Carousel;
