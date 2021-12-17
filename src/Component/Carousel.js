import React from "react";
import Img from "../SourceFiles/Main/HomeImage1.jpg";

function Carousel(props) {
  return (
    <div className="carousel">
      <div className="crsl-container flex">
        <button onClick = {props.prev}>
            <div className = 'flex'>
            <i class="fas fa-angle-left"></i>
            </div>
        </button>
        <div className="crsl-content">
          <p>{props.text}</p>
          <div className="crsl-content-author flex">
            {/* <div className="crsl-content-author flex"> */}
              <img src={props.img} />
              <div className = 'flex'>
                <h2>{props.name}</h2>
                <h3>{props.status}</h3>
              </div>
            {/* </div> */}
          </div>
        </div>
        <button onClick = {props.next}>
            <div className = 'flex'>
            <i class="fas fa-angle-right"></i>
            </div>
         
        </button>
      </div>
    </div>
  );
}

export default Carousel;
