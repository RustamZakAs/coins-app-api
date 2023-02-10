import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getEmptyImageSelector, getCharacteristicsSelector } from '../Redux/coins/selectors';

function CatalogItem({ nameAz, nameEn, nameRu, countryId, shortDescription, description, type }) {
    let [emptyImage, setEmptyImage] = useState("");
    let [characteristics, setCharacteristics] = useState({});
    let [images, setImages] = useState([]);

    const { id } = useParams();

    emptyImage = useSelector(getEmptyImageSelector);
    characteristics = useSelector(store => store.catalogReducer.characteristics.find(x => x.coinId == id));
    images = useSelector(store => store.catalogReducer.images.filter(x => x.catalogId == id));

    return (
        <>
            {/* <div>CatalogItem</div> */}
            <div className='catalog-item'>
                <div>
                    {
                        images?.length > 0 ?
                            (
                                images?.map((item, index) => (
                                    <img className='category-image coin' src={`data:image/${item.type ?? 'jpeg'};base64,${item.image ? item.image : emptyImage}`} />
                                ))
                            )
                            : ""
                    }
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
                                <td>{countryId ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Composition</td>
                                <td>{characteristics?.compositionId ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Quality</td>
                                <td>{characteristics?.qualityId ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Denomination</td>
                                <td>{characteristics?.denomination ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{characteristics?.fromYear ?? ""}-{characteristics?.toYear ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{characteristics?.weight ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Width</td>
                                <td>{characteristics?.width ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>{characteristics?.height ?? ""}</td>
                            </tr>
                            <tr>
                                <td>Thickness</td>
                                <td>{characteristics?.thickness ?? ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CatalogItem