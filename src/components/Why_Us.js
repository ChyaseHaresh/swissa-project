import React from "react";
import './../stylesheets/why_us.css';


function WhyUs() {
  return (
    <div>
      <div className="why-us">
        <div className="why-us-text">
          <span>Why Choose Us?</span>
          <h1>Plan Your Trip with Swissa's</h1>
          <p>
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't look even slightly.
          </p>
          <ul>
            <li>
              <i class="zmdi zmdi-check-circle"></i> Invest in your simply
              neighborhood
            </li>
            <li>
              <i class="zmdi zmdi-check-circle"></i> Support people in free text
              extreme need
            </li>
            <li>
              <i class="zmdi zmdi-check-circle"></i> Largest global industrial
              business community
            </li>
          </ul>
          <button>BOOK WITH US NOW</button>
        </div>
        <div className="why-us-img">
          <div className="back-circle"></div>
          <img src={require("../images/banner.jpeg")} alt="" />
          <div className="front-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
