import { data } from 'jquery'
import { useSelector } from 'react-redux';
import Map from '../map'
const Location = () => {
    const {data} = useSelector((store) => store.developments.development);

    return data ? (
        <>
            <section style={{marginTop: "5em",textAlign: "center"}} id="ubicacion">
                <div style={{textAlign: "center"}}>
                    <h2>Ubicación</h2>
                    <h5 style={{marginTop:"1.5rem",fontSize:"1.2rem"}}>{data.fake_address ? (data.fake_address +  ", " + data.location.full_location.split(" | ")[1]) + "." : ''}</h5>
                </div>
                <header class="container section-header wow fadeInRight " style={{marginBottom: "-100px"}}>
                    <strong class="fade-title-right">Mapa</strong>
                </header>
                <div className="dev-map">
                    <Map coordenadas={{ geo_lat: data.geo_lat, geo_long: data.geo_long }} />
                </div>
            </section>
        </>
    )
    :
    ''

}

export default Location