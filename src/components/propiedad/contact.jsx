import React , { useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import { updateFields,formTokko } from '../../redux/contactDucks'
import {getGroup_CustomTag} from '../../functions/functions_dev'

function Formulario(props){
    const dispatch = useDispatch();
    const settings = useSelector(store => store.settings)
    const [disabled,setDisabled] = useState(true);
    const [text,setText] = useState('')
    const property = props.property 
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
    dispatch(formTokko('Ficha web unidad',property.development.name,property.id))
    document.getElementById("formContact").reset()
    setText("Gracias por enviarnos tu consulta, en breve te responderemos.")
  }
    useEffect(() => {
        const update = () => {
            dispatch(updateFields(datos))
        }
        update()
    }, [datos])
    return(
        <section className="contacts section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">
              {/* ¿Dudas <span className="text-primary">o consultas?</span> */}
              ¿Querés más <span className={( property ? 'text-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>información?</span>
            </h2>
          </header>
          <header className="section-header wow fadeInLeft">
            <strong className="fade-title-left">contactanos</strong>
          </header>
          <div className="section-content">
            <div className="row-base row">
                <div class="col-address col-base col-md-4" style={{textAlign:'right', lineHeight:'1.6'}}>
                  <p>
                     {(property.development.description.split(".")[0])}.
                  </p>
                </div>
              <div className="col-base col-md-8">
                <form className="" onSubmit={sendForm} id="formContact">
                  <div className="row-field row">
                    <div className="col-field col-sm-6 col-md-4">
                      <div className="form-group">
                        <input
                          type="text "
                          className="form-control"
                          name="nombre"
                          placeholder="Nombre *"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group" style={{marginBottom:"8px"}} className="m-only">
                        <input
                          type="text "
                          className="form-control"
                          name="apellido"
                          placeholder="Apellido "
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email "
                          className="form-control"
                          name="email"
                          required
                          placeholder="Email * "
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-field col-sm-6 col-md-4">
                      <div className="form-group" id="d-only">
                        <input
                          type="text "
                          className="form-control"
                          name="apellido"
                          placeholder="Apellido "
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel "
                          className="form-control"
                          name="telefono"
                          placeholder="Teléfono *"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-field col-sm-12 col-md-4">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="text"
                          placeholder="Mensaje "
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 ">
                      <div style={{display:"flex",alignItems:"center"}} className={"" + (text === "" ? 'd-none' : 'd-block') + ' my-4'} class=" "><i  style={{color: "#b01b40", marginRight:".5rem"}} class={"fa fa-check text-primary " + (text === "" ? 'd-none' : 'd-block')}></i> {text}</div>
                  </div>
                  <div style={{alignItems:'center',justifyContent:"flex-end",marginTop:"2rem"}} className="form-both form-submit text-right">
                    <ReCAPTCHA sitekey={settings.keys.captcha} onChange={() => setDisabled(false)} />
                    <button disabled={disabled} style={{marginLeft:"2rem"}} type="submit " className={"btn btn-shadow-2 wow swing " + ( property ? 'bg-' + getGroup_CustomTag(property.development.custom_tags,"Emprendimientos").name.toLowerCase() : '')}>
                      Enviar <i className="icon-next"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Formulario
