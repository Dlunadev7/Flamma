
import Map from '../map'
import { useSelector,useDispatch } from "react-redux";

import { getWhatsapp } from "../../functions/functions_contact";

const latitud = {latitud: -34.57565921221931, longitud: -58.420479848902474}


const Details = () => {
    
  const settings = useSelector((store) => store.settings);


    return (
        <section class="contact-details">
            <div class="col-map col-md-7">
                <div id="map" class="gmap col-md-7">
                    {/* <Map latitud={} longitud={} /> */}
                    <Map coordenadas={{ geo_lat: -34.57565921221931, geo_long: -58.420479848902474 }} />
                </div>
            </div>
            <div class="contact-info col-md-5 col-md-offset-7">
                <div class="contact-info-content">
                    <div class="contact-info-title">Contacto</div>
                    <div class="contact-row">
                        <i class="fa fa-map-marker"></i>
                        <div class="contact-body">
                            <h4>Dirección</h4>
                            <div class="contact-content">Cerviño 4449 7º Piso. C1425AHB<br /> CABA, Argentina.</div>
                        </div>
                    </div>
                    <div class="phone contact-row">
                        <i class="fa fa-phone"></i>
                        <div class="contact-body">
                            <h4>Teléfono</h4>
                            <div class="phone-row">{settings.contact.whatsapp.visual}</div>
                        </div>
                    </div>
                    <div class="phone contact-row">
                        <i class="fa icon-whatsapp"></i>
                        <div class="contact-body">
                            <h4>Whatsapp</h4>
                            <div class="phone-row"><a href={getWhatsapp(settings.contact.whatsapp.link,"")} target="_blank"> +54 911 7045.1111</a> </div>
                        </div>
                    </div>
                    <div class="contact-row">
                        <i class="fa fa-envelope"></i>
                        <div class="contact-body">
                            <h4>Email</h4>
                            <div class="contact-content"><a href={"mailto:" + settings.contact.mail}>{settings.contact.mail}</a></div>
                        </div>
                    </div>
   
                </div>
            </div>
        </section>
    )
}

export default Details