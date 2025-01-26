import GoogleMapReact from 'google-map-react'
import './styles.css'
import Marker from '../marker'

const Map = () =>{
  return(
    <div className="container-map">
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCLyz1d7NGYeZv88c0bDgdKZE8fX5BKJX4'}}
      center={{
        lat: -21.1775,
        lng: -47.8103
      }}
      defaultZoom={15}
      >
        <Marker lat={-21.1775} lng={-47.8103}/>
      </GoogleMapReact>
    </div>
      )
}
export default Map

