import React from 'react';
import { Link } from 'react-router-dom';

export const MenuMobile = () => {
  return (
    <div className="header__menu__mobile d-lg-none">
      <div className="header__menu__container h-100 d-flex justify-content-center">
        <ul className="d-flex flex-column align-items-center justify-content-center p-0">
          <li className="montserrat-semibold fs-18 mt-5">
            <Link to="/" className="text-primary-orange">Inicio</Link> 
          </li>
          <li className="montserrat-semibold fs-18 mt-5">
            <Link to="desarrollo" className="text-primary-orange">Desarrollo</Link> 
          </li>
          <li className="montserrat-semibold fs-18 mt-5">
            <Link to="nosotros" className="text-primary-orange">Nosotros</Link> 
          </li>
          <li className="montserrat-semibold fs-18 mt-5">
            <Link to="contacto" className="text-primary-orange">Contacto</Link> 
          </li>
        </ul>
      </div>
    </div>
  )
}
