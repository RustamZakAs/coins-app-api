import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { getEmptyImageSelector } from '../Redux/coins/selectors';
import { Link } from 'react-router-dom';

function CatalogItem({ id, nameAz, nameEn, nameRu, shortDescription, description, image, type }) {
    let [emptyImage, setEmptyImage] = useState("");

    const data = useSelector(getEmptyImageSelector);
    emptyImage = data;

    return (
        <>
            <div>CatalogItem</div>
            <div className='catalog-item'>
                <div>
                    <img className='category-image coin' src={`data:image/${type ?? 'jpeg'};base64,${image ? image : emptyImage}`} />
                    <img className='category-image coin' src={`data:image/${type ?? 'jpeg'};base64,${image ? image : emptyImage}`} />
                </div>
                <div className='catalog-item-info'>
                    <p>{nameAz ?? ""}</p>
                    <p>{nameEn ?? ""}</p>
                    <p>{nameRu ?? ""}</p>
                    <p>{shortDescription ?? ""}</p>
                    <p>{description ?? ""}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Issuing Country</td>
                                <td>Azerbaijan</td>
                            </tr>
                            <tr>
                                <td>Composition</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Quality</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Denomination</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Width</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Thickness</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CatalogItem