import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Carousel = () => {
  const handleOnDragStart = e => e.preventDefault()

  const items = ["../../images/tech/Angular.png",
    "../../images/tech/cpp.png",
    "../../images/tech/git.png",
    "../../images/tech/html5.png",
    "./../images/tech/css.png"];

  const state = {
    galleryItems: items.map((i) => (<img src={i} onDragStart={handleOnDragStart} className="carouselpic" >{i}</img>))
  }

  const thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel._onDotClick(i)}>* </span>
  )


  return (
    <div>
      <AliceCarousel
        duration={400}
        autoPlay={true}
        // showSlideInfo={true}
        startIndex={1}
        dotsDisabled={true}
        fadeOutAnimation={false}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        disableAutoPlayOnAction={true}
        items={state.galleryItems}
        ref={(el) => (this.Carousel = el)}
      />
      {/* <img src="../../images/tech/Angular.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="../../images/tech/cpp.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="../../images/tech/git.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="../../images/tech/html5.png" onDragStart={handleOnDragStart} className="carouselpic" />
        <img src="./../images/tech/css.png" onDragStart={handleOnDragStart} className="carouselpic" />
      </AliceCarousel> */}
      <nav>{items.map(thumbItem)}</nav>
      <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
      <button onClick={() => this.Carousel._slideNext()}>Next button</button>
    </div>
  )
}

export default Carousel;