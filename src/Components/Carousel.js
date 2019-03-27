import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 

const Carousel = () => {
    const handleOnDragStart = e => e.preventDefault()
    return (
      <AliceCarousel 
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={false}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        disableAutoPlayOnAction={true} >
        <img src="../../images/tech/Angular.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="../../images/tech/cpp.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="../../images/tech/git.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="../../images/tech/html5.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="./../images/tech/css.png" onDragStart={handleOnDragStart} className="carouselpic" />
      </AliceCarousel>
    )
}

export default Carousel;