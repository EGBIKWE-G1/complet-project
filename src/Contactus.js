import React from "react";



function Contactus() {
  return (
    <section id="allround">
    <div id="detail">
        <p>-------- CONTACT US --------</p>
        <h3>Find Us By Bellow Details</h3>
    </div>
    <div id="main">
    <div className="circle">
          <button className="cir"><i class='fas fa-map-marker-alt'></i></button>
          <p>8-54 Paya Lebar Square <br /> 
           60 Paya Lebar Roa SG, Singapore</p> 
    </div>
        <div className="circle1">
          <button className="cie1"><i class="fa fa-phone"></i></button>
          <p>+81 80410817<br /> 
             +80 25350404</p> 
        </div>
        <div className="circle12">
          <button className="cic12"><i class='fas fa-envelope'></i></button>
          <p>Youremail@gmail.com <br />
           egbikwegodwin@gmail.com</p> 
        </div>
    </div>
    </section>
  );
}

export default Contactus;