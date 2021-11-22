import React, { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import { updateFields,formTokko } from '../../redux/contactDucks'

import { ButtonAnimation } from '../buttons/btnWhitRadius/ButtonAnimation';


export const Form = () => {

  const dispatch = useDispatch();
  const settings = useSelector(store => store.settings)
  const [disabled,setDisabled] = useState(true);
  const [text,setText] = useState('')

  const [datos, setDatos] = useState({
    nombre:'',
    apellido:'',
    telefono:'',
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
    dispatch(formTokko('Consulta web',null,null))
    document.getElementById("formContact").reset()
    setText("Gracias por enviarnos tu consulta, en breve te responderemos.")
  }

  useEffect(() => {
      const update = () => {
          dispatch(updateFields(datos))
      }
      update()
  }, [datos])

  return (
    <form className="col-lg-8 d-flex flex-column" onSubmit={sendForm} id="formContact">
      <div className="row-field row d-flex align-items-baseline">
        <div className="col-field col-sm-6 col-md-4">
          <div className="form-group">
            <input
              type="text "
              className="form-control montserrat-regular pb-3"
              name="nombre"
              placeholder="Nombre"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div className="form-group" style={{marginBottom:"8px"}} >
            <input
              type="text "
              className="form-control montserrat-regular pb-3"
              name="email"
              placeholder="Email *"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-field col-sm-6 col-md-4">
          <div className="form-group"  id="d-only">
            <input
              type="text"
              className="form-control montserrat-regular pb-3"
              name="telefono"
              placeholder="Teléfono"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control montserrat-regular pb-3"
              name="empresa"
              placeholder="Empresa"
              required
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-field col-sm-12 col-md-4">
          <div className="form-group">
            <textarea
              className="form-control montserrat-regular pb-3"
              name="mensaje"
              placeholder="Mensaje"
              onChange={handleInputChange}
              autoComplete="off"
            ></textarea>
          </div>
          <ReCAPTCHA sitekey={settings.keys.captcha} onChange={() => setDisabled(false)} />
          <div className="d-flex form-submit text-right mt-5">
            <ButtonAnimation type="submit" text="Enviar" />
          </div>
        </div>
      </div>
      <div>
        <p className="fs-20 montserrat-semibold text-primary-orange">
          { text }
        </p>
      </div>
    </form>
  )
}
