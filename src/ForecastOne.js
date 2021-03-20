import React from "react";

import "./ForecastOne.css";
export default function ForecastOne() {
  return (
    <div className="ForecastOne">
      <ul>
        <li>
          <h3>Sun</h3>
          <span role="img" aria-label="sunny">
            {" "}
            ☀️
          </span>
          <div className="Temperature">
            <strong>70°F</strong>| 40°F
          </div>
        </li>
        <li>
          <h3>Mon</h3>
          <span role="img" aria-label="sunny">
            {" "}
            ☀️
          </span>
          <div className="Temperature">
            <strong>70°F</strong>| 40°F
          </div>
        </li>
        <li>
          <h3>Tues</h3>
          <span role="img" aria-label="sunny">
            {" "}
            ☀️
          </span>
          <div className="Temperature">
            <strong>70°F</strong>| 40°F
          </div>
        </li>
      </ul>
    </div>
  );
}