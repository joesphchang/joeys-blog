import React from 'react'
import Logo from './assets/logo-footer-no-background.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='footer logo' />
      <span>Made with ❤ and <b>React.JS.</b></span>
    </footer>
  )
}

export default Footer