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
            list.data.map((weatherData, index) => (
            <Link key={`${weatherData.city_name}_${weatherData.ts}_${index}`} to={`/detail-view/${weatherData.city_name}`}>
                {weatherData.city_name}
            </Link>
        ))}
        </nav>
  
        {/* Display a line chart with temperature data */}
        {list && list.data && Array.isArray(list.data) && list.data.length > 0 && (
          <div>
            <h3>Temperature Chart</h3>
            <Line
                ref={chartRef}
                data={{
                    labels: ['Label 1', 'Label 2', 'Label 3'],
                    datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: [20, 25, 18],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
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
