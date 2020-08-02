import React from "react";
import Brand from "./assets/Brand.png";
import doublepic from "./assets/doublepic.png";

function Progress() {
  return (
    <section>
    <div className="Prom">
        <img className="H-21P" src={doublepic} alt="double" />
        <div className="Ever">
      <p>OUR PROGRESS</p>
      <h1 id="grat">Grat Application Ever</h1>
      <p>
            Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod
         <br />
            <br />
        tempor incididunt ut labore et laborused sed do eiusmod tempor
         <br />        
            <br />
        incididunt ut labore et laborused.
      </p>
          <button className="learn">LEARN MORE</button>
        </div>
      </div>
      <div className="majorbrand">
        <img className="brand" src={Brand} alt="So cool" />
        <div className="problem">
        <p>VIDEO FEATURES</p>
        <h1 className="gratA">Grat Application Ever</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do
             <br />
          <br />
            eiusmod tempor incididunt ut labore et laborused sed do
             <br />
          <br />
            eiusmod tempor incididunt ut labore et laborused.
             <br />
            <br />
          <button id="idbutt">LEARN MORE</button>
        </p>
        </div>
      </div>
    </section>
  );
}

export default Progress;
