import React from "react";
import "./App.css";
import backgroundImage from "./background.jpg";
import Header from "./components/Header/Header";
import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";
import VerticalMenu from "./components/VerticalMenu/VerticalMenu";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import Content from "./components/Content/Content";
import Slider from "./components/Slider/Slider";
import Equipment from "./components/Equipments/Equipment";
import Verticalad from "./components/VerticalAd/Verticalad";
import FeaturedPost from "./components/FeaturedPost/FeaturedPost";
import Social from "./components/Social/Social";
import Newsletter from "./components/Newsletter/Newsletter";
import Background from "./components/Background/Background";
import Products from "./components/Products/Products";
import Advertisement from "./components/Advertisement/Advertisement";
import Banner from "./components/Banner/Banner";
import BestSelling from "./components/BestSelling/BestSelling";
import NewArrival from "./components/NewArrivals/NewArrivals";
import Demo from "./components/UseState/demo";
import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <div>
                <Wrapper padding="0 25px" backgroundColor="white">
                  <Header backgroundColor="white" />
                  <div className="contentWrapper">
                    <div>
                      <Sidebar className="sideBarWrapper">
                        <VerticalNavbar />
                        <VerticalMenu />
                        <Equipment />
                        <Verticalad />
                        <FeaturedPost />
                        <Social />
                        <Newsletter />
                      </Sidebar>
                    </div>
                    <div className="content">
                      <Content>
                        <Slider paddingTop="50px" width="100%" />
                        <Products />
                        <Advertisement />
                        <NewArrival />
                        <Banner marginTop="50px" />
                        <BestSelling />
                        <Contact />
                        <Clients />
                      </Content>
                      {/* <Demo /> */}
                    </div>
                  </div>
                </Wrapper>
                <Wrapper marginTop="50px" backgroundColor="white">
                  <Footer />
                </Wrapper>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
