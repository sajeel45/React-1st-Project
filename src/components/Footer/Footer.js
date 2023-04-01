import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import visa from "../../img/visaa.png";
import mastercard from "../../img/mastercard.png";
import paypal from "../../img/paypal.png";
import sold from "../../img/sold.png";
import americanexpress from "../../img/american.png";

const AccountItems = [
  "Search Terms","Advanced Search","Orders and Returns","Consultants","Help and FAQs","Store Locations"
];
const InformationItems = [
  "News","Faq's","Refunds and Returns","Deliveries","Privacy Policy","Terms and Conditions"
];
const SupportItems = [
  "Rock Climbing Gear","Solar Powered Helmet","Pull Rope Rubber","Paring Knife","Ladder Golf","Hiking Bottle Holders",
];
const Tags = [
  "Home","Shop","Hiking","Trekking","Camping","Pages",
];
const PaymentOptions = [
  {
    id:1,
    src:visa
  },
  {
    id:2,
    src:sold
  },
  {
    id:3,
    src:mastercard
  },
  {
    id:4,
    src:americanexpress
  },
  {
    id:5,
    src:paypal
  }
]

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div  className="footerMainWrapper">
        <div className="footerItemsWrapper">
      <div className="footerLocationWrapper">
        <div>
          <h5 className="locationHeading">LOCATION</h5>
        </div>
        <div className="locationAddress">
          <p>520,West valey, Anim ad minim,</p>
        </div>
        <div className="locationNumber">
          <i class="fa-solid fa-phone"></i>
          <span className="contNumber">+91 1234567890</span>
        </div>
        <div>
          <i class="fa-solid fa-envelope"></i>
          <Link className="contNumberStyle">
            <span className="contNumber">contact@somedomain.com</span>
          </Link>
        </div>
        <div className="social-tags-container">
        <div>
          <SocialIcon url="https://www.twitter.com" bgColor="white" fgColor="black"/>
        </div>
        <div>
          <SocialIcon url="https://www.facebook.com" bgColor="white" fgColor="black" />
        </div>
        <div>
          <SocialIcon url="https://www.googleplus.com" bgColor="white" fgColor="black" />
        </div>
        <div>
          <SocialIcon url="https://www.youtube.com" bgColor="white" fgColor="black" />
        </div>
        </div>
      </div>
      <div className="footerAccountWrapper">
        <div>
        <h5 className="accountHeading">MY ACCOUNT</h5>
        </div>
        <div className="accountItemsWrapper">
          {AccountItems.map((item,index)=>(
            <div key={index}>
              <ul>
                <li>
                  <Link className="listItemStyling"><span>|  {item}</span></Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footerInformationWrapper">
            <div className="footerInformationHeadingWrapper">
                <h5 className="informationHeading">INFORMATION</h5>
            </div>
            <div className="informationItemsWrapper">
              {InformationItems.map((item,index)=>(
                <div key={index}>
                  <ul>
                    <li>
                      <Link to="/" className="listItemStyling">
                        <span>| {item}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
      </div>
      <div className="footerSupportWrapper">

        <div className="supportHeadingWrapper">
          <h5 className="supportHeading">SUPPORT</h5>
        </div>
        <div className="supportItemsWrapper">
          {SupportItems.map((item,index)=>(
            <div key={index}>
              <ul>
                <li>
                  <Link className="listItemStyling" to="/">
                    <span>| {item}</span>
                  </Link>
                </li>
              </ul>
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
      <hr />
      </div>
      <div className="lowerFooterWrapper">
            <div className="lowerFooterItems">
              {Tags.map((item,index)=>(
                <div key={index} className="linksItems">
                  <ul className="lowerFooterlist">
                    <li className="tagsItems">
                      <Link className="lowerFooterlist">
                        <span>{item}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="paymentsWrapper">
              {PaymentOptions.map((item,index)=>(
                <div key={index} className="paymentOptions">
                  <img src={item.src}/>
                </div>
              ))}
            </div>
      </div>
      <div className="copyrightWrapper">
        <p>Copyright © 2023, Hiking Camping Powered by Shopify</p>
      </div>
    </div>
     
  );
};
export default Footer;
