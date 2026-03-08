import React from "react";
import "./Watch.css";
import watchImage from "../../assets/watch.jpg";
import watchSeries from "../../assets/watch series 11.png";

const Watch = () => {
  return (
    <div className="parent">
      <img className="icon" src={watchSeries} />
      <p className="p">The ultimate way to watch your health.</p>
      <button>Learn more</button>
      <img className="watch" src={watchImage} />
    </div>
  );
};

export default Watch;
