import React from 'react'

import edificioNosotros1 from '../../../../assets/images/edificio1_nosotros.jpg'
import edificioNosotros2 from '../../../../assets/images/edificio2_nosotros.jpg'
import edificioNosotros3 from '../../../../assets/images/edificio3_nosotros.jpg'
import bgCircleNosotros from '../../../../assets/images/elipse_bg_nosotros.svg'
import bgCircleBottomNosotros from '../../../../assets/images/elipse_bottom_nosotros.svg'


export const ThirdSection = () => {
  return (
    <section className="main__third__section">
      <div className="main__third__section__container container-fluid p-0 m-0">
        <div className="col-10 m-auto d-flex flex-column justify-content-between h-100">
          <div className="d-flex">
            <article className="main__third__section__article">
              <div className="article__image__container">
                <img src={ edificioNosotros1 } alt="" />
              </div>
              <div className="article__description__container">
                <div className="article__description__position d-flex flex-column">
                  <p className="montserrat-black text-year">+06</p>
                  <p className="article__description__title montserrat-extrabold text-uppercase">años de <br /> experiencia</p>
                </div>
              </div>
            </article>
          </div>
          <div className="d-flex justify-content-end">
            <article className="main__third__section__article">
              <div className="article__image__container">
                <img src={ edificioNosotros2 } alt="" />
              </div>
              <div className="article__description__container">
                <div className="article__description__position d-flex flex-column">
                  <p className="montserrat-black text-year text-aligned-left">+08</p>
                  <p className="article__description__title montserrat-extrabold text-uppercase text-right">obras <br /> construídas</p>
                </div>
              </div>
            </article>
          </div>
          <div className="d-flex">
            <article className="main__third__section__article">
              <div className="article__image__container">
                <img src={ edificioNosotros3 } alt="" />
              </div>
              <div className="article__description__container">
                <div className="article__description__position article__position--2 d-flex flex-column">
                  <p className="montserrat-black text-year text-year-primary text-year-last">+15.000</p>
                  <p className="article__description__title montserrat-extrabold text-uppercase text-primary-orange">m2 <br /> construídos</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <img className="bgCircle_nosotros d-lg-block" src={ bgCircleNosotros } alt="background-circle" />
      <img className="bgCircle_nosotros__bottom d-lg-block" src={ bgCircleBottomNosotros } alt="background-circle" />

    </section>
  )
}
