import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
import { format } from "date-fns";

const year = format(new Date(), "yyyy");
function Footer() {
  return (
    // Define Section container
    <div className="gpt3__footer section__padding">
      {/* Footer heading */}
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        {/* Button */}
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
      </div>
      {/* Footer Menu container */}
      <div className="gpt3__footer-links">
        {/* Logo */}
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p> Simon Muia&trade;, All Rights Reserved</p>
        </div>
        {/* Links div */}
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        {/* Links div */}
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        {/* Links div */}
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>
            Simon Muia
            <br />
            P.O Box 914-00208
            <br />
            Ngong Hills, Kenya
          </p>
          <p> 085-132567 </p>
          <p>info@simon-muiaportfolio.webflow.io</p>
        </div>
      </div>
      {/* Copyright sub-section */}
      <div className="gpt3__footer-copyright">
        <p>&copy; {year} GPT-3.All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
