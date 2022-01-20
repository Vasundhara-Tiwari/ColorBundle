import React from "react";
import img from "./logo192.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="upper-header">
      <a href="http://vasundhara-tiwari.herokuapp.com">
        Click to know more about me :- &nbsp;&nbsp;&nbsp;
        <img src={img} height="35vw" width="35vw" />
      </a>
    </div>
  );
};

export default Header;
