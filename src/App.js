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
    </div>
  );
}


