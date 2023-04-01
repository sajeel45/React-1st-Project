import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { useState } from 'react';
import handband from "../../img/handband.jpg";
import brownbag from "../../img/brownbag.jpg";
import clock from "../../img/clock.jpg";
import "./Usestate.css";
function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Carousel onChange={handleSlideChange} showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div className='demoWrapper'>
        {/* Content for the first slide */}
        {activeIndex === 0 && (
          <div>
            <h2>Slide 1</h2>
            <img src={handband}/>
            <p>This is the content for the first slide.</p>
          </div>
        )}
      </div>
      <div>
        {/* Content for the second slide */}
        {activeIndex === 1 && (
          <div>
            <h2>Slide 2</h2>
            <img src={brownbag}/>
            <p>This is the content for the second slide.</p>
          </div>
        )}
      </div>
      <div>
        {/* Content for the third slide */}
        {activeIndex === 2 && (
          <div>
            <h2>Slide 3</h2>
            <img src={clock}/>
            <p>This is the content for the third slide.</p>
          </div>
        )}
      </div>
    </Carousel>
  );
}
export default MyCarousel;
