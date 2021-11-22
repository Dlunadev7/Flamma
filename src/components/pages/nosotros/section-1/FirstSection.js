import React from 'react'

import bgNosotros from '../../../../assets/images/slide-3-des2k.png';

export const FirstSection = () => {
  return (
    <section className="main__first__section__about" id="firstSection">
      <div className="main__first__section__container__about">
        <img className="main__first__section__background__about" src={ bgNosotros } alt="" />
        <div className="main__first__section__title__about d-flex align-items-end">
          <h1 className="main__title__about text-uppercase fs-60 montserrat-bold col-8">Conocemos el mercado <br /> argentino de real estate.</h1>
        </div>
      </div>
    </section>
  )
}
