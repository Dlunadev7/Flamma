import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { ButtonAnimation } from "../buttons/btnWhitRadius/ButtonAnimation";

import edificioHome from '../../assets/images/edificio_home.png'
import circlePrimary from '../../assets/images/elipse_bg_home_primary.svg';
function About() {
  const dispatch = useDispatch();
  const settings = useSelector(store => store.settings)

  return (
    <>
        <section className="main__section__about d-flex justify-content-center align-items-center">
            <div className="col-10 m-auto d-flex flex-column">
            <div className="article__about__container d-flex flex-column flex-xl-row h-auto align-items-xl-center">
                <div className="article__about__container__image position-relative d-flex justify-content-center align-items-end justify-content-xl-start align-items-xl-start w-auto">
                    <img className="article__about__image" src={edificioHome} alt="edificio inicio" />
                    <p className="article__image__number montserrat-black">08</p>
                </div>
                <div className="article__container__description d-flex justify-content-center flex-column align-items-center justify-content-xl-start align-items-xl-start">
                    <div className="article__container__title d-flex align-items-end justify-content-center">
                        <p className="article__title m-0 sspro-regular text-center">
                            <span className="text-primary-orange">Proyectos </span>
                            <br/>
                            Creando patrimonios
                        </p>
                    </div>
                    <div className="article__container__text d-flex flex-column justify-content-between align-items-center justify-content-xl-evenly align-items-xl-start">
                        <p className="article__text montserrat-light text-center">
                            Somos una compañía desarrolladora inmobiliaria que nació en 1992. Contamos con una amplia experiencia en el mercado inmobiliario argentino. Hemos participado en el desarrollo de más de 1.000.000 m2 y administrado proyectos por más de U$S 1.000 millones, entre los más destacados: el Hotel Hilton de Puerto Madero, Torre Bouchard Plaza, Edificio Samsung, Edificios River View, Palacio Paz XXI, Edificio La Rural entre otros.
                        </p>
                        <Link to="nosotros">
                            <ButtonAnimation text="Conocemos" style={{ marginTop: '48px' }} />
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <img className="circlePrimary d-xl-block" src={circlePrimary} alt="svgCirclePrimary" />
        </section>
    </>

  )
}

export default About;
