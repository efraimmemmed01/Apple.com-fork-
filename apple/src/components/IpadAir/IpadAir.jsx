import React from "react";
import ipadAir from "../../assets/Ipad air.png";
import ipadBlue from "../../assets/Ipad blue.jpg";
import "./IpadAir.css";

const IpadAir = () => {
  return (
    <div className="header">
      <div className="ipad">
        <div className="main">
          <img className="air" src={ipadAir} alt="Ipad air.png" />
          <p className="child">Now supercharged by the M3 chip.</p>
          <button className="btn">Learn more</button>
        </div>
        <div className="blue">
          <img className="ipadBlue" src={ipadBlue} alt="Ipad blue.jpg" />
        </div>
      </div>
    </div>
  );
};

export default IpadAir;
