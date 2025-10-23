import { useState } from "react";
import "./Search.css";

const API_KEY = "5c4251bc772c301046bb915c01c83b7e";

function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      setWeatherData(data);
      setError("");
      if (!response.ok) {
        throw new Error("City not found");
      }
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="App Search">
      
      <div className="search-container text-center mt-4">
        <input
          type="text"
          className="search-input shadow-sm"
          placeholder="Enter the Place...."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button color="green" className="search-btn shadow-sm" onClick={fetchWeather}>
            🚶‍♂️🌍
        </button>
      </div>

      
      {error && <p className="error text-center">{error}</p>}

      
      {weatherData && (
        <div className="carousel-styling">
        <div
          id="weatherCarousel"
          className="carousel slide w-50 mx-auto mt-4"
          data-bs-ride="carousel"
          data-bs-theme = "dark"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card p-4 text-center mx-auto" style={{ maxWidth: "400px" }}>
                <h2>
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
                <p>🌡️ Temperature: {weatherData.main.temp}°C</p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card p-4 text-center mx-auto" style={{ maxWidth: "400px" }}>
                <p>🌥️ Weather: {weatherData.weather[0].description}</p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card p-4 text-center mx-auto" style={{ maxWidth: "400px" }}>
                <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#weatherCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#weatherCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
        </div>
      )}
    </div>
  );
}

export default Search;
