import React from "react";
import "./Bar.css";

const Bar = (props) => {
  const copy1 = () => {
    navigator.clipboard.writeText(props.color1);

    console.log("c");
    alert("Hex Code Copied!");
  };
  const copy2 = () => {
    navigator.clipboard.writeText(props.color2);
    console.log("c");

    alert("Hex Code Copied!");
  };
  const copy3 = () => {
    navigator.clipboard.writeText(props.color3);
    console.log("c");

    alert("Hex Code Copied!");
  };
  const copy4 = () => {
    navigator.clipboard.writeText(props.color4);
    console.log("c");

    alert("Hex Code Copied!");
  };
  const copy5 = () => {
    navigator.clipboard.writeText(props.color5);
    console.log("c");

    alert("Hex Code Copied!");
  };
  return (
    <div className="main__bar">
      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color1}` }}
        onClick={copy1}
      >
        <span>{props.color1}</span>
      </div>
      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color2}` }}
        onClick={copy2}
      >
        <span>{props.color2}</span>
      </div>
      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color3}` }}
        onClick={copy3}
      >
        <span>{props.color3}</span>
      </div>

      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color4}` }}
        onClick={copy4}
      >
        <span>{props.color4}</span>
      </div>

      <div
        className="main-bar__inner-bar"
        style={{ backgroundColor: `${props.color5}` }}
        onClick={copy5}
      >
        <span>{props.color5}</span>
      </div>
    </div>
  );
};

export default Bar;
