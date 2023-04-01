import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Switch, Router, Link } from "react-router-dom";
import "./VerticalNavbar.css";
import CarouselDemo from "../Slider/Slider";
import Wrapper from "../Wrapper/Wrapper";
import Sidebar from "../SideBar/Sidebar";
const VerticalNavbar = () => {
  return (
    <>
          <div className="navbarWrapper">
            <h3 className="headingWrapper">Category</h3>
            <BrowserRouter>
              <Link className="verticalNavbarLinks">
                | Hiking
                <span className="positioning">
                  <i class="fa-solid fa-plus position"></i>
                </span>
              </Link>
              <Link className="verticalNavbarLinks">
                | Camping
                <span className="positioning">
                  <i class="fa-solid fa-plus position"></i>
                </span>
              </Link>
              <Link className="verticalNavbarLinks">| Trekking</Link>
              <Link className="verticalNavbarLinks">
                | Climbing
                <span className="positioning">
                  <i class="fa-solid fa-plus position"></i>
                </span>
              </Link>
              <Link className="verticalNavbarLinks">| Mountaineering </Link>
            </BrowserRouter>
          </div>
    </>
  );
};
export default VerticalNavbar;
