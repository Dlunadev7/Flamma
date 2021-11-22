import React from 'react'
import emprendimientoBg from '../../../../assets/images/main-home.jpg';

export const FirstSection = () => {
  return (
    <section className="main__first__section__emprendimiento">
      <div className="main__emprendimiento__container">
        <img className="emprendimientoBg" src={ emprendimientoBg } alt="background emprendimiento" />
         <div className="main__emprendimiento__text d-flex flex-column justify-content-end align-items-end">
            <div className="main__emprendimiento__text__container col-10 m-auto">
              <p className="text-uppercase montserrat-bold text-end fs-60">Campos</p>
              <p className="text-uppercase sspro-regular text-end fs-40 main__emprendimiento__subtitle">LOREM IPSUM DOLOR SIT AMET</p>
              <div>
                <p className="montserrat-medium fs-23 text-end">
                  Una obra de arquitectura que funde diseño, arte y tecnología con un estilo único.
                  <br />
                  Un proyecto que interpreta la ciudad con un respeto absoluto por su entorno.
                  <br />
                  La síntesis perfecta entre pasado, presente y futuro.
                </p>
              </div>
            </div>
         </div>
      </div>
    </section>
  )
}
