import React from 'react'

import bgDev from '../../../assets/images/main-home.jpg';

export const FirstSection = () => {
  return (
    <section className="main__first__section__desarrollo d-flex" id="firstSection">
      <div className="main__first__section__container__desarrollo">
        <img className="main__first__section__background__desarrollo" src={ bgDev } alt="" />
        <div className="main__first__section__title__desarrollo d-flex align-items-end justify-content-end">
          <div className="main__first__section__title__container__desarrollo m-auto col-10 h-100 d-flex flex-column justify-content-center">
            <h1 className="text-uppercase fs-60 montserrat-bold text-end mb-5" style={{ letterSpacing: '.2rem' }}>Nuestros desarrollos</h1>
            <p className="montserrat-medium text-end fs-23">
              Una obra de arquitectura que funde diseño, arte y tecnología con un estilo único.
              <br /> Un proyecto que interpreta la ciudad con un respeto absoluto por su entorno.
              <br /> La síntesis perfecta entre pasado, presente y futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
