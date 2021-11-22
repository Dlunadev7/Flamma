import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Red_i = () => {
    const settings  = useSelector((store) => store.settings);
    return (
        <section id="about " className="about section ">
            <div className="container ">
                <header className="section-header wow fadeInLeft " style={{marginLeft: "-90px", marginBottom: "-85px; "}}>
                    <strong className="fade-title-left ">Invertí</strong>
                </header>
                <header className="section-header ">
                    <h2 className="section-title ">Conocé <span className="text-primary ">RED-</span><span style={{textTransform: "lowercase"}}>i</span></h2>
                </header>
                
                <div className="section-content ">
                    <div className="row-base row ">
                        <div className="col-base col-sm-6 col-md-4 ">
                            <h3 className="col-about-title ">Solo después de estar 30 años en el mercado se alcanza lo que todos persiguen: ofrecer una alta rentabilidad, con un bajo riesgo.</h3>
                            <div className="col-about-info ">
                                <p>Red-i Respira es un programa innovador de inversión financiera con una rentabilidad superior a la del negocio inmobiliario tradicional.</p>
                                
                                <div className="section-content " id="d-only" style={{marginTop: "3.1em" , textAlign:"center"}}>
                                    <Link to={settings.base_url + "red-i"} className="btn btn-gray ">¿Querés ser inversor? <i className="icon-next "></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-base col-about-spec col-sm-6 col-md-4 ">
                            <h3 className="col-about-title ">Los diferenciales</h3>
                            <div class="service-item red-i ">
                                <img alt=" " src="img/img-icon/icon-tilde.png " />
                                <h4>Segura</h4>
                            </div>
                            <div class="service-item red-i">
                                <img alt=" " width="88px " src="img/img-icon/icon-tilde.png " />
                                <h4>Simple</h4>
                            </div>
                            <div class="service-item red-i">
                                <img alt=" " width="88px " src="img/img-icon/icon-tilde.png " />
                                <h4 class="text-start-lg">Rentabilidad superior</h4>
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
                        <div className="clearfix visible-sm "></div>
                        <div className="col-base col-about-img col-sm-6 col-md-4 ">
                            <img alt="RED-i " className="img-responsive " src="img/logo_red-i.png " />
                        </div>
                        <div className="section-content m-only" style={{marginTop: "3.1em" , textAlign:"center"}}>
                            {/* <a href="redi.html " className="btn btn-gray ">¿Querés ser inversor? <i className="icon-next "></i></a> */}
                            <Link to={settings.base_url + "red-i"} className="btn btn-gray ">¿Querés ser inversor? <i className="icon-next "></i></Link>
                        </div>
                        <div className="section-content " id="d-only"  style={{marginTop: "3.1em", textAlign:"center "}}>
                            {/* <a href="# " className="btn btn-gray " style={{marginTop: ".7em "}}>Ya soy inversor<i className="icon-next "></i></a> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Red_i