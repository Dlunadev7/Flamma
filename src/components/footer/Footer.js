import React from 'react'

import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { changeLocationAction } from "../../redux/themeDucks";
import { updateFields,formTokko } from '../../redux/contactDucks'
import ReCAPTCHA from "react-google-recaptcha";
import { useLocation, useHistory } from "react-router-dom";
import { getWhatsapp } from "../../functions/functions_contact";
import $ from 'jquery';

export const Footer = () => {

  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  
  const [disabled, setDisabled] = useState(true);
  const [text,setText] = useState('')
  const [coordenadas, setCoordenadas] = useState(5000);
  const settings = useSelector((store) => store.settings);
  const { data } = useSelector((store) => store.developments.development);
  const theme = useSelector((store) => store.theme);
  const curLocation = (useLocation().pathname.split(settings.base_url)[1])

  const [textWpp,setTextWpp] = useState("")
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      setCoordenadas($("footer").offset().top);
      // console.log(window.pageYOffset, coordenadas)
    };
  }, [setOffset]);

  function scrollTop() {
    $("html, body").scrollTop(0);
    return true;
  }


  const [datos, setDatos] = useState({
      email:'',
  })
  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value, 
      })
  }
  const sendForm = (event) => {
    event.preventDefault()
    dispatch(formTokko('Newsletter'))
    document.getElementById("formContact").reset()
    setText("¡Newsletter enviado correctamente!")
}
  useEffect(() => {
      const update = () => {
          dispatch(updateFields(datos))
      }
      update()
  }, [datos])

  useEffect(() => {
    if(data){
      if(curLocation.split("/")[0] !== "desarrollo"){
        setTextWpp("")
      }
      else{
        setTextWpp("Quería consultar sobre el emprendimiento " + data.name)
      }
    }
  },[curLocation,data])

  return (
    <footer className="footer p-4">
        <div class={"fixed-bar position-fixed "}>
      {/* <a href={'https://web.whatsapp.com/send?text=¡Hola!&amp;phone=+5493644571181'} target="_blank" class="icon-whatsapp contact-btn d-none d-lg-flex"></a> */}
      <a
        href={getWhatsapp(settings.contact.whatsapp.link,textWpp)}
        target="_blank"
        class="icon-whatsapp contact-btn d-flex"
      ></a>
      </div>
      <div className="col-10 m-auto">
        <ul className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between list-unstyled text-center">
          <li className="my-2 montserrat-regular fs-18">
            Flamma Real Estate Partners
          </li>
          <li className="my-2 montserrat-regular fs-18">
            Plataforma MediaCore® by <span className="mediahaus link-footer"> Mediahaus </span>
          </li>
          <li className="my-2 montserrat-regular fs-18">
            2021. Todos los derechos reservados
          </li>
        </ul>
      </div>
    </footer>
  )
}
