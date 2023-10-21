import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [searchedCityData, setSearchedCityData] = useState(null);
  const [minWindSpeed, setMinWindSpeed] = useState('');
  const [minTemperature, setMinTemperature] = useState('');

  useEffect(() => {
    async function fetchAllWeatherData() {
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?cities=8953360,8953361,8953362,2643743,524901,658226,4930956,4699066,1880252&key=${API_KEY}`);
        const data = await response.json();
        console.log('Weather data:', data);
        setList(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchAllWeatherData();
  }, []);

  console.log('List:', list);

  const calculateAverageTemperature = (data) => {
    if (!data || data.length === 0) {
      return null;
    }
  
    const temperatures = data.map((weatherData) => weatherData.temp);
    const sum = temperatures.reduce((total, temp) => total + temp, 0);
    const average = sum / temperatures.length;
    return average.toFixed(1);
  };
  
  const findHighestTemperature = (data) => {
    if (!data || data.length === 0) {
      return null;
    }
  
    const temperatures = data.map((weatherData) => weatherData.temp);
    return Math.max(...temperatures);
  };

  const findLowestTemperature = (data) => {
    if (!data || data.length === 0) {
      return null;
    }
  
    const temperatures = data.map((weatherData) => weatherData.temp);
    return Math.min(...temperatures);
  };

  const handleSearchChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSearch = async () => {
    if (searchCity.trim() !== '') {
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${searchCity}&key=${API_KEY}`);
        const data = await response.json();
        
        if (data && data.data && data.data.length > 0) {
          console.log('Weather data for searched city:', data);
          setSearchedCityData(data);
        } else {
          // Handle case where no results are found
          console.log('No weather data found for the searched city.');
          setSearchedCityData(null);
        }
      } catch (error) {
        console.error('Error fetching weather data for searched city:', error);
      }
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    console.log(`Filter changed: ${name} - ${value}`);
    if (name === 'minWindSpeed') {
      setMinWindSpeed(value);
    } else if (name === 'minTemperature') {
      setMinTemperature(value);
    }
  };
  
  const applyFilters = (data) => {
    const filteredData = data.filter(
      (weatherData) =>
        (!minWindSpeed || weatherData.wind_spd >= parseFloat(minWindSpeed)) &&
        (!minTemperature || weatherData.temp >= parseFloat(minTemperature))
    );
    console.log('Filtered Data:', filteredData);
    return filteredData;
  };

  const clearFilters = () => {
    setMinWindSpeed('');
    setMinTemperature('');
    setSearchedCityData(null);
    setSearchCity('');
  };

  return (
    <div className="whole-page">
      <h1>WeatherDash🌦</h1>
      {list && list.data && Array.isArray(list.data) && list.data.length > 0 ? (
        <div>
          <p>Average Temperature: {calculateAverageTemperature(list.data)}°C</p>
          <p>Highest Temperature: {findHighestTemperature(list.data)}°C</p>
          <p>Lowest Temperature: {findLowestTemperature(list.data)}°C</p>
          <div>
            <label htmlFor="searchCity">Search City: </label>
            <input type="text" id="searchCity" value={searchCity} onChange={handleSearchChange} />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div>
            <label htmlFor="minWindSpeed">Min Wind Speed (m/s): </label>
            <input
              type="number"
              id="minWindSpeed"
              name="minWindSpeed"
              value={minWindSpeed}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label htmlFor="minTemperature">Min Temperature (°C): </label>
            <input
              type="number"
              id="minTemperature"
              name="minTemperature"
              value={minTemperature}
              onChange={handleFilterChange}
            />
          </div>
          <button onClick={clearFilters}>Clear Filters</button>
          {searchedCityData ? (
          <ul>
            <li key={searchedCityData.data[0].ts}>
              <p>{searchedCityData.data[0].ob_time}</p>
              <p>{searchedCityData.data[0].city_name}</p>
              <p>{searchedCityData.data[0].temp}°C</p>
              <p>{searchedCityData.data[0].wind_spd} m/s</p>
              <p>{searchedCityData.data[0].weather.description}</p>
            </li>
          </ul>
        ) : (
          <ul>
            {applyFilters(list.data).map((weatherData) => (
              <li key={weatherData.ts}>
                <p>{weatherData.ob_time}</p>
                <p>{weatherData.city_name}</p>
                <p>{weatherData.temp}°C</p>
                <p>{weatherData.wind_spd} m/s</p>
                <p>{weatherData.weather.description}</p>
              </li>
            ))}
          </ul>
        )}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App
