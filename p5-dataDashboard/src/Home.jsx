import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Home({ list, searchedCityData, applyFilters }) {
    const chartRef = useRef(null);

    useEffect(() => {
      // Destroy the chart when the component unmounts
      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
      };
    }, []);

    console.log('Chart Data:', list?.data);
    console.log('Labels:', list?.data?.map((weatherData) => weatherData.ob_time));
    console.log('Temperatures:', list?.data?.map((weatherData) => weatherData.temp));
  
    return (
      <div>
        {/* Navigation links */}
        <nav>
        <Link to="*">Home</Link>
        {list &&
            list.data &&
            Array.isArray(list.data) &&
            list.data.map((weatherData) => (
            <Link key={`${weatherData.city_name}_${weatherData.ts}`} to={`/detail-view/${weatherData.city_name}`}>
                {weatherData.city_name}
            </Link>
        ))}
        </nav>
  
        {/* Display a line chart with temperature data */}
        {list && list.data && Array.isArray(list.data) && list.data.length > 0 && (
          <div>
            <h3>Weather Chart</h3>
                <Line
                    ref={chartRef}
                    data={{
                        labels: list?.data?.map((weatherData) => weatherData.ob_time) || [],
                        datasets: [
                        {
                            label: 'Temperature (°C)',
                            data: list?.data?.map((weatherData) => weatherData.temp) || [],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1,
                        },
                        {
                            label: 'Wind Speed (m/s)',
                            data: list?.data?.map((weatherData) => weatherData.wind_spd) || [],
                            fill: false,
                            borderColor: 'rgb(255, 99, 132)',
                            tension: 0.1,
                        },
                        ],
                    }}
                    options={{
                        scales: {
                        x: {
                            type: 'category',
                        },
                        },
                    }}
                />
          </div>
        )}
      </div>
    );
  }
  
  export default Home;
