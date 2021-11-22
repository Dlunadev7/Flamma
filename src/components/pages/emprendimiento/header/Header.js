import React from 'react'
import { Link } from 'react-router-dom';
import aera from '../../../../assets/images/aera.svg';

export const Header = () => {
  return (
    <>
      <div className="header__top bg-dark d-flex justify-content-center align-items-center position-relative">
        <div className="col-10 m-auto d-flex justify-content-center align-items-center">
          <p className="sspro-regular header__emprendimiento__title m-0">Un desarrollo de FLAMMA®</p>
          <div className="button__container">
            {/* <Link to="/"> */}
              <button className="button__emprendimiento sspro-regular d-flex justif-content-center align-items-center">
                Volver a Flamma
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className="main__second__header__emprendimiento d-flex justify-content-center align-items-center">
        <div className="col-10 m-auto d-flex justify-content-between">
          <div className="col-3">
            <img src={ aera } alt="logo company" />
          </div>
          <div className="col-7">
            <nav className="col-6 d-flex justify-content-between align-items-center w-100 h-100">
              <ul className="d-lg-flex flex-row justify-content-between m-0 w-100">
                <li className="sspro-regular fs-14 text-uppercase">
                  <a>Proyecto</a>
                </li>
                <li className="sspro-regular fs-14 text-uppercase">
                  <a>Unidades</a>
                </li>
                <li className="sspro-regular fs-14 text-uppercase">
                  <a>Ubicacion</a>
                </li>
                <li className="sspro-regular fs-14 text-uppercase">
                  <a>Contacto</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
