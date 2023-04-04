import axios from 'axios';
import { useState } from 'react';
import './LocationPicker.css'

interface Props {
    setLocation: (airport: string, gridpoint: string) => void;
}

// https://api.weather.gov/points/37.3592,-121.9242

const LocationPicker = ({setLocation}: Props) => {
    const [working, setWorking] = useState(false);
    const [lat, setLat] = useState("-38.000");
    const [lon, setLon] = useState("100.000");
    const [latlonValid, setLatlonValid] = useState(true);
    const submitCoords = () => {
        if (!latlonValid) return;
        setWorking(true);
        axios.get("https://api.weather.gov/points/{")
    };
    const updateLatlonValid = () => {
        const latNumeric = parseFloat(lat);
        const lonNumeric = parseFloat(lon);
        if (isNaN(latNumeric) || isNaN(lonNumeric)) {
            setLatlonValid(false);
            return;
        }
        setLat(latNumeric.toPrecision(6));
        setLon(lonNumeric.toPrecision(6));
        setLatlonValid(true);
    };
  return (
    <div className='LocationPicker'>
        <div className='knownlocations'>
        Choose a location:
        <button onClick={() => setLocation("DTX", "65,33")} disabled={working}>Detroit</button>
        <button onClick={() => setLocation("MTR", "98,83")} disabled={working}>San Jose Airport</button>
        <button onClick={() => setLocation("PDT", "55,110")} disabled={working}>The Dalles, Oregon</button>
        <button onClick={() => setLocation("LIX", "60,90")} disabled={working}>New Orleans</button> {/* MSY */}
        </div>
        <div className='latlon'>
            Latitude:
            <input name="latitude" type="text" value={lat} onChange={(evt) => setLat(evt.target.value) } onBlur={() => updateLatlonValid() }></input>
            Longitude:
            <input name="latitude" type="text" value={lon} onChange={(evt) => setLon(evt.target.value) } onBlur={() => updateLatlonValid() }></input>
            <button disabled={working || !latlonValid}>Submit</button>
        </div>
    </div>
  )
};

export default LocationPicker;
