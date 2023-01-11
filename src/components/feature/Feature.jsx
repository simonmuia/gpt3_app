import React from "react";
import "./feature.css";

function Feature({ title, text }) {
  return (
    //Define Card
    <div className="gpt3__features-container__feature" id="features">
      {/* Card Title */}
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
       {/* Card Description */}
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
        </div>
    </div>
  );
}

export default Feature;
