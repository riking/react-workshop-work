import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DonutDetailResponse } from '../types';
import CartContext from './CartContext';
// import './DetailPage.css'

const DetailPage = () => {
    const [listingData, setListingData] = useState<DonutDetailResponse>();
    const params = useParams();
    const cart = useContext(CartContext);

    useEffect(() => {
        if (!params.id) {
            return;
        }
        axios.get<DonutDetailResponse>(`https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(params.id)}.json`).then((resp) => {
            setListingData(resp.data);
        });
    }, [params.id]);

    if (!listingData) {
        return <p>Loading...</p>
    }

    return (
        <div className='DetailPage'>
            <h1>Donut <button disabled>Add to Cart</button></h1>
            <p>Name: {listingData.name}</p>
            <p>Calories: {listingData.calories}</p>
            {
                (listingData.extras) ? (<>
                    <p>Extras:</p>
                    <ul>
                        {listingData.extras.map(e => <li key={e}>{e}</li>)}
                    </ul>
                </>) : <></>
            }
            <img src={listingData.photo} alt={`Photo of the ${listingData.name} donut`} />
            <p>Photo provided by <a href={listingData.photo_attribution}>{listingData.photo_attribution}</a></p>
        </div>
    )
};

export default DetailPage;
