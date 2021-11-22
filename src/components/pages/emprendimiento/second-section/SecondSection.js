import React from 'react'
import { DataCaracteristicas } from './DataCaracteristicas' 

import aera from '../../../../assets/images/aera.svg';


export const SecondSection = () => {

  const itemsCaracteristicas = DataCaracteristicas.map((item, i) => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start mb-3" key={ i }>
        <img src={ item.image } alt="" style={{ width: "65px" }} />
        <div>
          <p className="montserrat-semibold fs-24 text-center mt-4" style={{ letterSpacing: ".4rem" }}>
            { item.text }
          </p>
        </div>
      </div>
    )
  })

  return (
    <section className="main__emprendimiento__about">
      <div className="main__about__container col-11 m-auto justify-content-center align-items-center">
          <p className="text-uppercase montserrat-light fs-18">
            <span>Aera &nbsp; </span>
            &#62;
            <span> &nbsp; Emprendimientos </span>
            &nbsp;
            &#62;
            &nbsp;              
            Campos
          </p>
          <div className="h-100 d-flex align-items-center" style={{ marginTop: "5rem" }}>
            <div className="flex-lg-row flex-column w-100 justify-content-lg-between justify-content-center m-0">
          <div className="col-lg-4 py-5" style={{ maxWidth: '500px' }}>
            <p className="main__about__first__column montserrat-semibold fs-30">
              “Una intervención respetuosa y admirativa, que con coraje toma el complejo aera.”
            </p>
            <p className="main__first__column__description montserrat-light fs-24">
              Lorem ipsum dolor sit amet, onsectetur adipiscing elit,
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,<br /> quis nostrud exercitation.
            </p>
          </div>
          <div className="col-lg-2 py-5 mx-5">
            <p className="main__about__caracteristicas__title montserrat-semibold fs-30">Caracteristicas:</p>
            <div className="d-flex flex-column mt-5">
              { itemsCaracteristicas }
            </div>
          </div>
          <div className="col-lg-4 py-5 d-flex justify-content-center align-items-center">
            <img className="image__about" src={ aera } alt="Logotipo de la inmobiliaria" />
          </div>
            </div>
          </div>
      </div>
    </section>
  )
}
