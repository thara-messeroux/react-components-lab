// src/components/WeatherForecast/WeatherForecast.jsx

import "./WeatherForecast.css";

// 🐳 Weather card → receives data from parent (props)
const WeatherForecast = (props) => {
  return (
    <div className="weather">
      {/* Show day */}
      <h2>{props.day}</h2>

      {/* Show weather icon */}
      <img src={props.img} alt={props.imgAlt} />

      {/* Show condition */}
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>

      {/* Show time */}
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherForecast;
