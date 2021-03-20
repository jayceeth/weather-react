import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <ul>
        <li>Last updated: Saturday 10:00</li>
        <li>Sunny</li>
      </ul>
      <span role="img" aria-label="sunny">
        ☀️68°F
      </span>
      <br />
      <ul className="WeatherCondition">
        <li>Humidity: 8%</li>
        <li>Wind: 3 mph</li>
      </ul>
    </div>
  );
}