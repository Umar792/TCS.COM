import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousal.css"
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"

const Hero = () => {
  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '80%', left: 15, transform: 'translateY(-50%)' }}>
      <FaArrowLeft size={24} />
    </button>
  );

const renderArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '80%', right: 15, transform: 'translateY(-50%)' }}>
      <FaArrowRight size={24} />
    </button>
  );
  const images = [
    {title : "Your cloud , your journ", src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/resilient-responsible-supply-chains:Large?wid=1260&hei=768&dpr=off', alt: 'Image 1' },
    {title : "Your cloud , your journ", src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/tcs-named-worlds-most-admired-companies-list:Large?wid=1260&hei=768&dpr=off', alt: 'Image 1' },
    {title : "BUILDING COLLECTIVE KNOWLEDGE", src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/cloud-journey:Large?wid=1260&hei=768&dpr=off', alt: 'Image 2' },
    {title : "Inventing for impect", src: 'https://s7ap1.scene7.com/is/image/TCSCOMprod/building-shared-ambition-optimism:Large?wid=1260&hei=768&dpr=off', alt: 'Image 3' },
  ];

  return (
    <div className="carousal">
  
       <Carousel showThumbs={false} thumbWidth={0} renderArrowPrev={(onClickHandler, hasPrev, label) => renderArrowPrev(onClickHandler, hasPrev, label)} renderArrowNext={(onClickHandler, hasNext, label) => renderArrowNext(onClickHandler, hasNext, label, )}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            {/* <p className="legend">{image.alt}</p> */}
            <button className="cbtn">know more</button>
            <h3>{image.title}y</h3>

          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
