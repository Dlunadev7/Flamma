import React from 'react'

import arrowTop from '../../assets/images/arrow_up.svg'; 
import elipse_bg from '../../assets/images/elipse_bg.svg'
import { Form } from '../form/Form'


export const SectionForm = () => {
  return (
    <section className="section__five">
      <div className="col-10 m-auto d-flex flex-column justify-content-between align-items-center">
        <div className="d-flex flex-row justify-content-center align-items-center position-relative w-100">
          <p className="section__five__title montserrat-semibold">¿Queres más <span className="texto-primary">informacion?</span></p>
          <a href="#" className="section__five__arrow__top d-xl-block">
            <img src={ arrowTop }  alt="" />
          </a>
        </div>
        <div className="row section__five__container flex-lg-row flex-column align-items-lg-baseline align-items-center justify-content-center w-100">
          <div className="col-lg-4 my-5 d-flex align-items-center flex-column justify-content-center justify-content-lg-start align-items-lg-start ">
            <ul className="contact">
              <li className="contact__item sspro-light">
                XX XXXX-XXXX/XX XXXX
              </li>
              <li className="contact__item sspro-light">
                XX XXX XXXX-XXXX
              </li>
              <li className="contact__item sspro-light">
                Buenos Aires, Argentina.
              </li>
              <li className="contact__item sspro-light">
                TE. +XX XX XXXXXXXXX
              </li>
              <li className="contact__item sspro-light">
                Wa. +XX XX XXXXXXXXX
              </li>
            </ul>
            <p className="texto-primary contact__email sspro">Contactanos@flamma.com.ar</p>
          </div>
          <Form />
        </div>
      </div>
      <img className="elipse_bg d-xl-block" src={ elipse_bg }  alt="elipse_bg" />
    </section>
  )
}
