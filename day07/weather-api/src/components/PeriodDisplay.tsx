// import './DayDisplay.css'
import {WeatherPeriod} from '../types';

interface Props {
    dayData: WeatherPeriod;
}

const PeriodDisplay = ({dayData} : Props) => {
    const data = dayData;
  return (
    <li className='PeriodDisplay'>
        <h2>{data.name}: {data.shortForecast}</h2>
        <p>Temperature: {data.temperature} {data.temperatureUnit}</p>
        <img src={data.icon}></img>
        <p>{data.detailedForecast}</p>
    </li>
  )
};

export default PeriodDisplay;
