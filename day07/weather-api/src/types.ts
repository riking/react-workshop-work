
export type Timestamp = string;
export type TimestampRange = string;

export interface AppError {
    isError: true,
    generic?: any;
}

export const isAppError = (p: any): p is AppError => !!p.isError;

export interface WeatherResponse {
    "@context": any;
    geometry: any;
    properties: WeatherData;
}

export interface WeatherData {
    updated: Timestamp, /* iso8601 Thh:mm:ss+00:00 */
    units: "us";
    forecastGenerator: any;
    generatedAt: Timestamp;
    updateTime: Timestamp;
    validTimes: TimestampRange;
    elevation: any;
    periods: {[key: string]: WeatherPeriod};
}

export interface WeatherPeriod {
    number: number;
    name: string;
    startTime: Timestamp;
    endTime: Timestamp;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: "F" | "C";
    temperatureTrend: string;
    probabilityOfPrecipitation: WmoUnit;
    dewpoint: WmoUnit;
    relativeHumidity: WmoUnit;
    windSpeed: string;
    windDirection: "E" | "N" | "W" | "S" | "NE" | "NW" | "SW" | "SE" | "ENE" | "NNE" | "NNW" | "WNW" | "WSW" | "SSW" | "SSE" | "ESE";
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}

export interface WmoUnit {
    unitCode: string;
    value: number;
}