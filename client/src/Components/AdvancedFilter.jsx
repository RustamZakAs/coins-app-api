import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { setCountriesAction, setCompositionsAction, setTypesOfQualityAction } from '../Redux/coins/actions';

import { useSelector } from 'react-redux';
import { getCountriesSelector, getCompositionsSelector, getTypesOfQualitySelector } from '../Redux/coins/selectors';

function AdvancedFilter() {
    const dispatch = useDispatch();
    let [countries, setCountries] = useState([]);
    let [compositions, setCompositions] = useState([]);
    let [typesofquality, setTypesOfQuality] = useState([]);

    countries = useSelector(getCountriesSelector);
    //console.log(countries);
    compositions = useSelector(getCompositionsSelector);
    //console.log(compositions);
    typesofquality = useSelector(getTypesOfQualitySelector);
    //console.log(typesofquality);

    useEffect(() => {
        async function fetchData() {
            if (!countries || countries.length <= 0)
                await fetch('http://localhost:8081/countries', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setCountries(data);
                        dispatch(setCountriesAction(data ?? []));
                    })
                    .catch(err => console.error(err));

            if (!compositions || compositions.length <= 0)
                await fetch('http://localhost:8081/compositions', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setCompositions(data)
                        dispatch(setCompositionsAction(data ?? []))
                    }
                    )
                    .catch(err => console.error(err));

            if (!typesofquality || typesofquality.length <= 0)
                await fetch('http://localhost:8081/typesofquality', {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setTypesOfQuality(data)
                        dispatch(setTypesOfQualityAction(data ?? []))
                    })
                    .catch(err => console.error(err));
        }
        fetchData();
    }, [])
    return (
        <div className='advanced-search'>
            <div className='advanced-col'>
                <label className='advanced-search-text'>Issuing country</label>
                <select name='country'>
                    <option value=""></option>
                    {
                        countries?.length > 0 ?
                        (
                            countries?.map((item, index) => (
                                <option key={index} value={item.id}>{item.nameAz}</option>
                            ))
                        ) : ""
                    }
                </select>
                <label className='advanced-search-text'>Metal</label>
                <select name="composition">
                    <option value=""></option>
                    {
                        compositions?.length > 0 ?
                        (
                            compositions?.map((item, index) => (
                                <option key={index} value={item.id}>{item.nameAz}</option>
                            ))
                        ) : ""
                    }
                </select>
                <label className='advanced-search-text'>Quality of the coin</label>
                <select name='quality'>
                    <option value=""></option>
                    {
                        typesofquality?.length > 0 ?
                        (
                            typesofquality?.map((item, index) => (
                                <option key={index} value={item.id}>{item.nameAz}</option>
                            ))
                        ) : ""
                    }
                </select>
            </div>
            <div className='advanced-col'>
                <label className='advanced-search-text'>Price</label>
                <div>
                    <span>from</span>
                    <input type="number" placeholder='min' name="minPrice"></input>
                    <span>to</span>
                    <input type="number" placeholder='max' name="maxPrice"></input>
                </div>
                <label className='advanced-search-text'>Year of issue</label>
                <div>
                    <span>from</span>
                    <input type="number" placeholder='year' name="minYear"></input>
                    <span>to</span>
                    <input type="number" placeholder='year' name="maxYear"></input>
                </div>
            </div>
        </div>
    )
}

export default AdvancedFilter