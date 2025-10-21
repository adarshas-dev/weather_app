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

  return (
    <div>
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
            {weather.name}
          </Card.Title>
          <Card.Subtitle style={{ fontSize: "11px", color: "#777" }}>
            {weather.sys?.country}
          </Card.Subtitle>

          <Row className="align-items-center mt-2">
            <Col xs="4">
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                rounded
                style={{ height: "45px" }}
              />
            </Col>
            <Col>
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                {Math.round(weather.main.temp)}°C
              </h3>
              <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>
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
