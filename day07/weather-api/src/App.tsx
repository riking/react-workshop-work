import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {AppError, WeatherResponse} from './types';
import axios from 'axios';
import LocationPicker from './components/LocationPicker';
import WeatherForecast from './components/WeatherForecast';

function App() {
  const [gridId, setGridId] = useState("DTX");
  const [gridpoint, setGridpoint] = useState("65,33");
  const [placeName, setPlaceName] = useState("Detroit, MI");
  const [weatherResponse, setWeatherResponse] = useState<WeatherResponse|AppError|undefined>(undefined);

  const setLocation = (gridId: string, gridpoint: string, placeName: string) => {
    setGridId(gridId);
    setGridpoint(gridpoint);
    setPlaceName(placeName);
    setWeatherResponse(undefined);
  }

  useEffect(() => {
    axios.get<WeatherResponse>(`https://api.weather.gov/gridpoints/${gridId}/${gridpoint}/forecast`).then(response => {
      const wr: WeatherResponse = response.data;
      setWeatherResponse(wr);
    }).catch((err) => {
      const errorData: AppError = {
        isError: true,
        generic: err,
      };
      setWeatherResponse(errorData);
    });
  }, [gridId, gridpoint]);

  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <LocationPicker setLocation={setLocation} />
      <WeatherForecast data={weatherResponse} placeName={placeName} />
    </div>
  );
}

export default App;
