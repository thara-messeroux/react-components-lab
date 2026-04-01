// WeatherIcon.jsx

// This component is responsible ONLY for displaying the weather image
const WeatherIcon = (props) => {
  return (
    <img
      src={props.img} // image URL passed from parent
      alt={props.imgAlt} // alt text for accessibility
    />
  );
};

export default WeatherIcon;
