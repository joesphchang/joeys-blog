import React from 'react'
import { Link } from 'react-router-dom';

import Logo from './assets/logo-no-background.png';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <div className='navigation'>
        <div className='nav-logo'>
          <img src={Logo} alt='navigation logo' />
        </div>
        <div className="nav-links">
          <Link className='link' to='/?cat=art' >
            <h6>Art</h6>
          </Link>
          <Link className='link' to='/?cat=science' >
            <h6>Science</h6>
          </Link>
          <Link className='link' to='/?cat=cinema' >
            <h6>Cinema</h6>
          </Link>
          <Link className='link' to='/?cat=design' >
            <h6>Design</h6>
          </Link>
          <Link className='link' to='/?cat=food' >
            <h6>Food</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className='write'>
            <Link to='/write' className='link'>
                Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navigation