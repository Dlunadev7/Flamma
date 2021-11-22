import React from 'react'
import { infoItem } from './InformationItem'

export const ThirdSection = () => {

  const informationData = infoItem.map((item, i) => {
    return (
      <div className="main__information__item d-flex flex-xl-row flex-column align-items-center" key={ i }>
        <i className={`${ item.icon } d-flex align-items-center p-3 item__icon`}></i>
        <div className="d-flex flex-column align-items-xl-start align-items-center  text-center text-xl-left">
          <p className="text-uppercase fs-20 fw-bold m-0 main__information__item__title text-center text-xl-left montserrat-bold"> { item.title } </p>
          <span className="text__item text-uppercase fs-18 text-center montserrat-semibold">
            { item.text }
          </span>
        </div>
      </div>
    )
  })

  return (
    <section className="main__third__section m-0">
      <div className="col-9 m-auto">
        <div className="main__location__container d-flex flex-column flex-xl-row">
          <div className="main__location__map">
            <img className="main__image__location" src="https://www.impala.pt/wp-content/uploads/2019/01/Google-maps.jpg" alt="mapPicture" />
          </div>
          <div className="main__information d-flex flex-row flex-wrap">
            <div className="w-100 h-100 d-flex flex-wrap justify-content-around align-items-xl-center m-0">
              <div className="main__information__container d-flex justify-content-center align-items-center flex-wrap h-100">
                { informationData }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
