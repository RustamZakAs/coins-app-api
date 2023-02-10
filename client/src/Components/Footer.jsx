import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(window.location.pathname);
  })

  return (
    <>
      <div className='footer'>
        {
          <Link to="/">
            <span>go to main page</span> 
            {/* className={href == "/" ? 'hidden' : 'visible'} */}
          </Link>
        }
      </div>
    </>
  )
}
