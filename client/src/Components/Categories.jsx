import React, { useEffect, useState } from 'react'

import Category from './Category';

import { useDispatch } from 'react-redux';
import { setCategoriesAction, setCategoriesImagesAction } from '../Redux/coins/actions';

import { useSelector } from 'react-redux';
import { getCategoriesSelector, getCategoriesImagesSelector } from '../Redux/coins/selectors';

const Categories = () => {
    const dispatch = useDispatch();

    let [categories, setCategories] = useState([]);
    let [images, setImages] = useState([]);

    categories = useSelector(getCategoriesSelector);
    images = useSelector(getCategoriesImagesSelector);

    useEffect(() => {
        async function fetchData() {
            if (!categories || categories == null || categories?.length <= 0)
                await fetch('http://localhost:8081/categories', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setCategories(data);
                        dispatch(setCategoriesAction(data ?? []));
                    })
                    .catch(err => console.error(err));

            if (!images || images == null || images?.length <= 0)
                await fetch('http://localhost:8081/images', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setImages(data);
                        dispatch(setCategoriesImagesAction(data ?? []));
                    })
                    .catch(err => console.error(err));
        }
        fetchData();
    }, [])

    return (
        <div className="categories">
            {
                categories?.length > 0 ?
                (categories?.map((item, index) => (
                    <Category key={item?.id} {...item} image={images[index]?.image} />
                ))) : ""
            }
        </div>
    )
}
export default Categories;