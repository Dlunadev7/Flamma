import React from 'react';

import bgContacto from '../../../../assets/images/slide-3-desk3.png';
import bgCircle from '../../../../assets/images/elipse_bg_contact.svg';

export const FirstSection = () => {
  return (
    <section className="main__first__section__contact">
      <div className="main__first__section__container__contact">
        <img className="main__first__section__background__contact" src={ bgContacto } alt="" />
        <div className="main__first__section__title__contact d-flex align-items-end justify-content-end">
          <div className="main__first__section__title__container__contact col-10 h-100 d-flex flex-column justify-content-center">
            <h1 className="main__title__contacto__contact text-uppercase fs-60 montserrat-bold m-auto col-8 col-xl-9 text-right">Contactanos</h1>
          </div>
        </div>
      </div>
      <img className="bgCircle_contacto" src={ bgCircle } alt="bg circle" />
    </section>
  )
}
