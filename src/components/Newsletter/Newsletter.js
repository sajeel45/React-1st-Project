import React from "react";
import "./Newsletter.css";

const Newsletter = () =>{
    return(
        <>
        <div className="newsletterWrapper">
            <h3>NEWSLETTER</h3>
            <div className="newslettertextWrapper">
                <p className="newsLetterText">Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce.</p>
              <input type="email" placeholder="Email Address" className="inputfield"></input>
              <button className="sendButton"><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
        </>
    )
}
export default Newsletter;
