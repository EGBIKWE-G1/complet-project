import React from "react";
import slider from "./assets/slider.png";




function Client(){
  return(
    <section className="short">
    <div className="screen">
        <p>SCREENSHOTS -------</p><br /><br />
        <h2>Screenshot 01</h2><br /><br />
        <p>Lorem ipsum dolor sit amet, consectetur <br /><br />
         adipiing elit, sed do eiusmod tempor  <br /><br />
          incididunt ut labore et laborused sed do  <br /> <br />
          eiusmod tempor incididunt ut labore et laborused.</p>
        <br />
        <br />
        <br />
        <button className="dolor">LEARN MORE</button>
    </div>
    <div className="sliser">
        <img className="phone1" src={slider} alt="happy" />
    </div>
    
    </section>
  );
} 

export default Client;