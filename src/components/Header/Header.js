import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import { BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../Wrapper/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <>
      {/* <div className="navbar"> */}
        <div className="upperHeaderWrapper">
          <div className="contactWrapper">
          {/*   <span>
              <i class="fa-solid fa-phone"></i> (00) 000 111 222
            </span>
              <Link to="/" className="links">
                <i class="fa-solid fa-envelope"></i> info@somedomain.com
              </Link>*/}
          </div> 

           <div className="loginWrapper">
            
          {/*    <ul id="nav" className="links">
                <li>
                  <Link to="/" className="links">
                    <span>
                      <i class="fa-solid fa-user"></i>My Account
                    </span>
                  </Link>
                </li> 
              </ul> 
              {/* <ul id="nav">
                <li>
                  <a href="#">
                    EUR <i class="fa-sharp fa-solid fa-caret-down"></i>
                  </a>
                  <ul className="links pages">
                    <li>
                      <a>CDY</a>
                    </li>
                    <li>
                      <a>AED</a>
                    </li>
                    <li>
                      <a>SAR</a>
                    </li>
                    <li>
                      <a>PKR</a>
                    </li>
                    <li>
                      <a>AUD</a>
                    </li>
                  </ul>
                </li>
              </ul> */}
              {/* <Link to="/" className="links">
                <select>
                  <option value="eur">EUR</option>
                  <option value="pkr">PKR</option>
                  <option value="aed">AED</option>
                  <option value="rub">RUB</option>
                  <option value="jpy">JPY</option>
                  <option value="cad">CAD</option>
                </select>
              </Link> */}
          </div> 
        </div>  
        <div className="bottomHeaderWrapper" style={{backgroundColor:props.backgroundColor}}>
          <div className="logoWrapper">
            <img src={logo} alt="img" />
          </div>
          <div className="navbarLinksWrapper links">
            <ul id="nav">
              <li className="headingstyle">
                  <Link to="\">
                    <span className="home">Home</span>
                  </Link>
              </li>
              <li className="headingstyle">
                <Link to="\">
                  <span>Shop </span>
                  <i class="fa-sharp fa-solid fa-caret-down"></i>
                </Link>
                <ul className="links pages">
                  <li>
                    <Link to="\">
                      <span className="links">Camming</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Rocks</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Protection</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Bandoliers</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="headingstyle">
                <Link to="\">
                  <span>Hiking</span>{" "}
                  <i class="fa-sharp fa-solid fa-caret-down"></i>
                </Link>
                <ul className="pages">
                  <li>
                    <Link to="\">
                      <span className="home">TOOLS</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Laser</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">BuckleRock</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Cane Stick</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Pliers Tool</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Carrier</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Folder</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Bracelet</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Purifier</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="trekkingWrapper headingstyle">
                <Link to="\">
                  <span>Trekking </span>
                  <i class="fa-sharp fa-solid fa-caret-down"></i>
                </Link>
                <ul className="links pages">
                  <li>
                    <Link to="\">
                      <span className="links">Expedition</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Trek Boots</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Hiking</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Approach</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">WaterProof</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Montara</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">GTXHiking</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Equipment</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="headingstyle">
                <Link to="\">
                  <span>Camping </span>
                  <i class="fa-sharp fa-solid fa-caret-down"></i>
                </Link>
                <div className="campingNavbar">
                  <ul className="links pages site-nav-dropdown ">
                    <li>
                      <Link to="\">
                        <span className="links">Work</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <span className="links">Winter</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <span className="links">Social</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="\">
                        <span className="links">Adventure</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="pagesWrapper headingstyle">
                <Link to="\">
                  <span>Pages</span> <i class="fa-sharp fa-solid fa-caret-down"></i>
                </Link>
                <ul className="pages">
                  <li>
                    <Link to="\" className="paddingStyle">
                      <span className="links">About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Faq's</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="\">
                      <span className="links">Contact us</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="checkOut">
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" />
              <Link to="/" className="links">
                <i class="fa-solid fa-search"></i>
              </Link>
              <Link to="/" className="links">
                <i class="fa-solid fa-heart"></i>
              </Link>
              <Link to="/" className="links">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
export default Header;
