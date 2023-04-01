import React from "react";
import "./NewArrivals.css";
import newarrival1 from "../../img/newarrivals1.jpg";
import newarrival2 from "../../img/newarrivals2.jpg";
import newarrival3 from "../../img/newarrivals3.jpg";

const images = [
    {
        id:1,
        src:newarrival1,
        alt:"image"
    },
    {
        id:1,
        src:newarrival2,
        alt:"image"        
    },
    {
        id:1,
        src:newarrival3,
        alt:"image"
    }
]

const NewArrival = () =>{
    return(
        <>
        <div className="imagesWrapperMain">
            {images.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
        </>
    )
}
export default NewArrival;