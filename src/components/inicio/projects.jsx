import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPropertiesFeaturedAction } from "../../redux/propertiesDucks";
import { get_cover } from "../../functions/functions_dev";
import OwlCarousel from 'react-owl-carousel2';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ButtonGhostTwo } from "../buttons/btnGhost/ButtonGhost";



function Lotes() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPropertiesFeaturedAction())
    },[])

    const settings  = useSelector((store) => store.settings);
    const { data } = useSelector((store) => store.properties.properties_featured);
    const data_dev = useSelector((store) => store.developments.developments).data;
    const codes = useSelector((store) => store.developments.stateCodes);


    const options = {
        items: 1,
        nav: true,
        dots:false,
        rewind: true,
        autoplay: true, // True en caso de que haya +4 destacados
        autoplayTimeout:3000,
        loop:true, // True en caso de que haya +4 destacados 
        responsive : {
            920:{
                items: 4
            }
        }
    };

    const changePositions = (data) => {
        // console.log(data)
        // // spot(30792)
        // // palacio(4578)
        // const aux = data[0];
        
        // data[0] = data[3];
        // data[3] = aux;
        return data;
    }

  return data_dev ?  (
        <section className="projects section ">
            <div className="container ">
                <h2 className="section-title montserrat-bold">Nuestros desarrollos</h2>
            </div>
              <div className="section-content ">
                <OwlCarousel options={options}>
                    {
                        changePositions(data_dev.objects.filter(element => element.is_starred_on_web)).map((element,index) => (
                            <div className="project developments project-light">
                                <Link to={"desarrollo/" + element.id + "/" + ( element ? (element.name).replace(/ /g,"-").toLowerCase() : '')} title={element.publication_title} >
                                    <figure>
                                        <img alt=" " src={get_cover(element.photos).original} />
                                        <figcaption>
                                            <h3 className="project-title ">
                                                {element.name} 
                                            </h3>
                                            <div className="project-zoom "></div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
                {/* <div className="section-content ">
                    <div className="projects-carousel js-projects-carousel row ">
                        {
                            data_dev.objects.filter(element => element.is_starred_on_web).map((element,index) => (
                                <div className="project developments project-light col-4">
                                    <Link to={"desarrollo/" + element.id + "/" + ( element ? (element.name).replace(/ /g,"-").toLowerCase() : '')} title={element.publication_title} >
                                        <figure>
                                            <img alt=" " src={get_cover(element.photos).original} />
                                            <figcaption>
                                                <h3 className="project-title ">
                                                    {element.name} 
                                                </h3>
                                                <h4 className="project-category ">
                                                    {codes[element.construction_status].name}
                                                </h4>
                                                <div className="project-zoom "></div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </div>
                            ))
                    }
                    </div>
                </div> */}


                {/* <div className="section-content " style={{marginTop: "3.1em",textAlign:"center "}}>
                    <Link to={settings.base_url + "desarrollos"} className="btn btn-shadow-2 ">Ver todos los desarrollos <i className="icon-next "></i></Link>
                </div> */}
                <div className="d-flex w-100 align-items-center justify-content-center">
                    <Link to="desarrollos">
                        <ButtonGhostTwo text="Ver todos los desarrollos" />
                    </Link>
                </div>
            {/* </div> */}
    </section>
  ) : ''
}

export default Lotes;
