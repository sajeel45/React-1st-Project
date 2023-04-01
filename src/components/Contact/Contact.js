import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
    return(
        <div className="lowerContactWrapper">
            <div className="phoneContact">
                <div className="phoneIcon">
            <i class="fa-solid fa-phone"></i>
            </div>
            <div className="contactText">
            <p className="questionText">Do You Have a Question?</p>
            <Link to="/" className="linkStyle"><p className="contactNumber">500-130-120</p></Link>
            </div>
                
            </div>
            <div className="emailWrapper">
                <div className="emailIconWrapper">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                    <p className="emailQuestionText">OFFER QUESTION</p>
                    <Link to="/" className="linkStyle"><p className="contactDomain">contact@somedomain.com</p></Link>
                </div>
            </div>
            <div className="supportQuestionWrapper">
                <div className="supportIconWrapper">
                <i class="fa fa-headphones"></i>
                </div>
                <div className="supportText">
                    <p className="questionText">SUPPORT QUESTION</p>
                    <Link to="/" className="linkStyle"><p className="supportDomain">support@somedomain.com</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Contact;