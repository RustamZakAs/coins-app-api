import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { getEmptyImageSelector, getAvtorizedSelector } from '../Redux/coins/selectors';
import { Link } from 'react-router-dom';

function LoginItem({type, image}) {
    let [emptyImage, setEmptyImage] = useState("");
    let [avtorized, setAvtorized] = useState(false);

    emptyImage = useSelector(getEmptyImageSelector);
    avtorized = useSelector(getAvtorizedSelector);

    const link = avtorized ? "/admin" : "/login";

    return (
        <Link to={link}>
            <div className='login-item'>
                <img src={`data:image/${type ?? 'jpeg'};base64,${image ? image : emptyImage}`} />
                <span className='login-name'>Name</span>
            </div>
        </Link>
    )
}

export default LoginItem