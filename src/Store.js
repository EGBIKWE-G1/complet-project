import React from "react";
import Appic from "./assets/Appic.png";

function Store() {
  return (
    <section className="apple">
    <div className="strong">
        <p id="down">Download The App</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam<br /><br />
         possimus eaque magnam eum praesentium unde.</p>
        <br />
        <br />
        <button className="dolor"> <img src={"https://colorlib.com/preview/theme/appy/images/apple-icon.png"} alt="apple Icon" />APPLE Store </button>
        <button className="dolor"> <img src={"https://colorlib.com/preview/theme/appy/images/play-store-icon.png"} alt="store" /> PLAY Store</button>
    </div>
    <div className="weak">
        <img src={Appic} alt="app" />
    </div>
    </section>
  );
}

export default Store;