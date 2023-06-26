import React from 'react'
import Logo from '../image/logo.png'
import './Header.css'

const Header = (props) => {
  // const {title} = props

  return (
    <nav>
      <img src={Logo} alt="" className='logo' />
      <a href="/">{props.title}</a>
    </nav>
  )
}

export default Header