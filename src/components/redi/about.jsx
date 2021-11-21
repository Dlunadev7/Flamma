import { useEffect } from "react"
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const About = () => {
    const settings = useSelector((store) => store.settings);
    const curLocation = (useLocation().pathname.split(settings.base_url)[1])
    const view = curLocation ? curLocation.split("/")[0] : ''

    useEffect(() => {
        if(view === "red-i" || document.getElementById("gear1")){
            window.onscroll = function () {
                let gear1 = document.getElementById("gear1");
                let gear2 = document.getElementById("gear2");
                let gear3 = document.getElementById("gear3");
        
                const degree = 10000 / window.pageYOffset * 360;
                const neg = 360-degree
                if(gear1){
                    gear1.style.transform = "rotate(" + degree + "deg)";
                }
                if(gear2){
                    gear2.style.transform = "rotate(" + neg + "deg)";
                }
                if(gear3){
                    gear3.style.transform = "rotate(" + degree + "deg)";
                }
            };
        }

    })
    return (
        <>
        <section id="about" class="about">
        <div class="container">
          <div class="entry">
            <h3 class="entry-title" style={{fontSize: "2.5em"}}>
                Solo después de estar 30 años en el mercado se alcanza lo que todos persiguen: ofrecer una alta rentabilidad, con un bajo riesgo.
            </h3>
            <p class="entry-text"> 
                Red-i Respira es un programa innovador de inversión financiera con una rentabilidad superior a la del negocio inmobiliario tradicional. Con un ticket de entrada por debajo del promedio, uno puede participar del negocio, pero sin tener que convertirse en propietario. Tiene como objetivo darle una alternativa muy rentable y a la vez segura, a todos aquellos que buscan diversificar su portfolio de inversiones incorporando real estate.
            </p>
            <p class="entry-text"><h3><strong><span class="text-primary ">Hoy las grandes rentabilidades no necesitan de grandes inversiones.</span></strong></h3></p>
                <div class="col-sm-8 col-md-8 " style={{paddingLeft: "0px", marginTop:"40px"}}>
                    <h3 class="col-about-title ">Los diferenciales</h3>
                    <div class="service-item red-i ">
                        <img alt=" " src="img/img-icon/icon-tilde.png " />
                        <h4>Seguro</h4>
                    </div>
                    <div class="service-item red-i">
                        <img alt=" " width="88px " src="img/img-icon/icon-tilde.png " />
                        <h4>Simple</h4>
                    </div>
                    <div class="service-item red-i">
                        <img alt=" " width="88px " src="img/img-icon/icon-tilde.png " />
                        <h4>Rentabilidad superior</h4>
                    </div>
                        <div class="service-item red-i">
                        <img alt=" " width="88px " src="img/img-icon/icon-tilde.png " />
                        <h4>Accesible</h4>
                    </div>
                        <div class="service-item red-i">
                        <img alt=" " width="88px " src="img/img-icon/icon-tilde.png " />
                        <h4>Escalable</h4>
                    </div>
                </div>
          </div>
        </div>
      </section>
      
      <div class="container">
            <section style={{paddingTop:"5em",paddingBottom: "5em"}}>
                <header class="section-header ">
                    <header class="section-header wow fadeInLeft ">
                        <strong class="fade-title-left mobile-fade-left" style={{fontFamily:"Times New Roman",opacity:"1"}}><img style={{width:"10rem",transform: "scaleX(-1)"}} src="img/quote.svg"/></strong>
                    </header>
                    <h2 class="section-title " style={{lineHeight: "1.5em",position: "relative",zIndex:"9"}}>El programa de inversiones financiero garantizado por inmuebles</h2>
                </header>

                <header class="section-header wow fadeInRight ">
                    <strong class="fade-title-right mobile-fade-right" style={{fontFamily:"Times New Roman",opacity:"1"}}><img style={{width:"10rem"}} src="img/quote.svg"/></strong>
                </header>

                <p class="entry-text" style={{textAlign: "center",color:"white", paddingTop: "1em"}}> <span class="text-primary ">- Gustavo Llambias - <br /><div style={{fontSize:".8em"}}> Director Ejecutivo - RED </div></span></p>


            </section>
        </div>

        {/* <!--finaliza quote--> */}

        {/* <!-- Gears --> */}
        <div class="container">
            <section>
                <header class="section-header ">
                    <h2 class="section-title ">Dinámica del ciclo</h2>
                </header>

                <header class="section-header wow fadeInRight ">
                    <strong class="fade-title-right ">Dinámica</strong>
                </header>

                <p class="entry-text" style={{textAlign: "center",color:"white", paddingTop: "1em"}}> Cada módulo de RED-i Respira se basa en un ciclo de construcción de 3 edificios Respira Barrio.</p>

                <div class="gears-section">
                    <div class="gear-container" style={{marginTop: "5em"}}>
                        <div id="gear1-container">
                            <img id="gear1" src="img/img-icon/icon-gear1.png" alt="engranaje 1" />
                            <h4>Proyecto 1</h4>
                        </div>

                        <div id="gear2-container">
                            <img id="gear2" src="img/img-icon/icon-gear2.png" alt="engranaje 2" />
                            <h4>Proyecto 2</h4>
                        </div>

                        <div id="gear3-container">
                            <img id="gear3" src="img/img-icon/icon-gear3.png" alt="engranaje 3" />
                            <h4>Proyecto 3</h4>
                        </div>
                    </div>

                    <div class="project-description">
                        <h4>Proyecto 1</h4>
                        <p>El ciclo comenzará una vez obtenido del mercado comprador el equivalente al 30% de la inversión total del proyecto 1 (~ 25% de las unidades vendidas). Esto permitirá asegurar, junto al capital aportado por el inversor y RED en
                            su carácter de Sponsor, la finalización del mismo, aun no logrando nuevas ventas.</p>
                    </div>
                    <div class="project-description">
                        <h4>Proyecto 2</h4>
                        <p>El terreno del proyecto 2 se comprará, si y solo si, se encuentre asegurada la financiación para la finalización del proyecto 1. El proyecto 2 se pondrá en marcha una vez alcanzado un determinado nivel de ventas en el proyecto
                            1 o 2 que asegure la financiación del mismo sin mayor requerimiento de capital al suscripto inicialmente.</p>
                    </div>
                    <div class="project-description">
                        <h4>Proyecto 3</h4>
                        <p>La compra del terreno y puesta en marcha del proyecto 3 se ira definiendo en la medida en que se vayan cumpliendo los principales hitos de los proyectos 1 y 2 que permitan el cumplimiento de su desarrollo.</p>
                    </div>
                </div>
            </section>
        </div>
      </>
    )
}

export default About