import { useSelector,useDispatch } from "react-redux";
import React , { useState, useEffect} from 'react'
import { updateFields,formTokko } from '../../redux/contactDucks'
import {get_shortDescription, getGroup_CustomTag} from '../../functions/functions_dev'
import BreadCrumbs from "../breadcrumbs";

const Data = () => {
  // Store redux 
  const settings = useSelector(store => store.settings)
  const { data } = useSelector((store) => store.developments.development);


    const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [datos, setDatos] = useState({
        nombre:'',
        email:'',
        empresa:'',
        phone:'',
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
      // dispatch(formTokko('Contacto',null))
  }
    useEffect(() => {
        const update = () => {
            dispatch(updateFields(datos))
        }
        update()
    }, [datos])
  
    console.log(datos);
  // Render
  return data ? (
    <section class="section " id="proyectos" style={{marginTop: "10.1em "}}>
      <div class="container ">
        <div style={{marginLeft:"1em"}}>
              <BreadCrumbs
                props={[
                  { name: "Home", route: settings.base_url, location: "" },
                  { name: "Desarrollos", route:  settings.base_url + "desarrollos", location: "" },
                  {
                    name: data.name,
                    route:'',
                    active:true
                  }
                ]}
              />
          </div>
          <div class="lading-project-about">
              <div class="" style={{margin: "0 1em"}}>
                  <h3 class="">“ {data.publication_title} ”</h3>
                  <p style={{marginTop: "1.5em;"}}>{get_shortDescription(data.description).description}</p>
                  {
                    (data.files.length > 0 ?
                    <a target="_blank" href={data.files[data.files.length - 1].file} style={{display:"flex",alignItems:"center"}} className={"btn " +( data ? 'bg-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')}><i style={{fontSize: "1.1rem",marginRight:".5rem"}} className="icon-download"></i> Descargar presentación</a>
                    :''
                  )}
              </div>
              <div style={{margin: "0 1em"}}>
                  <h3 class="">Características:</h3>
                  <div className="amenities-mobile" style={{margintTop: "3.5em" , marginBottom: "5em"}}>
                      <i className={"icon-icon-star " +  ( data ? 'text-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')} style={{fontSize:'3rem'}}></i>
                      {/* <img alt=" " src={settings.base_url + "img/img-icon/icon-star.svg"} width="45px" /> */}
                      <h4 style={{marginBottom: "2em"}}>AMENITIES</h4>
                      <i className={"icon-icon-graph " +  ( data ? 'text-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')} style={{fontSize:'3rem'}}></i>
                      <h4  style={{marginBottom: "2em"}}>OPORTUNIDAD</h4>
                      <i className={"icon-icon-location " +  ( data ? 'text-' + getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '')} style={{fontSize:'3rem'}}></i>
                      <h4> UBICACIÓN</h4>
                  </div>
              </div>
              <div class="text-center" id="d-only" style={{margin: "1em",marginTop: "4em",display: "flex", alignItems: "flex-start",justifyContent: "center"}}>
                  <img alt=" " src={settings.base_url + "img/logos/"+ ( data ? getGroup_CustomTag(data.custom_tags,"Emprendimientos").name.toLowerCase() : '') +".svg"} width="200px" />
              </div>
          </div>
      </div>
</section>
  ) : (
    <div className="loading-section">
      <div className="lds-dual-ring"></div>{" "}
    </div>
  );
};

export default Data;
