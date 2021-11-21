import React from 'react'

import flammaLogo from '../../assets/images/logo_flamma.svg'

export const Sidebar = () => {
  return (
    <>
      <aside className="sidebar d-lg-block">
      <div className="brand">
        <img className="brand__image" src={ flammaLogo } alt="foto" />
      </div>
        <div className="sidebar__vertical h-100 d-flex flex-column justify-content-end align-items-center">
          <div className="sidebar__vertical__container d-flex flex-column align-items-center justify-content-between h-50 w-100">
            <div className="vertical__title__container">
              <p className="vertical__title montserrat-regular fw-bold"> Su proyecto, nuestro compromiso </p>
            </div>
            <nav className="vertical__social__network">
              <ul className="vertical__social__container d-flex flex-column justify-content-around h-100">
                <li className="vertical__social__item">
                  <a href="#home">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li className="vertical__social__item">
                  <a href="#home">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li className="vertical__social__item">
                  <a href="#home">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li className="vertical__social__item">
                  <a href="#home">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  )
}
