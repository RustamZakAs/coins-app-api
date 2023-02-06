import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

import Coin from './Coin';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCatalogAction, setImagesAction } from '../Redux/coins/actions';
import { getCatalogSelector, getImagesSelector } from '../Redux/coins/selectors';

const Catalog = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    let [catalog, setCatalog] = useState([]);
    let [images, setImages] = useState([]);

    catalog = useSelector(getCatalogSelector);
    images = useSelector(getImagesSelector);

    useEffect(() => {
        async function fetchData() {
            if (!catalog && catalog == null && catalog?.length > 0)
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
            if (!images && images == null && images?.length > 0)
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
                {
                    catalog?.length > 0 ?
                        (
                            catalog?.map((item, index) => (
                                <Coin key={item.id} {...item} image={images.find(x => x.catalogId == item.id)?.image} />
                            ))
                        )
                        : ""
                }
            </div>
            <br />
            <hr />
            <Link to="/">Back</Link>
        </>
    )
}

export default Catalog