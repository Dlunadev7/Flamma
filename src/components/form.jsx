import React , { useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import { updateFields,formTokko } from '../redux/contactDucks'

function Formulario(){
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
    return(
        <section class="contacts section">
        <div class="container">
          <header class="section-header">
            <h2 class="section-title">
              ¿Dudas <span class="text-primary">o consultas?</span>
            </h2>
          </header>
          <header class="section-header wow fadeInLeft">
            <strong class="fade-title-left">contactanos</strong>
          </header>
          <div class="section-content">
            <div class="row-base row">
              <div class="col-address col-base col-md-4">
                Cerviño 4449 7º Piso. C1425AHB<br />
                Buenos Aires. Argentina.<br />
                TE +54 11 4777.2100<br />
                WA +54 11 7045-1111<br />
                <a href="mailto:contactenos@redsa.com.ar "
                  >contactenos@redsa.com.ar</a
                ><br />
              </div>
              <div class="col-base col-md-8">
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
                      <div className="form-group"  id="d-only">
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
                  <div style={{alignItems:'center',justifyContent:"flex-end",marginTop:"2rem"}} className="both-form form-submit text-right">
                    <ReCAPTCHA sitekey={settings.keys.captcha} onChange={() => setDisabled(false)} />
                    <button style={{marginLeft:"2rem"}} type="submit " disabled={disabled} className={"btn btn-shadow-2 wow swing "}>
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