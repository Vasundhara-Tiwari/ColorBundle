import React from "react";
import Bar from "./Components/Bar";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  return (
    <div className="main-page">
      <div className="main-page__header">
        <div className="page-title">Color Bundle</div>
        <div className="portfolio-link">
          <a href="http://vasundhara-tiwari.herokuapp.com/">
            Click here to know more about me
          </a>
        </div>
      </div>
      <div className="palatte-heading">Purple Shades</div>
      <Bar
        color1="#9966cc"
        color2="#8a2be2"
        color3="#856088"
        color4="#9400d3"
        color5="#6f00ff"
      />
      <Bar
        color1="#Fff0f5"
        color2="#6f2da8"
        color3="#6a5acd"
        color4="#702963"
        color5="#B284be"
      />
      <Bar
        color1="#551a8b"
        color2="#Bf00ff"
        color3="#563c5c"
        color4="#Df73ff"
        color5="#4b0082"
      />

      <div className="palatte-heading">Blue Shades</div>

      <Bar
        color1="#003153"
        color2="#000080"
        color3="#4169e1"
        color4="#003366"
        color5="#40e0d0"
      />
      <Bar
        color1="#0047ab"
        color2="#03BFFF"
        color3="#0592D0"
        color4="#2a52be"
        color5="#0073cf"
      />
      <Bar
        color1="#6495ed"
        color2="#1e90ff"
        color3="#b0e0e6"
        color4="#4682b4"
        color5="#00bfff"
      />
      <div className="palatte-heading">Brown Shades</div>
      <Bar
        color1="#800020"
        color2="#Daa520"
        color3="#800000"
        color4="#Bdb76b"
        color5="#D2b48c"
      />
      <Bar
        color1="#B38b6d"
        color2="#Cd7f32"
        color3="#B87333"
        color4="#E97451"
        color5="#954535"
      />
      <Bar
        color1="#808000"
        color2="#A0522d"
        color3="#8a3324"
        color4="#C2b280"
        color5="#Cc7722"
      />
      <div className="palatte-heading">Yellow Shades</div>
      <Bar
        color1="#Fff44f"
        color2="#Ffef00"
        color3="#F0e130"
        color4="#E4d008"
        color5="#Ffffe0"
      />
      <Bar
        color1="#808000"
        color2="#Eedc82"
        color3="#Ffdf00"
        color4="#9acd32"
        color5="#E1ad01"
      />
      <Bar
        color1="#B5a642"
        color2="#F4c430"
        color3="#C2b280"
        color4="#E4d96f"
        color5="#F5f5dc"
      />
      <div className="palatte-heading">Green Shades</div>
      <Bar
        color1="#7fff00"
        color2="#4cbb17"
        color3="#40e0d0"
        color4="#32cd32"
        color5="#355e3b"
      />
      <Bar
        color1="#00ffff"
        color2="#228b22"
        color3="#39ff14"
        color4="#7fffd4"
        color5="#006400"
      />
      <Bar
        color1="#90ee90"
        color2="#00ff7f"
        color3="#Aaf0d1"
        color4="#77dd77"
        color5="#008080"
      />
      <div className="palatte-heading">Black Shades</div>
      <Bar
        color1="#551a8b"
        color2="#36454f"
        color3="#282c35"
        color4="#0f0f0f"
        color5="#003366"
      />
      <Bar
        color1="#3b3c36"
        color2="#002147"
        color3="#343434"
        color4="#612302"
        color5="#100c08"
      />
      <Bar
        color1="#3d2b1f"
        color2="#1a1110"
        color3="#16161d"
        color4="#3d0c02"
        color5="#32174d"
      />
      <div className="palatte-heading">Red Shades</div>
      <Bar
        color1="#F88379"
        color2="#Ff69b4"
        color3="#800000"
        color4="#800020"
        color5="#922724"
      />
      <Bar
        color1="#Ff00ff"
        color2="#Ff0000"
        color3="#Ca2c92"
        color4="#8b0000"
        color5="#C04000"
      />
      <Bar
        color1="#8a0707"
        color2="#Ff2400"
        color3="#66023c"
        color4="#B7410e"
        color5="#Fbceb1"
      />
      <div className="palatte-heading">Orange Shades</div>
      <Bar
        color1="#Fbceb1"
        color2="#Ff6700"
        color3="#D4af37"
        color4="#F0dc82"
        color5="#Cd5700"
      />
      <Bar
        color1="#Ee7600"
        color2="#Ffb347"
        color3="#F28500"
        color4="#Ffa500"
        color5="#E24c00"
      />
      <Bar
        color1="#Ec5800"
        color2="#Ff4f00"
        color3="#Ff4500"
        color4="#Eba832"
        color5="#Ff6700"
      />
    </div>
  );
};

export default App;
