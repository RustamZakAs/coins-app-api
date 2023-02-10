import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { getEmptyImageSelector } from '../Redux/coins/selectors';
import { Link } from 'react-router-dom';

const Coin = ({ id, type, name, shortDescription, image }) => {
  let [emptyImage, setEmptyImage] = useState("");

  const data = useSelector(getEmptyImageSelector);
  emptyImage = data;

  const link = `/catalogitem/${id}`;

  return (
    <div className='coin-card'>
      <div>
        <Link to={link}>
          <p className='category_card__name'>{name}</p>
        </Link>
        <p className='coin-card-text'>{shortDescription ?? ""}</p>
      </div>
      <img className='category-image coin' src={`data:image/${type ?? 'jpeg'};base64,${image ? image : emptyImage}`} />
    </div>
  )
}
export default Coin;