import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { getEmptyImageSelector } from '../Redux/coins/selectors';
import { Link } from 'react-router-dom';

function NewCoinItem() {
    let [emptyImage, setEmptyImage] = useState("");

    const data = useSelector(getEmptyImageSelector);
    emptyImage = data;
    return (
        <div>
            <div className='edit-image'>
                <img className='category-image coin' src={`data:image/${type ?? 'jpeg'};base64,${image ? image : emptyImage}`} />
            </div>
            <div className='edit-description'>
                <p className='edit-description-name'></p>
                <p className='edit-description-text'></p>
            </div>
            <div className='edit-buttons'>

            </div>
        </div>
    )
}

export default NewCoinItem