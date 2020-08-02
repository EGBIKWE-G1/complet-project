import React from "react";

function Gallery(){
  return(
    <section>
    <div className="super">
      <div>
          <button className="gall"><i class='fas fa-laptop'></i></button>
          <p>
            Easy Notifications<br />
            Lorem ipsum dolor sit amet, consectetur <br />
            adipisicing elit, sed do eiusmod tempor.<br />
          </p>
      </div>
      <button className="gall2"><i class='fas fa-chalkboard'></i></button>
        <p>
          Fully Responsive<br />
          Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit, sed do eiusmod tempor.<br />

        </p>
      <div>
          <button className="lerry3"><i class='fas fa-laptop'></i></button>
      <p>
          Editable Layout <br />
          Lorem ipsum dolor sit amet, consectetur<br />
          adipisicing elit, sed do eiusmod tempor.<br />
      </p>
      </div>
      </div>
      <div className="suprem">
      <div>
          <p>OUR FEATURES ----------</p>
      </div>
      <div>
          <h3 className="design">Aour Approach of Design is Prety<br />
           Simple and Clear</h3>
      </div>
        <br />
      <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod<br />
             tempor incididunt ut labore et laborused sed do eiusmod tempor<br />
              incididunt ut labore et laborused.
        </p>
      </div>
        <button id="clock"><i class="fa fa-clock-o"></i>LEARN MORE</button>
      </div>
    </section>
  );
}

export default Gallery;