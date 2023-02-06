import React from 'react'
import Filter from './Filter'
import LoginItem from './LoginItem'

export default function Header({pagename}) {
  return (
    <div className='header'>
      <div className='header-header'>
        <p className='homepage'>{pagename}</p>
        <LoginItem />
      </div>
      <Filter />
    </div>
  )
}
