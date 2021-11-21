import React, {useEffect} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {useSelector} from 'react-redux'
import mapStyles from './mapStyles.json';

const defaultMapOptions = {
  styles: mapStyles
};

function changeFormat(value){
  var convert = value.toString()
  return convert.replace(',','.')
}

const GetMap = (props) => {
  // const {data} = useSelector(store => store.developments.development)
  const settings = useSelector(store => store.settings)
  
  // var icon = {
  //   url: "/assets/images/marker.svg",
  //   scaledSize: (64, 64),
  // }; icon={{ url: icon.url, scaledSize: new window.google.maps.Size(64,64) }}

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
    defaultOptions={defaultMapOptions}
    defaultZoom={16}
    defaultCenter={{ lat: (props.latitud), lng: (props.longitud)}}    
  >
    {props.isMarkerShown && <Marker position={{ lat: (props.latitud), lng: (props.longitud) } }  />}
  </GoogleMap>
))

  return props.coordenadas ? (
    <div className="map">
      <MyMapComponent
        isMarkerShown
        latitud={parseFloat(changeFormat(props.coordenadas.geo_lat))}
        longitud={parseFloat(changeFormat(props.coordenadas.geo_long))} 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key='+ settings.keys.google_map}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
  ): console.log(props)

}

export default GetMap