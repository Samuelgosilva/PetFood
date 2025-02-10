/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useSelector} from 'react-redux'
import GoogleMapReact from 'google-map-react'
import './styles.css'
import Marker from '../marker'

const Map = ({petshops}) =>{

  const {mapCenter} = useSelector((state) => state.shop) 

  return(
    <div className="container-map">
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCLyz1d7NGYeZv88c0bDgdKZE8fX5BKJX4'}}
      center={mapCenter}
      defaultZoom={15}
      >
        {petshops.map((p) => (
        <Marker petshop={p} lat={p.location.lat} lng={p.location.lng}/> 
        ))}
      </GoogleMapReact>
    </div>
      )
}
export default Map

