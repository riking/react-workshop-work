import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { PointsErrorResponse, PointsResponse } from '../types';
import './LocationPicker.css'

interface Props {
    setLocation: (gridId: string, gridpoint: string, placeName: string) => void;
}

// https://api.weather.gov/points/37.3592,-121.9242

const LocationPicker = ({setLocation}: Props) => {
    const [working, setWorking] = useState(false);
    const [lat, setLat] = useState("38.000");
    const [lon, setLon] = useState("-100.000");
    const [latlonValid, setLatlonValid] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string|undefined>(undefined);
    const submitCoords = () => {
        if (!latlonValid) return;
        setWorking(true);
        axios.get<PointsResponse>(`https://api.weather.gov/points/${lat},${lon}`)
        .then(resp => {
            setErrorMsg(undefined);
            const data: PointsResponse = resp.data;
            const relLoc = data.properties.relativeLocation;
            setLocation(
                data.properties.gridId,
                `${data.properties.gridX},${data.properties.gridY}`,
                `${relLoc.properties.city}, ${relLoc.properties.state}`);
        }).catch(err => {
            if (err.name === "AxiosError") {
                const axiosError: AxiosError<PointsErrorResponse> = err;
                if (axiosError.response) {
                    const errResp: PointsErrorResponse = axiosError.response.data;
                    setErrorMsg(errResp.detail);
                    console.log("Matched error response", errResp);
                } else {
                    console.log("AxiosError", axiosError);
                }
            } else {
                console.log("Unknown error", err);
            }
            document.body.blur();
        }).finally(() => {
            setWorking(false);
        })
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
        <button onClick={() => setLocation("DTX", "65,33", "Detroit, MI")} disabled={working}>Detroit</button>
        <button onClick={() => setLocation("MTR", "98,83", "San Jose, CA")} disabled={working}>San Jose Airport</button>
        <button onClick={() => setLocation("PDT", "55,110", "The Dalles, OR")} disabled={working}>The Dalles, Oregon</button>
        <button onClick={() => setLocation("LIX", "60,90", "New Orleans, LA")} disabled={working}>New Orleans</button> {/* MSY */}
        </div>
        <div className='latlon'>
            <button disabled style={{marginLeft: 0}}>Detect</button>
            Latitude:
            <input name="latitude" type="text" value={lat} onChange={(evt) => setLat(evt.target.value) } onBlur={() => updateLatlonValid() }></input>
            Longitude:
            <input name="latitude" type="text" value={lon} onChange={(evt) => setLon(evt.target.value) } onBlur={() => updateLatlonValid() }></input>
            <button disabled={working || !latlonValid} onClick={submitCoords}>Submit</button>
            {errorMsg && errorMsg}
        </div>
    </div>
  )
};

export default LocationPicker;
