import React from 'react'

import mapPicture from '../../../../assets/images/map.svg'


export const SecondSection = () => {
  return (
    <section className="main__second__section__contacto">
      <div className="main__second__section__container col-9 m-auto">
        <div className="d-flex flex-column">
          <div className="col-12 col-xl-6 d-flex flex-column">
            <p className="text-uppercase montserrat-regular fs-18 mb-5">
              <span className="text-primary-orange">Home &nbsp;</span>
              &#62;
              &nbsp;
              Nosotros
            </p>
          </div>
          <div className="main__map__container d-flex flex-column justify-content-center align-items-center mt-5">
            <p className="montserrat-bold fs-50 text-uppercase">
              Tenemos base en 
              <span className="text-primary-orange"> Argentina </span>
            </p>
            <div className="main__map__image__container mt-5">
              <img className="main__map__image" src={ mapPicture } alt="mapa" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
