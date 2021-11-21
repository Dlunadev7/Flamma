import { useSelector,useDispatch } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import BreadCrumbs from "../breadcrumbs";
import React , { useState, useEffect} from 'react'
import { updateFields,formTokko } from '../../redux/contactDucks'

const Main = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const settings = useSelector((store) => store.settings);
  const [disabled, setDisabled] = useState(true);
  const [datos, setDatos] = useState({
      nombre:'',
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
    setStep(2)
    window.scrollTo(0, 0)
    dispatch(formTokko('Contacto',null))
}
  useEffect(() => {
      const update = () => {
          dispatch(updateFields(datos))
      }
      update()
  }, [datos])


  return (
    <main class="main main-inner main-contacts bg-contacts bg-zoom-in-out" data-stellar-background-ratio="0.6">
        <div class="container">
            <header class="main-header">
                <h1>Contactanos</h1>
            </header>
        </div>

        {/* <!-- Lines --> */}

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
    </main>
    )
};

export default Main;
