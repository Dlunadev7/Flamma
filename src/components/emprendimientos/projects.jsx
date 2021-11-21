import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {get_cover} from '../../functions/functions_dev'
import {updateFiltersDevelopment, getDevelopmentsAction} from '../../redux/developmentsDucks'
import { ButtonAnimationGray } from '../buttons/btnWhitRadius/ButtonAnimation'

const Lotes = () =>{
    const dispatch = useDispatch();
    const {data} = useSelector(store => store.developments.developments);
    const loading = useSelector(store => store.developments.loading );
    const settings  = useSelector((store) => store.settings);
    const codes = useSelector((store) => store.developments.stateCodes);
    const filtersDevelopment = useSelector((store) => store.developments.filtersDevelopment).status;



    return  (
        <section className="projects">
            <div className="blog-tags d-flex flex-lg-row justify-content-xl-center align-items-baseline">
            <a  onClick={() => dispatch(updateFiltersDevelopment(''))} className="btn-filters-blog">
                <ButtonAnimationGray text="Todos"></ButtonAnimationGray>
            </a>
            <a onClick={() => dispatch(updateFiltersDevelopment(3))} className="btn-filters-blog">
                <ButtonAnimationGray text="En Pozo"></ButtonAnimationGray>
            </a>
            <a onClick={() => dispatch(updateFiltersDevelopment(4))} className="btn-filters-blog">
                <ButtonAnimationGray style={{width: '25rem'}} text="En construcción"></ButtonAnimationGray>
            </a>
            <a onClick={() => dispatch(updateFiltersDevelopment(6))} className="btn-filters-blog">
                <ButtonAnimationGray text="Terminado"></ButtonAnimationGray>
            </a>
            </div>
        <div>
            <div className="row m-auto justify-content-center">
                {
                    !loading ? //Cargó?
                        data.meta.total_count > 0 ? // Hay resultados?
                            data.objects.map((element,index) => (
                                <div key={index} className="project developments project-light col-sm-6 col-md-4 col-lg-3 m-2">
                                    {element.construction_status !== 2 && element.construction_status !== 1 ?
                                    <Link to={settings.base_url + "desarrollo/" + element.id + "/" + element.name.replace(/ /g,"-").toLowerCase()} title={element.publication_title} >
                                        <figure>
                                            <img className="img__projects__bg" alt="" src={get_cover(element.photos).image} />
                                            {
                                                element.custom_tags.find(e => e.name === '100vendido') ?
                                                <img src={settings.base_url + "img/vendido.png"} alt="" className="position-absolute absolute-top-right" />
                                                :
                                                ''
                                            }
                                            <figcaption>
                                                
                                                <h3 className="project-title ">
                                                    {element.name} 
                                                </h3>
                                                <div className="project-zoom">
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                    :''
                                    }

                                </div>
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