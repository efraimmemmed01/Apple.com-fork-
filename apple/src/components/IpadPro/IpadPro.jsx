import React from "react";
import "./IpadPro.css";
import Ipad from "../../assets/Ipad black.jpg";

const IpadPro = () => {
  return (
    <div className="col">
      <div className="grid">
        <div className="stack">
          <img className="IpadPro" src={Ipad} alt="Ipad black.jpg" />
        </div>
        <div className="action">
          <h1 className="caption">MacBook Pro 14"</h1>
          <p className="title77">Supercharged by M5.</p>
          <div className="tag">
            <button className="line">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadPro;
