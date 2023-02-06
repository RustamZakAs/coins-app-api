import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { getEmptyImageSelector } from '../Redux/coins/selectors';
import { Link } from 'react-router-dom';

function CoinItem({ id, name, shortDescription, type, image }) {
    let [emptyImage, setEmptyImage] = useState("");

    const data = useSelector(getEmptyImageSelector);
    emptyImage = data;

    const linkE = `/edit/${id}`;
    const linkD = `/delete?idd=${id}&isDelete=true`;

    return (
        <>
            <div className='coin-item'>
                <div className='edit-image'>
                    <img className='coin' src={`data:image/${type ?? 'jpeg'};base64,${image ? image : emptyImage}`} />
                </div>
                <div className='edit-description'>
                    <p className='edit-description-name'>{name}</p>
                    <p className='edit-description-text'>{shortDescription}</p>
                </div>
                <div className='edit-buttons'>
                    <Link to={linkE}>
                        <button className='search' type="button">Edit</button>
                    </Link>
                    <Link to={linkD}>
                        <button className='search' type="button">Delete</button>
                    </Link>
                </div>
            </div>
            <hr />
        </>

    )
}

export default CoinItem