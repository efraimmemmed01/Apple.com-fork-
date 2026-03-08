import React from "react";
import airpodsImage from "../../assets/airpodss.jpg";
import "./Airpods.css";

const Airpods = () => {
  return (
    <div className="cat">
      <h1>AirPods Pro 3</h1>
      <p>The world's best in-ear Active Noise Cancellation.</p>
      <button>Learn more</button>
      <div className="ImgCon">
        <img className="airpods" src={airpodsImage} alt="AirPods Pro 3" />
      </div>
    </div>
  );
};

export default Airpods;
