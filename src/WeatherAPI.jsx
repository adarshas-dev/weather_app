import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function WeatherAPI() {
  const API_KEY = "5c4251bc772c301046bb915c01c83b7e";
  const [weather, setWeather] = useState(null);

  async function WeatherData(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  // useEffect(() => {
  //   // Fetch once on mount
  //   WeatherData("palakkad");
  // }, []);

  return (
    <div className="p-3 text-center">
      <Button onClick={() => WeatherData("palakkad")}>Fetch Weather</Button>

      {weather && (
        <div className="mt-3">
          <h3>{weather.name}</h3>
          <p>🌡️ {weather.main.temp}°C (Feels like {weather.main.feels_like}°C)</p>
          <p>☁️ {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherAPI;
