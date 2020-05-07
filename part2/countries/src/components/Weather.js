import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(false);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${city}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return weather ? (
    <>
      <h3>Weather in {weather.location.country}</h3>
      <p class="bold">
        Temperature <span> {weather.current.temperature}</span>
      </p>
      <img
        className="weatherIcon"
        src={weather.current.weather_icons[0]}
        alt=""
      />
      <p class="bold">
        wind:{" "}
        <span>
          {weather.current.wind_speed} mph direction {weather.current.wind_dir}{" "}
        </span>
      </p>
    </>
  ) : null;
};
export default Weather;
