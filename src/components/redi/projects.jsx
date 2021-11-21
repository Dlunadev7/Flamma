import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {get_cover} from '../../functions/functions_dev'
import {updateFiltersDevelopment, getDevelopmentsAction} from '../../redux/developmentsDucks'


const Lotes = () =>{
    const dispatch = useDispatch();
    const {data} = useSelector(store => store.developments.developments);
    const loading = useSelector(store => store.developments.loading );
    const settings  = useSelector((store) => store.settings);
    const codes = useSelector((store) => store.developments.stateCodes);
    const filtersDevelopment = useSelector((store) => store.developments.filtersDevelopment).status;



    return  (
        <section class="projects">
        <header class="section-header " style={{paddingBottom:"3em",paddingTop: "3em"}}>
            <h2 class="section-title ">MÓDULOS RED-i RESPIRA</h2>
        </header>

         <div>
             <div class="row grilled-desktop">
             {
                    !loading ? //Cargó?
                        data.meta.total_count > 0 ? // Hay resultados?
                            data.objects.map((element,index) => (
                                element.construction_status === 1 || element.construction_status === 2 ?
                                <div style={{margin:"0px 1px"}} key={index} className={"project modulo developments project-light col-sm-12 col-xl-12 col-md-4 col-lg-3 " + (element.construction_status === 1 ? 'disabled' : '')}>
                                    {element.construction_status === 2 ?
                                    <Link to={settings.base_url + "modulo/" + element.id + "/" + element.name.replace(/ /g,"-").toLowerCase()} title={element.publication_title} >
                                        <figure>
                                            <img alt=" " src={get_cover(element.photos).original} />
                                            <figcaption>
                                                <h3 className="project-title ">
                                                    {/* {element.name}  */}
                                                </h3>
                                                <h4 className="project-category ">
                                                    {codes[element.construction_status].name}
                                                </h4>
                                                <div className="project-zoom "></div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                    :
                                        <div title={element.publication_title} >
                                            <figure>
                                                <img alt=" " src={get_cover(element.photos).original} />
                                                <figcaption>
                                                    <h3 className="project-title ">
                                                        {/* {element.name}  */}
                                                    </h3>
                                                    <h4 className="project-category ">
                                                        {codes[element.construction_status].original}
                                                    </h4>
                                                    {/* <div className="project-zoom "></div> */}
                                                </figcaption>
                                            </figure>
                                        </div> 
                                    }

                                </div>
                                :''
                            )) 
                            : //No hay resultados
                            <div className="mt-5">
                                <h4 className="text-center mt-5">No hay resultados</h4>
                            </div>
                        : //Están cargando los desarrollos
                        <>
                            <div class="loader relative">
                                <div class="page-lines">
                                    <div class="container">
                                    <div class="col-line col-xs-4">
                                        <div class="line"></div>
                                    </div>
                                    <div class="col-line col-xs-4">
                                        <div class="line"></div>
                                    </div>
                                    <div class="col-line col-xs-4">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                    </div>
                                </div>
                                <div class="loader-brand">
                                    <div class="sk-folding-cube">
                                    <div class="sk-cube1 sk-cube"></div>
                                    <div class="sk-cube2 sk-cube"></div>
                                    <div class="sk-cube4 sk-cube"></div>
                                    <div class="sk-cube3 sk-cube"></div>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
         </div>
     </section>

    )
    
}

export default Lotes