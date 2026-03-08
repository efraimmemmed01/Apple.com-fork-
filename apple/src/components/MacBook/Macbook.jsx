import React from "react";
import "./Macbook.css";
import MacbookAir from "../../assets/Macbook.jpg";

const Macbook = () => {
  return (
    <div className="boxes">
      <div className="txt">
        <div className="cimg">
          <img className="Macbook" src={MacbookAir} alt="Macbook.jpg" />
        </div>
        <div className="card">
          <h1>MacBook Air</h1>
          <p className="title">Sky blue color.</p>
          <p className="title2">Sky high performance with M4.</p>
          <div className="sec">
            <button className="sub">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
