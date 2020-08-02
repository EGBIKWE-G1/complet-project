import React from "react";
import logo1 from "./assets/about-logo2.png";
import Progress from "./Progress";

function About() {
  return (
    <section>
    <div className="img-2">
         <img src={logo1} alt="About" />
        <h5>_____ABOUT APPY_____</h5>
      </div>
      <div className="H-2">
      <h4>
          A beautiful app for consectetur adipisicing elit, sed do eiusmod  <br /> tempor incididunt ut mollit anim id est laborum. Sedut
        <br />
        perspiciatis unde omnis.
      </h4>
      </div>
      <div className="P-2">
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do          
        <br /> eiusmod tempor incididunt ut labore et laborused.
      </p>
      </div>
      <Progress />
    </section>
  );
}

export default About;
