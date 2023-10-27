import React from 'react';

function DetailView({ data }) {

  return (
    <div>
      <h2>{data.city_name}</h2>
      <p>Temperature: {data.temp}°C</p>
      <p>Wind Speed: {data.wind_spd} m/s</p>
      <p>Weather: {data.weather.description}</p>
    </div>
  );
}

export default DetailView;