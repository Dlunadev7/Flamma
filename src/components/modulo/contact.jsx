import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
import { updateFields,formTokko } from '../../redux/contactDucks'
import {get_shortDescription, getGroup_CustomTag} from '../../functions/functions_dev'

 
const Contact = (props) => {
    const dispatch = useDispatch();
    const { data } = useSelector((store) => store.developments.development);
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
        dispatch(formTokko('RED-i Respira',data.name,data.id))
        document.getElementById("formContact").reset()
        setText("Gracias por enviarnos tu consulta, en breve te responderemos.")
  }
    useEffect(() => {
        const update = () => {
            dispatch(updateFields(datos))
        }
        update()
    }, [datos])
    return data ?(
        <section class="contacts section " id="contacto">
            <div class="container ">
                <header class="section-header ">
                    <h2 class="section-title ">¿Querés ser <span style={{color:"#b01b40"}}> inversor RED-I?</span></h2>
                </header>
                <header class="section-header wow fadeInLeft ">
                    <strong class="fade-title-left ">Contactenos</strong>
                </header>
                <div class="section-content ">
                    <div class="row-base row ">
                        <div class="col-address col-base col-md-4 ">
                            Consultanos por este desarrollo y un asesor se pondrá en contacto con ud. dentro de las 24hs. 
                        </div>
                        <div class="col-base col-md-8 ">
                            <form class="js-ajax-form " onSubmit={sendForm} id="formContact">
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
                                    <div className="form-group">
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
                                <div class="col-sm-12">
                                    <div className={"" + (text === "" ? 'd-none' : 'd-block') + ' my-4'} class=" "><i class={"fa fa-check text-primary " + (text === "" ? 'd-none' : 'd-block')}></i> {text}</div>
                                </div>
                                <div className="both-form" style={{display:"flex",alignItems:'center',justifyContent:"flex-end",marginTop:"3rem"}}>
                                    <ReCAPTCHA sitekey={settings.keys.captcha} onChange={() => setDisabled(false)} />
                                    <div style={{marginLeft:"2rem"}} className={"form-submit text-right "} ><button type="submit " disabled={disabled} className={"btn btn-shadow-2 wow swing "}>Enviar <i class="icon-next "></i></button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ):''
}

export default Contact
