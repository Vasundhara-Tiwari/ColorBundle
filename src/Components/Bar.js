import React from "react";
import "./Bar.css";

const Bar = (props) => {
  async function copy1() {
    await navigator.clipboard.writeText(props.color1);
    alert("Hex Code Copied!");
  }
  async function copy2() {
    await navigator.clipboard.writeText(props.color2);
    alert("Hex Code Copied!");
  }
  async function copy3() {
    await navigator.clipboard.writeText(props.color3);
    alert("Hex Code Copied!");
  }
  async function copy4() {
    await navigator.clipboard.writeText(props.color4);
    alert("Hex Code Copied!");
  }
  async function copy5() {
    await navigator.clipboard.writeText(props.color5);
    alert("Hex Code Copied!");
  }
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
