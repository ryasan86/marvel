import React from 'react'
import { MarvelSVG } from '../images'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <ul className='nav-list'>
      <li className='nav-item logo'><img src={MarvelSVG} alt='search' /></li>
      <li className='nav-item'>CHARACTERS</li>
      <li className='nav-item'>COMICS</li>
    </ul>
  )
}

export default NavBar
