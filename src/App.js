import "./styles.css";

import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import ForecastOne from "./ForecastOne";
import ForecastTwo from "./ForecastTwo";

export default function App() {
  return (
    <div className="App">
      <h1>San Francisco</h1>
      <SearchEngine />
      <CurrentWeather />
      <ForecastOne />
      <ForecastTwo />
      <small>
          <a href="https://github.com/jayceeth/weather-react" target="_blank"
            >Open-source code</a
          >
          by Jaycee Huynh
        </small>
    </div>
  );
}


