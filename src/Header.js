import React from "react";
import Madagascar from "./assets/Madagascar.png";

function Header() {
  return (
    
    <div>
      <header className="App-header">
          <img className="Img-p" src={Madagascar} alt="phone" />
        <div className="Minor-header">
          <h1 id="H-1">
            start your amazing
            <br />
            stuff through appy.
          </h1>
          <p id="P-1">
            Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod
            <br /> <br /> tempor incididunt ut labore et laborused
            <br />  
             
             <br />
            <br />
            sed do eiusmod tempor incididunt
            <br />
            <br />
            ut labore et laborused.
          </p>
          <button id="B-1"><i class="fa fa-anchor"> DOWNLOAD APP</i></button>
        </div>
      </header>
      <phone />
    </div>
  );
  
}

export default Header;
