import React from "react";
import "./Watchse.css";
import WatchSe3 from "../../assets/Watch se3.png";
import Watch3 from "../../assets/Watch 3.jpg";

const Watchse = () => {
  return (
    <div className="item">
      <div className="block">
        <div className="desc">
          <img className="icon2" src={WatchSe3} />
          <p className="pic">Walk it. Talk it. Track it. Love it.</p>
          <div className="thumb">
            <button className="text">Learn more</button>
          </div>
        </div>
      </div>
      <div className="label">
        <img className="Watch3" src={Watch3} />
      </div>
    </div>
  );
};

export default Watchse;
