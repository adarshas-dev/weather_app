import "./CityPopup.css"
import { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

function CityPopup({ marker }) {
  const [weather, setWeather] = useState(null);
  const API_KEY = "5c4251bc772c301046bb915c01c83b7e";
  const [lat, lon] = marker.geocode;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }

    fetchWeather();
  }, [lat, lon]);

  if (!weather) return <p>Loading...</p>;

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
    <div className="cityPopup">
      <Card
        border="primary"
        style={{
          width: "200px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <Card.Body style={{ padding: "6px" }}>
          <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
            {weather.name.normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")}
          </Card.Title>
          <Card.Subtitle className="countryName" style={{ fontSize: "11px" }}>
            {weather.sys?.country}
          </Card.Subtitle>

          <Row className="align-items-center mt-2">
            <Col xs="4">
              <Image
                src={allIcon[weather.weather[0].icon]}
                rounded
                style={{ height: "45px" }}
              />
            </Col>
            <Col>
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                {Math.round(weather.main.temp)}°C
              </h3>
              <p style={{ margin: 0, fontSize: "12px" }}>
                {weather.weather[0].main}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CityPopup;
