import React, { useEffect, useState } from 'react'

import AdvancedFilter from './AdvancedFilter'

export default function Filter() {
  let [isAdvanced, setIsAdvanced] = useState(false);
  let [upDownIndex, setUpDownIndex] = useState(1);
  const upDown = ['∧', '∨'];

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData) {
      //console.log(`${key}: ${value}`);
    }
  }
  
  const clickAdvanced = (e) => {
    setIsAdvanced(!isAdvanced);
    setUpDownIndex(upDownIndex === 1 ? 0 : 1);
  }

  return (
    <form onSubmit={onSubmit}>
      <p className='search' for="search">Searched text</p>
      <div className='search-form'>
        <input className='search' placeholder='Searched text' name="text"></input>
        <button className='search margin'><span>Search</span></button>
      </div>
      <p className='advanced-search-click' onClick={clickAdvanced}>Advanced filler {upDown[upDownIndex]}</p>
      {isAdvanced ? <AdvancedFilter /> : ""}
    </form>
  )
}
