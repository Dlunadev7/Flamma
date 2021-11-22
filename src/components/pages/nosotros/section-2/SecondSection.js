import React from 'react'
import edificioNosotros from '../../../../assets/images/edificio_nosotros.png' 
import bgCircle from '../../../../assets/images/elipse_bg_contact.svg';

export const SecondSection = () => {
  return (
    <section className="main__second__section">
      <div className="main__second__section__container col-10 m-auto">
        <div className="d-flex flex-xl-row flex-column justify-content-center align-items-center">
          <div className="col-12 col-xl-6 d-flex flex-column">
            <p className="text-uppercase montserrat-regular fs-23 mb-5">
              <span className="text-primary-orange">Home &nbsp;</span>
              &#62;
              &nbsp;
              Nosotros
            </p>
            <div className="main__description__container">
              <p className="main__description__title sspro-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
          </div>
          <div className="col-12 col-xl-6 d-flex justify-content-xl-end justify-content-center">
            <img className="main__second__section__image d-md-flex" src={ edificioNosotros } alt="" style={{ marginTop: '20vh' }}/>
          </div>
        </div>
      </div>
      <img className="main__description__bg__circle" src={ bgCircle } alt="asd" />
    </section>
  )
}
