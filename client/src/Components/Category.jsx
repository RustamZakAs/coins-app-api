import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { getEmptyImageSelector } from '../Redux/coins/selectors';
import { Link } from 'react-router-dom';

const Category = ({type, nameAz, nameEn, nameRu, image, id}) => {
  let [emptyImage, setEmptyImage] = useState("");

  const data = useSelector(getEmptyImageSelector);
  emptyImage = data;

  const link = `/catalog/${id}`;

  return (
    <div className='category_card'>
        <p className='category_card__name'>{nameAz}</p>
        <p className=''>{nameRu}</p>
        <p className=''>{nameEn}</p>
        <Link to={link}>
          <p className='showall'>Show all</p>
        </Link>
        <img className='category-image' src={`data:image/${type ?? 'jpeg'};base64,${ image ? image : emptyImage }`} />
    </div>
  )
}
export default Category;