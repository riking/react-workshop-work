import { AppError, isAppError, WeatherPeriod, WeatherResponse } from '../types';
import PeriodDisplay from './PeriodDisplay';
import './WeatherForecast.css'

const WeatherForecast = ({ data }: { data: WeatherResponse|AppError|undefined }) => {
    if (!data) {
        return <div className='WeatherForecast loading'>Loading...</div>
    }
    if (isAppError(data)) {
        return <div className='WeatherForecast errored'>Error - failed to load!</div>
    }

    const periodKeys = Object.keys(data.properties.periods);
    periodKeys.sort((a, b) => { return parseInt(a) - parseInt(b); });
    return (
        <div className='WeatherForecast'>
            <ul>
                <>{
                periodKeys.map(key => {
                    const periodData: WeatherPeriod = data.properties.periods[key];
                    return <PeriodDisplay key={key} dayData={periodData}></PeriodDisplay>
                })
                }</>
            </ul>
        </div>
    )
};

export default WeatherForecast;
