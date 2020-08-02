import React, { Component } from 'react';
import Testimony from './Testimonycard';
import './Features.css';
class Testimonials extends Component {
  render() {          
    return (
      <div className="testimonial-wrap">
        <div className="testside">
          <h1> ---- TESTIMONIALS ----</h1>
          <h3> Our Client Loves US </h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Testimony img="https://colorlib.com/preview/theme/appy/images/team-2.jpg" />
          </div>
          <div className="col-md-4">
            <Testimony img="https://colorlib.com/preview/theme/appy/images/team-3.jpg" />
          </div>
          <div className="col-md-4">
            <Testimony img="https://colorlib.com/preview/theme/appy/images/team-1.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonials;