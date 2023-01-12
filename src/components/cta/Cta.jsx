import React from "react";
import "./cta.css";

function Cta() {
  return (
    // Define the cta section
    <div className="gpt3__cta">
      {/* Define Left sub-section */}
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      {/* Define Right subsection */}
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
}

export default Cta;
