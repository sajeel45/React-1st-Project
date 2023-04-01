import React from "react";
import "./Clients.css";
import ryan from "../../img/ryan.jpg";
import julio from "../../img/julio.jpg";
import copenhagen from "../../img/copenhagen.jpg";
import kingsman from "../../img/kingsman.jpg";
import willis from "../../img/willis.jpg";

const clientsList = [
    {
        id:1,
        src: julio
    },
    {
        id:2,
        src: ryan
    },
    {
        id:3,
        src: copenhagen
    },
    {
        id:4,
        src: kingsman
    },
    {
        id:5,
        src: willis
    }
]

const Clients = () => {
    return(
        <div className="clientsWrapper">
            {clientsList.map((item,index)=>(
                <div key={index}>   

                <div className="clientBorder">
                    <img src={item.src} />
                </div>

                </div>
            ))}
            
        </div>
    )
}
export default Clients;