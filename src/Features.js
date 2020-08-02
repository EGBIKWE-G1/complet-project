import React from "react";
import Emergency from "./assets/Emergency.png";

function Features() {
  return (
    <section id="overall">
    <div id="botm">
      <h6 id="medman">________FEATURES_________</h6>
      <h3 id="meddle">Pwoerful Features As Always</h3>
      </div>
    <div id="part1">
      <div className="fast">
          {/* <button id="bu1"><i class="fas fa-clock"></i></button> */}
          <button id="bu1"><i class="fa fa-clock-o"></i></button>
          <h4>Fast & Powerful<br />
        Lorem ipsum dolor sit amet,<br />
        consectetur adipisicing elit.</h4>
      </div>
        <div className="easily"><br /><br />
          {/* <button id="bu2"><i class="fas fa-clock"></i></button> */}
          <button id="bu2"><i class="fa fa-clock-o"></i></button>
          <h4>Easily Editable<br />
        Lorem ipsum dolor sit amet,<br />
        consectetur adipisicing elit.</h4>
      </div>
        <div className="cloud">
          {/* <button id="bu3"><i class="fas fa-clock"></i></button> */}
          <button id="bu3"><i class="fa fa-clock-o"></i></button>
          <br /> <br /><h4>Cloud Storage
         <br /> <br />Lorem ipsum dolor sit amet,
          </h4>consectetur adipisicing elit
      </div>
      </div>
      <img id="emar" src={Emergency} alt="So fine" />
      <div id="part2">
      <div className="notif">
          {/* <button id="bu4"><i class="fas fa-clock"></i></button> */}
          <button id="bu4"><i class="fa fa-clock-o"></i></button>
          <h4>Easy Notifications<br />
        Lorem ipsum dolor sit amet,<br />
        consectetur adipisicing elit.</h4><br />
      </div>
      <div className="fully">
          {/* <button id="bu5"><i class="fas fa-clock"></i></button> */}
          <button id="bu5"><i class="fa fa-clock-o"></i></button>
          <h4>Fully Responsive<br />
        Lorem ipsum dolor sit amet,<br />
        consectetur adipisicing elit.</h4>
      </div>
        <div>
        <h4 className="lay">
            {/* <button id="bu6"><i class="fas fa-clock"></i></button><br /> */}
            <button id="bu6"><i class="fa fa-clock-o"></i></button>
          Editable Layout<br />
          Lorem ipsum dolor sit amet,<br />
          consectetur adipisicing elit.</h4><br />
      </div>
      </div>
    
    </section>
  
  );
}

export default Features;
