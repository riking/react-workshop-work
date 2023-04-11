import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DonutDetailResponse, DonutListingResponse } from '../types';
// import './ListingPage.css'

const ListingPage = () => {
    const [listingData, setListingData] = useState<DonutListingResponse | undefined>(undefined);

    useEffect(() => {
        axios.get<DonutListingResponse>(`https://grandcircusco.github.io/demo-apis/donuts.json`).then((resp) => {
            setListingData(resp.data);
        });
    }, []);
    return (
        <div className='ListingPage'>
            <h1>Donuts</h1>
            <ul>{listingData && (listingData.results.map(le => {
                return <li key={le.id}><Link to={`/donut/${le.id}`}>{le.name}</Link></li>;
            }))}</ul>
        </div>
    )
};

export default ListingPage;
