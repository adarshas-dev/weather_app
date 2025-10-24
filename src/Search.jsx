import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { Card, Row } from "react-bootstrap";
import Toggle from "./Toggle";

const API_KEY = "5c4251bc772c301046bb915c01c83b7e";

function Search({ setLocation }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [randomWeather, setRandomWeather] = useState([]);

  useEffect(() => {
    const randomCities = [
      "Kerala",
      "Tamil Nadu",
      "Maharashtra",
      "Kochi",
      "Delhi",
      "London",
      "New York",
    ];

    Promise.all(
      randomCities.map((city) =>
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          )
          .then((res) => res.data)
          .catch(() => null)
      )
    ).then((data) => setRandomWeather(data.filter(Boolean)));
  }, []);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          "City Not Found! Please check the city name and try again."
        );
      }

      setWeatherData(data);
      setError("");

      //------------------------------
      setLocation({
        lat: data.coord.lat,
        lon: data.coord.lon,
        name: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        weather: data.weather[0].main,
        icon: data.weather[0].icon,
      });
      //------------------------------
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

  const carouselItems = weatherData ? [weatherData] : randomWeather;

  const allIcon = {
    "01d": "https://cdn-icons-png.flaticon.com/128/6974/6974833.png",
    "02d": "https://cdn-icons-png.flaticon.com/128/3222/3222800.png",
    "03d": "https://cdn-icons-png.flaticon.com/128/1146/1146869.png",
    "04d": "https://cdn-icons-png.flaticon.com/128/414/414927.png",
    "09d": "https://cdn-icons-png.flaticon.com/128/15621/15621965.png",
    "10d": "https://cdn-icons-png.flaticon.com/128/5545/5545843.png",
    "11d": "https://cdn-icons-png.flaticon.com/128/1779/1779927.png",
    "13d": "https://cdn-icons-png.flaticon.com/128/4834/4834727.png",
    "50d": "https://cdn-icons-png.flaticon.com/128/10405/10405474.png",

    "01n": "https://cdn-icons-png.flaticon.com/128/7204/7204171.png",
    "02n": "https://cdn-icons-png.flaticon.com/128/10660/10660906.png",
    "03n": "https://cdn-icons-png.flaticon.com/128/4834/4834576.png",
    "04n": "https://cdn-icons-png.flaticon.com/128/13804/13804450.png",
    "09n": "https://cdn-icons-png.flaticon.com/128/2930/2930139.png",
    "10n": "https://cdn-icons-png.flaticon.com/128/1332/1332374.png",
    "11n": "https://cdn-icons-png.flaticon.com/128/1959/1959348.png",
    "13n": "https://cdn-icons-png.flaticon.com/128/4005/4005898.png",
    "50n": "https://cdn-icons-png.flaticon.com/128/2930/2930127.png",
  };

  return (
    <div className="App Search">
      <div className="search-container container-fluid">
        <Row className="align-items-center">
          <div className="weathery col-3 d-flex align-items-center justify-content-start ps-4">
            <h1
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: 0,
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/9231/9231625.png"
                style={{ width: "50px" }}
                alt="logo"
              />
              Weathery
            </h1>
          </div>

          <div className="col-6 d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="search-input shadow-sm form-control"
              placeholder="Enter the Place..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ maxWidth: "70%" }}
            />
            <button
              className="search-btn shadow-sm btn btn-success ms-2"
              onClick={fetchWeather}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/18290/18290728.png"
                style={{ width: "25px" }}
                alt="search-icon"
              />
            </button>
          </div>

          <div className="col-3 d-flex justify-content-end align-items-center pe-4">
            <Toggle />
          </div>
        </Row>
      </div>

      {error && (
        <div>
          <Card className="error p-4 text-center mx-auto">{error}</Card>
        </div>
      )}

      {carouselItems.length > 0 && (
        <div
          id="weatherCarousel"
          className="carousel slide w-40 mx-auto mt-4"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div
                key={item.id || index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="card-data p-4 text-center mx-auto"
                  id="card-design"
                >
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
                        {item.name}
                      </h2>
                      <h4 className="countryData" style={{ fontSize: "20px" }}>
                        {item.sys.country}
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
                          src={allIcon[item.weather[0].icon]}
                          alt=""
                          style={{ width: "70px" }}
                        />
                        {item.main.temp}
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
                        <p>{item.main.humidity}%</p>
                        <span>Humidity</span>
                      </div>
                    </div>

                    <div className="col" style={{ marginLeft: "400px" }}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9231/9231936.png"
                        alt="img-wind"
                      />
                      <div>
                        <p>{item.wind.speed}km/h</p>
                        <span>Wind Speed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
