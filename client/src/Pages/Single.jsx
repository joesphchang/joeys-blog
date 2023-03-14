import React from 'react'
import { Link } from 'react-router-dom';

// Assets
import Logo from '../Components/assets/logo-color.png';
import Edit from '../Components/assets/edit.png';
import Delete from '../Components/assets/delete.png';
import Menu from '../Components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img  src={Logo} alt='' />
        <div className='user'>
          <img src={Logo} alt='' />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt='edit' />
            </Link>
            <img src={Delete} alt='delete' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae possimus eaque quibusdam repudiandae numquam velit ea ullam, laboriosam sed, officia in. Alias atque dicta rerum numquam. Natus, quasi porro.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at voluptatum, pariatur aut, nesciunt eaque inventore optio nisi ab nam ipsam quis assumenda dolor magnam modi rerum eum autem libero.</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single