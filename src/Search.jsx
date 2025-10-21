import { useState } from "react";
import "./Search.css";
import { Card, CardBody, CardSubtitle, CardTitle, Row } from "react-bootstrap";
import Toggle from "./Toggle";

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
        throw new Error(
          "City Not Found !! Please check the city name and try again."
        );
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
      <div className="search-container d-flex justify-content-center">
        <div>
          <h1
            style={{
              fontWeight: "bold",
              color:
                document.body.className === "light" ? "#121212" : "#f9f9f9",
            }}
          >
            <img src="https://cdn-icons-png.flaticon.com/128/9231/9231625.png" style={{width: "50px"}} />
            True Weather
          </h1>
        </div>
        <input
          type="text"
          className="search-input shadow-sm"
          placeholder="Enter the Place...."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          color="green"
          className="search-btn shadow-sm"
          onClick={fetchWeather}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
            style={{ width: "25px" }}
          />
        </button>
        <div>
          <Toggle />
        </div>
      </div>

      {/* {error && <p className="error text-center">{error}</p>} */}
      {error && (
        <div>
          <Card className="error p-4 text-center mx-auto">{error}</Card>
        </div>
      )}

      {weatherData && (
        <div
          id="weatherCarousel"
          className="carousel slide w-40 mx-auto mt-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card p-4 text-center mx-auto" id="card-design">
                {/* style={{backgroundColor:"red"}} */}
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ margin: "0px", padding: "0px" }}
                >
                  <div className="text-start">
                    <h2
                      style={{
                        fontSize: "35px",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      {weatherData.name}
                    </h2>
                    <h4 style={{ fontSize: "20px", color: "#131313ff" }}>
                      {weatherData.sys.country}
                    </h4>
                  </div>

                  <div className="text-end">
                    <h1
                      style={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        margin: "0",
                      }}
                    >
                      <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                        alt=""
                        style={{ width: "70px" }}
                      />
                      {weatherData.main.temp}
                      <sup>°</sup>c
                    </h1>
                    <span style={{ fontSize: "20px" }}>Temperature</span>
                  </div>
                </div>
                <div className="weather-data">
                  <div className="col">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5664/5664993.png"
                      alt="img-humidity"
                    />
                    <div>
                      <p>{weatherData.main.humidity}%</p>
                      <span>Humidity</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9231/9231936.png"
                      alt="img-wind"
                    />
                    <div>
                      <p>{weatherData.wind.speed}km/h</p>
                      <span>Wind Speed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#weatherCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#weatherCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
