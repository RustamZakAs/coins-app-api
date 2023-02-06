import React, { useEffect, useState } from 'react'
import { Link, Routes, Route, useNavigate, useParams, useQuery } from 'react-router-dom';

//import store from '../Redux/store';

import { useSelector } from 'react-redux';
import { getCountriesSelector, 
         getCompositionsSelector, 
         getTypesOfQualitySelector, 
         getEmptyImageSelector,
         getCatalogSelector,
         getImagesSelector,
       } from '../Redux/coins/selectors';

function EditItem({ type }) {
    const navigate = useNavigate();

    let { id, idd, isDelete } = useParams();
    //let { id, idd, isDelete } = useQuery();

    let [emptyImage, setEmptyImage] = useState("");
    emptyImage = useSelector(getEmptyImageSelector);
    let [image1, setImage1] = useState("");
    let [image2, setImage2] = useState("");

    let [countries, setCountries] = useState([]);
    let [compositions, setCompositions] = useState([]);
    let [typesofquality, setTypesOfQuality] = useState([]);

    let [coin, setCoin] = useState({});
    let [images, setImages] = useState([]);

    countries = useSelector(getCountriesSelector);
    //console.log(countries);
    compositions = useSelector(getCompositionsSelector);
    //console.log(compositions);
    typesofquality = useSelector(getTypesOfQualitySelector);
    //console.log(typesofquality);

    //console.log(id);
    const coin1 = useSelector(getCatalogSelector);
    //console.log(coin1)
    //console.log(coin1.find(x => x.id == id))
    coin = coin1.find(x => x.id == id);
    const image = useSelector(getImagesSelector);
    //console.log(image)
    //console.log(image.filter(x => x.catalogId == id))
    images = image.filter(x => x.catalogId == id);

    const onSaveSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (const [key, value] of formData) {
            //console.log(`${key}: ${value}`);
        }
    }

    const onDeleteClick = (e) => {

    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onImageChange = async (e) => {
        const { id, value } = e.target;

        const file = e.target.files[0];
        let base64 = await convertToBase64(file);
        //console.log(typeof (base64));
        if (id === 'image1') {
            setImage1(base64.slice(base64.indexOf(',') + 1));
        }
        else if (id === 'image2') {
            setImage2(base64.slice(base64.indexOf(',') + 1));
        }
    }

    return (
        <form className='edititem' onSubmit={onSaveSubmit}>
            <div className='edititem-col'>
                <label className='advanced-search-text'>Coin name</label>
                <input type='text' name="name" value={coin?.name}></input>

                <label className='advanced-search-text'>Face value</label>
                <input type='text' name='facevalue'></input>

                <label className='advanced-search-text'>Year of issue</label>
                <input type='number' name='year'></input>

                <label className='advanced-search-text'>Price</label>
                <input type='number' name='price'></input>

                <label className='advanced-search-text'>Country</label>
                <select name='country' value={coin?.countryId}>
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
            </div>
            <div className='edititem-col'>
                <label className='advanced-search-text'>Short description</label>
                <textarea name="shortDescription" rows="4" value={coin?.shortDescription}></textarea>

                <label className='advanced-search-text'>Long description</label>
                <textarea name="longDescription" rows="4" value={coin?.description}></textarea>

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

                <label className='advanced-search-text'>Weight</label>
                <input type='number' name='weight'></input>
            </div>
            <div className='edititem-col'>
                <div className='edititem-col'>
                    <label className='advanced-search-text'>Link to obverse image</label>
                    <input type='text' name="link1"></input>

                    <label className='advanced-search-text'>Link to reverse image</label>
                    <input type='text' name="link2"></input>

                    <div className='edititem-row'>
                        <img className='edititem-image' src={`data:image/${type ?? 'jpeg'};base64,${image1 ? image1 : emptyImage}`} />
                        <input type='file' accept="image/png, image/jpeg" id="image1" onChange={e => onImageChange(e)}></input>
                    </div>
                    <div className='edititem-row'>
                        <img className='edititem-image' src={`data:image/${type ?? 'jpeg'};base64,${image2 ? image2 : emptyImage}`} />
                        <input type='file' accept="image/png, image/jpeg" id="image2" onChange={e => onImageChange(e)}></input>
                    </div>
                </div>
                <div>
                    <button type="submit">Save</button>
                    {
                        idd && isDelete ? <button type="button" onClick={onDeleteClick}>Delete</button> : ""
                    }
                    <button type="button" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default EditItem