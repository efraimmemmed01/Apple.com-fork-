import React from "react";
import "./Mac.css";
import MacM1 from "../../assets/Mac m1.jpg";

const Mac = () => {
  return (
    <div className="side">
      <div className="row">
        <div className="zone">
          <img className="MacM1" src={MacM1} alt="Mac m1.jpg" />
        </div>
        <div className="top">
          <h1 className="mid">MacBook Pro 14"</h1>
          <p className="title7">Supercharged by M5.</p>
          <div className="unit">
            <button className="part">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac;
