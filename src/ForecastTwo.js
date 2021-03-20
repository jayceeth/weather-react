import React from "react";

import "./ForecastTwo.css";
export default function ForecastTwo() {
  return (
    <div className="ForecastTwo">
      <ul>
        <li>
          <h3>Wed</h3>
          <span role="img" aria-label="sunny">
            {" "}
            ☀️
          </span>
          <div className="Temperature">
            <strong>70°F</strong>| 40°F
          </div>
        </li>
        <li>
          <h3>Thu</h3>
          <span role="img" aria-label="sunny">
            {" "}
            ☀️
          </span>
          <div className="Temperature">
            <strong>70°F</strong>| 40°F
          </div>
        </li>
        <li>
          <h3>Fri</h3>
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
