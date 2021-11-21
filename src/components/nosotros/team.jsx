import { useEffect } from "react";
import $ from 'jquery';
const Team = () => {
    const team = [
        {
            name:"CARLOS",
            lastname:"GOYENECHE",
            rango:"Director",
            email:'cgoyeneche@redsa.com.ar',
            image:"goyeneche.jpg",
            bio:"goyeneche.jpg"
        },
        {
            name:"FERNANDO JORGE",
            lastname:"SANCHEZ",
            rango:"Gerente de proyectos",
            email:'fjsanchez@redsa.com.ar',
            image:"sanchez.jpg",
            bio:"sanchez.jpg"
        },
        {
            name:"CARLOS",
            lastname:"NIÑO",
            rango:"Gerencia de obras",
            email:'cnino@redsa.com.ar',
            image:"nino.jpg",
            bio:"nino.jpg"
        },
        {
            name:"AGUSTIN",
            lastname:"DEL TORTO",
            rango:"Gerencia de obras",
            email:'adeltorto@redsa.com.ar',
            image:"torto.jpg",
            bio:"torto.jpg"
        },
        {
            name:"AGUSTIN",
            lastname:"SALERNO",
            rango:"Gerente Financiero",
            email:'asalerno@redsa.com.ar',
            image:"salerno.jpg",
            bio:"salerno.jpg"
        },
        {
            name:"ELENA",
            lastname:"SALOTTI",
            rango:"Asistente Admin - At. al cliente",
            email:'esalotti@redsa.com.ar',
            image:"salotti.jpg",
            bio:"salotti.jpg"
        },
        {
            name:"JAVIER",
            lastname:"PETERSEN",
            rango:"Gerente Admin. y de Tesoreria",
            email:'jpetersen@redsa.com.ar',
            image:"petersen.jpg",
            bio:"petersen.jpg"
        },
        {
            name:"LEONARDO",
            lastname:"DIAZ",
            rango:"Asesor Externo Permanente",
            email:'ldiaz@redsa.com.ar',
            image:"diaz.jpg",
            bio:"diaz.jpg"
        },
        {
            name:"KIMBERLEY",
            lastname:"GRAHAM",
            rango:"Gerencia de obras",
            email:'kgraham@redsa.com.ar',
            image:"graham.jpg",
            bio:"graham.jpg"
        },
        {
            name:"MARCELA",
            lastname:"ZUCCOTTI",
            rango:"Gerente de At. al cliente",
            email:'mzuccotti@redsa.com.ar',
            image:"zuccotti.jpg",
            bio:"zuccotti.jpg"
        },
        {
            name:"YAMILA",
            lastname:"LA VITOLA",
            rango:"Gerencia de proyectos",
            email:'lavitola@redsa.com.ar',
            image:"lavitola.jpg",
            bio:"vitola.jpg"
        },
        {
            name:"MARTIN",
            lastname:"LUNA",
            rango:"Seguridad e Higiene",
            email:'mluna@redsa.com.ar',
            image:"luna.jpg",
            bio:"luna.jpg"
        },
        {
            name:"MARIA JOSE",
            lastname:"SÁNCHEZ ZINNY",
            rango:"Asistente de Markenting",
            email:'mzinny@redsa.com.ar',
            image:"maria_zinny.jpg",
            bio:"sanchezzinny.jpg"
        },
        {
            name:"LUCIA",
            lastname:"PASTORI",
            rango:"Jefe administrativo contable",
            email:'lpastori@redsa.com.ar',
            image:"pastori.jpg",
            bio:"pastori.jpg"
        },
        {
            name:"CARLOS",
            lastname:"MEDINA",
            rango:"Asesor Comercial Senior",
            email:'cmedina@redsa.com.ar',
            image:"medina.jpg",
            bio:"medina.jpg"
        },
    ]
    useEffect(() => {
        $('.js-projects-gallery').each(function(){
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                removalDelay: 300,
                tLoading: 'Loading image #%curr%...',
                gallery: {
                   enabled: true,
                   navigateByImgClick: true,
                   preload:[0,1]
                },
                image: {
                   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                   titleSrc: function(item) {
                      return item.el.attr('title') + '<small></small>';
                   }
                }
    
            });
        });
    },[])
    return (
        <section id="services" class="services section">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title" style={{paddingBottom: "1em"}}>
                    Equipo <span class="text-primary">RED</span>
                    </h2>
                    <div class="entry" style={{textAlign: "center"}}>
                    <p class="entry-text">
                        Un grupo interdisciplinario y profesional, que conoce del
                        mercado y trabaja dando lo mejor de cada uno en cada
                        emprendimiento.
                    </p>
                    </div>
                </header>
                <div class="grid-team-section">
                    <div class="wow fadeInUp" style={{height: "100%"}}>
                    <div class="service-item">
                        <div>
                        <div class="img-hover-zoom">
                            <img
                            alt=""
                            class="team-member-image"
                            src="img/equipo/front/fernando_zinny.jpg"
                            />
                        </div>
                        <h4>Fernando <br /> Sánchez Zinny</h4>
                        <h5>Director Ejecutivo</h5>
                        <a href="mailto:fsz@redsa.com.ar">fsz@redsa.com.ar</a>
                        </div>

                        <div class="js-projects-gallery see-bio-button">
                        <a
                            href="img/equipo/zinny.jpg"
                            title="Fernando Sánchez Zinny"
                            class="small-btn"
                            >Ver Bio</a
                        >
                        </div>
                    </div>
                    </div>
                    <div class="wow fadeInUp" style={{height: "100%"}} data-wow-delay="0.2s">
                    <div class="service-item">
                        <div>
                        <div class="img-hover-zoom">
                            <img
                            alt=""
                            class="team-member-image"
                            src="img/equipo/front/llambias.jpg"
                            />
                        </div>
                        <div>
                            <h4>
                            Gustavo <br />
                            Llambías
                            </h4>
                        </div>
                        <h5>Director Ejecutivo</h5>
                        <a href="mailto:gall@redsa.com.ar">gall@redsa.com.ar</a>
                        </div>

                        <div class="js-projects-gallery see-bio-button">
                        <a
                            href="img/equipo/llambias.jpg"
                            title="Gustavo Llambías "
                            class="small-btn"
                            >Ver Bio</a
                        >
                        </div>
                    </div>
                    </div>
                    <div class="clearfix visible-sm"></div>
                    <div class="wow fadeInUp" style={{height: "100%"}} data-wow-delay="0.4s">
                    <div class="service-item">
                        <div>
                        <div class="img-hover-zoom">
                            <img
                            alt=""
                            class="team-member-image"
                            src="img/equipo/front/alexande.jpg"
                            />
                        </div>
                        <h4>Marcelo <br /> Alexander</h4>
                        <h5>Director Ejecutivo</h5>
                        <a href="mailto:malexander@redsa.com.ar"
                            >malexander@redsa.com.ar</a
                        >
                        </div>

                        <div class="js-projects-gallery see-bio-button">
                        <a
                            href="img/equipo/alexander.jpg"
                            title="Marcelo Alexander"
                            class="small-btn"
                            >Ver Bio</a
                        >
                        </div>
                    </div>
                    </div>
                    <div class="wow fadeInUp" style={{height: "100%"}} data-wow-delay="0.6s">
                        <div class="service-item">
                            <div>
                            <div class="img-hover-zoom">
                                <img
                                alt=""
                                class="team-member-image"
                                src="img/equipo/front/reyser.jpg"
                                />
                            </div>
                            <h4>Alejandro <br /> Reyser</h4>
                            <h5>Director Ejecutivo</h5>
                            <a href="mailto:areyser@redsa.com.ar">areyser@redsa.com.ar</a>
                            </div>

                            <div class="js-projects-gallery see-bio-button">
                            <a
                                href="img/equipo/reyser.jpg"
                                title="Alejandro Reyser"
                                class="small-btn"
                                >Ver Bio</a
                            >
                            </div>
                        </div>
                    </div>
                    {team.map((element, index) => (
                        <div class="wow fadeInUp" style={{height: "100%"}} data-wow-delay="0.6s">
                            <div class="service-item">
                                <div>
                                <div class="img-hover-zoom">
                                    <img
                                    alt=""
                                    class="team-member-image"
                                    src={"img/equipo/front/" + element.image}
                                    />
                                </div>
                                <h4 style={{minHeight: "3.5rem"}}>{element.name} <br /> {element.lastname}</h4>
                                <h5>{element.rango}</h5>
                                <a href={"mailto:" + element.email}>{element.email}</a>
                                </div>
                                <div class="js-projects-gallery see-bio-button">
                                <a
                                    href={"img/equipo/" + element.bio}
                                    title={element.name}
                                    class="small-btn"
                                    >Ver Bio</a
                                >
                                </div>
                            </div>
                        </div>
                    ))}
          
                </div>
            </div>
      </section>
    )
}

export default Team;