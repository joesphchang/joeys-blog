import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

import Logo from './assets/logo-no-background.png';

const Navigation = () => {
  
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navigation-container'>
      <div className='navigation'>
        <div className='nav-logo'>
          <Link to='/'>
          <img src={Logo} alt='navigation logo' />
          </Link>
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
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout} >Logout</span> : <Link className="link" to='/login'>Login</Link>}
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