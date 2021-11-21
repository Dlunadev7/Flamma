import BreadCrumbs from "../breadcrumbs";
import { useState } from "react";
import { useSelector } from "react-redux";

const About = () => {

  return (
    <section id="about" class="about">
      <div class="container__about">
        <div class="entry">
          <h3 class="entry-title">
            Conocemos el mercado argentino de real estate.
          </h3>
          {/* <p class="entry-text">
            Somos una compañía desarrolladora inmobiliaria que nació en
            1992. Contamos con una amplia experiencia en el mercado
            inmobiliario argentino. Hemos participado en el desarrollo de
            más de <strong>1.000.000 m2 </strong>y administrado proyectos
            por más de <strong>U$S 1.000 millones</strong>, entre los más
            destacados: el Hotel Hilton de Puerto Madero, Torre Bouchard
            Plaza, Edificio Samsung, Edifcios River View, Palacio Paz XXI,
            Edificio La Rural entre otros.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
