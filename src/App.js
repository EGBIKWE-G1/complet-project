import React from "react";
import "./App.css";
import "./Newp.css";
import "./Main.css";
import logo from "./assets/logo.png";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Client from "./Client";
import Gallery from "./Gallery";
import Store from "./Store";
import Price from "./Price";
import Frequently from "./Frequently";
import Contactus from "./Contactus";
import Footer from "./Footer";

function App() {
  return (
    <section className="logo">
      <nav>
        <img className="img1" src={logo} alt="logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <button className="up">SIGN UP</button>
        </ul>
      </nav>
      <div></div>
      <Header />
      <About />
      <Features />
      <Testimonials />
      <Client />
      <Gallery />
      <Store />
      <Price />
      <Frequently />
      <Contactus />
      <Footer />
    </section>
  );
}

export default App;
