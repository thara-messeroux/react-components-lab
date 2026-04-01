// WeatherForecast.jsx

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      {/* image component */}
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />

      {/* text component */}
      <WeatherData
        day={props.day}
        conditions={props.conditions}
        time={props.time}
      />
    </div>
  );
};

export default WeatherForecast;


