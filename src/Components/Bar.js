import React from "react";
import "./Bar.css";

const Bar = (props) => {
  return (
    <div className="main__bar">
      <div
        className="main-bar__inner-bar"
        id="sample"
        style={{ backgroundColor: `${props.color1}` }}
      >
        <span>{props.color1}</span>
      </div>
      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color2}` }}
      >
        <span>{props.color2}</span>
      </div>

      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color3}` }}
      >
        <span>{props.color3}</span>
      </div>

      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color4}` }}
      >
        <span>{props.color4}</span>
      </div>

      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color5}` }}
      >
        <span>{props.color5}</span>
      </div>
    </div>
  );
};

export default Bar;
