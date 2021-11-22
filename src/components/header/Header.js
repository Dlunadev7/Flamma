import React, { useState } from 'react'
import { Navbar } from '../navbar/Navbar'
import { MenuMobile } from './MenuMobile'

import logoFlamma from '../../assets/images/logo_flamma.svg';

export const Header = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <header className="container-fluid header">
      <Navbar />
        <div className="header__menu__mobile__icon d-md-none">
        <img src={ logoFlamma } alt="logo-flamma" />
      </div>
      <div class={`header__button__container d-md-none ${ isClicked ? 'change' : '' }`} onClick={ handleClick }>
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
      {
        isClicked ?
          <MenuMobile />
          :
          ''
      }
    </header>
  )
}
