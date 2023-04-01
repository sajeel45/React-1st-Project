import React from "react";
import "./FeaturedPost.css";
import firstpost from "../../img/featured1.jpg";
import secondpost from "../../img/featured2.jpg";
import thirdpost from "../../img/featured3.jpg";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

const images = [
  {
    original: firstpost,
  },
  {
    original: secondpost,
  },
  {
    original: thirdpost,
  },
];
const FeaturedPost = () => {
  return (
    <>
      <div className="featuredpostWrapper">
        <h3 className="titleWrapper">FEATURED POSTS</h3>
        <div className="gallery-Wrapper">
          <ReactImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          <div className="text-Wrapper">
            <p className="dateWrapper">Nov 29, 2016</p>
            <p className="descriptionWrapper">MIRUM EST NOTARE QUAM LITTERA</p>
            <p className="userWrapper">
              <i class="fa-solid fa-user user"></i>Ram M
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce
              fringilla.....
            </p>
            </div>
            <div className="linkStylingWrapper">
              <Link className="linkStyling">READ MORE  <i class="fa-regular fa-greater-than greater"></i></Link>
            </div>
          </div>
        </div>
    </>
  );
};
export default FeaturedPost;
