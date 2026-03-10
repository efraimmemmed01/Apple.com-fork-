import React from "react";
import "./Ipadcolor.css";
import IpadCol from "../../assets/Ipad color.jpg";

const Ipadcolor = () => {
  return (
    <div className="head">
      <div className="orange">
        <div className="window">
          <h1 className="ten">iPad</h1>
          <p className="nine">
            Now with the speed of the A16 chip <br />
            and double the starting storage.
          </p>
          <button className="btn4">Learn more</button>
        </div>
        <div className="color">
          <img className="ipadcolor" src={IpadCol} alt="Ipad color.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Ipadcolor;
