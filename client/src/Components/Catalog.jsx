import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

import Coin from './Coin';

import { useDispatch } from 'react-redux';
import { setCatalogAction, setImagesAction } from '../Redux/coins/actions';

const Catalog = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    let [catalog, setCatalog] = useState([]);
    let [images, setImages] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await fetch(`http://localhost:8081/catalogbycategory/${id}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setCatalog(data);
                    dispatch(setCatalogAction(data ?? []));
                })
                .catch(err => console.error(err));
        }
        async function fetchDataImage() {
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
        fetchDataImage();
    }, [])

    return (
        <>
            <div>Catalog {id}</div>
            <div className='coins'>
                {catalog?.map((item, index) => (
                    <Coin key={item.id} {...item} image={images.find(x => x.catalogId == item.id)?.image} />
                ))}
            </div>
            <br />
            <hr />
            <Link to="/">Back</Link>
        </>
    )
}

export default Catalog