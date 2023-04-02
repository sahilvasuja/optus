import React from "react";

function Carousel({ text, heading }:any) {
    console.log(text,"4")
    console.log(heading,"5");
  return (
    <div className="carousel ">
      <div className="carousel-image text-xl">
      {heading}
      </div>
      <div className="carousel-text text-lg">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Carousel;