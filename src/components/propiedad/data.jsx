import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import BreadCrumbs from "../breadcrumbs";
import Form from './contact'
import { getLocationProperty,getPrice,searchTour,searchYoutube,get_short_desc,addFavorites, getfavorites} from "../../functions/functions_property";
import { updateFields,formTokko } from '../../redux/contactDucks'
import { getFavoritesAction,clearFavoritesAction } from '../../redux/propertiesDucks'
import {getGroup_CustomTag} from '../../functions/functions_dev'
import $ from 'jquery';

import Map from "../map";

const Data = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const settings = useSelector((store) => store.settings);
  const property = useSelector((store) => store.properties.property).data;
  const [listFavorites,setListFavorites] = useState(getfavorites("prop",settings.short_name))

  const [max_caracters, setMax_caracter] = useState(700);
  const [hidden,setHidden] = useState(true)
  const [text,setText] = useState('')
  const [datos, setDatos] = useState({
      nombre:'',
      apellido:'',
      email:'',
      text:'',
  })
  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value, 
      })
  }
  const sendForm = (event) => {
    event.preventDefault()
    dispatch(formTokko('Propiedad',property.fake_address,property.id))
    document.getElementById("formContact").reset()
    setText("¡Mensaje enviado correctamente!")
}
const checkActive = (id) => {
  setListFavorites(getfavorites("prop",settings.short_name))
  dispatch(clearFavoritesAction())
  for (const iterator of getfavorites("prop",settings.short_name)) {
      //Por cada uno de los favoritos, traigo su respectiva data de la api
      dispatch(getFavoritesAction(iterator))
  }
} 

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
  })

  useEffect(() => {
      const update = () => {
          dispatch(updateFields(datos))
      }
      update()
  }, [datos])

  return property ? (
    <section className="data">
      <div className="container-  fluider container-sm">
        <div className="row align-items-start">
          {/* //MOBILE TAGS*/}
          <div className="col-12 tags d-flex d-lg-none align-items-start">
            <div className={"tag text-uppercase" + ( property ? 'bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }>
              {property.operations[0].operation_type}
            </div>
            <div className={"tag primary-tag ms-3 text-uppercase " + ( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() + ' border-' +  getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }>
              {property.type.name}
            </div>
            
          </div>
          {/* ////////////////  */}
          <div className="col-12">
            <div className="row">
              <div className="col-lg-7">
                <BreadCrumbs
                  props={[
                    { name: "Home", route: "", location: "" },
                    {
                      name: property.development.name,
                      route: settings.base_url + "desarrollo/" + property.development.id + "/" + (property.development.name).replace(/ /g,"-").toLowerCase(),
                      // location: "ventas",
                    }, 
                    {
                      name: property.real_address,
                      route: "",
                      location: "",
                      active: true,
                    },
                  ]}
                />
                <h2 className="mt-lg-5">
                  {property.fake_address}
                </h2>
                <h5 className="m-only" style={{marginTop:"2rem"}}>{property.description}</h5>
                <div className="tags mt-4 pb-4 mb-5 d-none d-lg-flex align-items-start">
                  {property.operations.map((item) =>(
                    <div className={"tag me-3 text-uppercase " + item.operation_type + ( property ? ' bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>
                      {item.operation_type}
                    </div>
                  ))}
                  <div className={"tag primary-tag ms-0 text-uppercase " + ( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() + ' border-' +  getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }>
                    {property.type.name}
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6 d-lg-block">
                    <div className="item-extra d-flex ">
                      <i className={"icon-room me-4 " +  ( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }></i>
                      {property.room_amount > 0 ? property.room_amount + " Ambiente" + (property.room_amount > 1 ? 's' : '') : '0 Ambientes'} 
                    </div>
                  </div>
                  <div className="col-6 d-lg-block">
                    <div className="item-extra d-flex ">
                      <i className={"icon-bathroom me-4 " +  ( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }></i>
                      {property.bathroom_amount > 0 ? "" + property.bathroom_amount + " Baño" + (property.bathroom_amount > 1 ? 's' : '') : '0 Baños' } 
                    </div>
                  </div>
                  <div className="col-6 d-lg-block mt-4">
                    <div className="item-extra d-flex ">
                      <i className={"icon-bed me-4 " +  ( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }></i>
                      {property.suite_amount  > 0 ? "" + property.suite_amount + ' Habitacion' + (property.suite_amount > 1 ? 'es' : '') : "0 Habitaciones"} 
                    </div>
                  </div>
                  <div className="col-6 d-lg-block mt-3">
                    <div className="item-extra d-flex ">
                      <i className={"icon-car me-4 " +  ( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '') }></i>
                      {property.parking_lot_amount > 0 ? "" + property.parking_lot_amount + ' Cochera' + (property.parking_lot_amount > 1 ? 's' : '')  : '0 Cocheras'}
                    </div>
                  </div>
                  <div className="col-6 mt-5 d-flex align-items-center ">
                    <div className="item-extra d-flex">
                      <i className="icon-noun_size_2965801-1 me-4"></i>
                      {property.total_surface > 0? new Intl.NumberFormat("de-DE").format(parseInt(property.total_surface).toFixed(0)) + " m2 totales " : '0 m2 totales'} 
                    </div>
                  </div>
                  <div className="col-6 mt-5 d-flex align-items-center ">
                    <div className="item-extra d-flex">
                      <i className="icon-noun_size_2965801-1 me-4"></i>
                      {property.roofed_surface > 0? "" + new Intl.NumberFormat("de-DE").format(parseInt(property.roofed_surface).toFixed(0)) + " m2 cubiertos " : '0 m2 cubiertos'} 
                    </div>
                  </div>
                    {/* <div className={"item-extra d-flex " + (property.custom_tags.length > 0?'d-block':'d-none')}>
                      <i className="icon-gym me-4"></i>
                      {property.custom_tags.map((item,index) =>(
                        <>
                          {item.name}
                          {index > 0 ? ' / ' : ''}
                        </>
                      ))}
                    </div> */}
                </div>
              </div>
              <div className={"col-lg-5 "}>
                <div className={"content-description d-flex flex-column align-items-start "  + ( property ? 'bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>
                  <p>
                    {property.description ? property.description : 'Unidad sin descripción.'}
                  <a
                    className="cursor-pointer see_description text-white"
                    onClick={() =>
                      max_caracters == 700
                        ? setMax_caracter(9999)
                        : setMax_caracter(700)
                    }
                  >
                    {property.description.length > 700
                      ? max_caracters == 700
                        ? "Ver más"
                        : "Ver menos"
                      : ""}
                  </a>
                </p>
                  <div className="content-price mt-auto">
                {property.operations.map((item)=>(
                  <h3 className={item.operation_type + (property.web_price ? '' : ' min-size')}>{property.web_price ? getPrice(item.prices[0]) : 'Precio a consultar'}</h3>
                ))}
              </div>
                </div>
              </div>
            </div>
          </div>
          {/* //DESKTOP TAGS*/}
          <div className="mt-5"></div>
          <div className="col-lg-12 mt-lg-5 pt-5d-lg-block">
            <div className="row">
              {property.tags.map((item, index) => (
                <div className="col-lg-3 col-6 mb-3">
                  <div className="item align-items-center d-flex">
                    <div className={"tick d-flex justify-content-center align-items-center me-3 " + ( property ? 'bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>
                      <i className="icon-tick"></i>
                    </div>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ///////////////// */}
          
          {/* <div className="col-12 d-block d-lg-none">
            <div className="row">
              {property.tags.map((item, index) => (
                <div className="col-6 mb-3">
                  <div className="item d-flex">
                    <div className="tick d-flex justify-content-center align-items-center me-3">
                      <i className="icon-tick"></i>
                    </div>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      {/* Planos */}
      {property.photos.filter(element => element.is_blueprint).length > 0 ? 
      <section className="section" style={{textAlign: "center"}} id="planos">
          <div style={{textAlign: "center"}}>
              <h2 className="plano-mobile" style={{zIndex:"99",position:"relative",display:"block",marginTop:"3em",marginBottom:"3rem"}}>Planos</h2>
          </div>
          <header class="container section-header wow fadeInRight " style={{marginBottom: "-100px"}}>
              <strong class="fade-title-right">Planos</strong>
          </header>
          <div class="js-projects-gallery">
            <section class="clients section ">
                <div class="">
                    <div class="images-grid-section">
                        <div class="project one image-grid-element">
                            <a href={property.photos.filter(element => element.is_blueprint)[0].original} title={property.photos.filter(element => element.is_blueprint)[0].description ? property.photos.filter(element => element.is_blueprint)[0].description : ''}  >
                                <figure style={{margin:"0"}}>
                                    <img alt="" src={property.photos.filter(element => element.is_blueprint)[0].original} />
                                    <figcaption>
                                    <div class={"project-zoom " + ( property ? ' bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}></div>
                                            <h4 class="project-category">
                                            {property.photos.filter(element => element.is_blueprint)[0].description}
                                        </h4>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                        {property.photos.filter(element => element.is_blueprint).length > 1 ?
                        <div class="project one image-grid-element ">
                            <a href={property.photos.filter(element => element.is_blueprint)[1].original} title={property.photos.filter(element => element.is_blueprint)[1].description ? property.photos.filter(element => element.is_blueprint)[1].description : ''}  >
                                <figure style={{margin:"0"}}>
                                    <img alt=""src={property.photos.filter(element => element.is_blueprint)[1].original} />
                                    <figcaption>
                                        <div class={"project-zoom " + ( property ? ' bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}></div>
                                        <h4 class="project-category">
                                           {property.photos.filter(element => element.is_blueprint)[1].description}
                                        </h4>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                      :''}         

                    </div>              
                </div>
            </section>
        </div>
      </section>
      :''}
      {/* Mapa */}
      <section className="section" style={{textAlign: "center"}} id="ubicacion">
          <div style={{textAlign: "center"}}>
              <h2 style={{display:"block",marginTop:"3em"}}>Ubicación</h2>
              <h5 style={{marginTop:"1.5rem",fontSize:"1.2rem"}}>{property.fake_address ? (property.fake_address +  ", " + property.location.full_location.split(" | ")[1]) + "." : ''}</h5>
          </div>
          <header class="container section-header wow fadeInRight " style={{marginBottom: "-100px"}}>
              <strong class="fade-title-right">Mapa</strong>
          </header>
          <div className="dev-map">
              <Map coordenadas={{ geo_lat: property.geo_lat, geo_long: property.geo_long }} />
          </div>
      </section>
      <Form property={property}/>
    </section>
  ) : (
    <div className="loading-section">
      <div className="lds-dual-ring"></div>{" "}
    </div>
  );
};
export default Data;
