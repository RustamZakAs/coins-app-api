import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

import CoinItem from './CoinItem';

import { useDispatch } from 'react-redux';
import { setCatalogAction, setImagesAction } from '../Redux/coins/actions';

function Admin() {
    const dispatch = useDispatch();
    let [catalog, setCatalog] = useState([]);
    let [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (!catalog || catalog.length <= 0)
                await fetch('http://localhost:8081/catalog', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setCatalog(data);
                        dispatch(setCatalogAction(data ?? []));
                    })
                    .catch(err => console.error(err));

            if (!images || images.length <= 0)
                await fetch('http://localhost:8081/images', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setImages(data);
                        dispatch(setImagesAction(data ?? []));
                    })
                    .catch(err => console.error(err));
        }
        fetchData();
    }, [])

    return (
        <>
            <div>Admin</div>
            {
                catalog?.map((item, index) => (<CoinItem key={index} {...item} {...images.find(x => x.catalogId === item.id)} />))
            }
        </>
    )
}

export default Admin