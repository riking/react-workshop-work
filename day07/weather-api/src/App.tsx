import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {AppError, WeatherResponse} from './types';
import axios from 'axios';
import LocationPicker from './components/LocationPicker';
import WeatherForecast from './components/WeatherForecast';

function App() {
  const [airport, setAirport] = useState("DTX");
  const [gridpoint, setGridpoint] = useState("65,33");
  const [weatherResponse, setWeatherResponse] = useState<WeatherResponse|AppError|undefined>(undefined);

  const setLocation = (airport: string, gridpoint: string) => {
    setAirport(airport);
    setGridpoint(gridpoint);
    setWeatherResponse(undefined);
  }

  useEffect(() => {
    axios.get<WeatherResponse>(`https://api.weather.gov/gridpoints/${airport}/${gridpoint}/forecast`).then(response => {
      const wr: WeatherResponse = response.data;
      setWeatherResponse(wr);
    }).catch((err) => {
      const errorData: AppError = {
        isError: true,
        generic: err,
      };
      setWeatherResponse(errorData);
    });
  }, [airport, gridpoint]);

  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <LocationPicker setLocation={setLocation} />
      <WeatherForecast data={weatherResponse} />
    </div>
  );
}

export default App;
