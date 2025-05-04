import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents">
        <h2>
            Order your favourite food here
        </h2>
        <p>Indulge in a culinary journey with flavors that excite and ingredients that inspire.</p>
        <button>View Menu</button>
       </div>
    </div>
  )
}

export default Header