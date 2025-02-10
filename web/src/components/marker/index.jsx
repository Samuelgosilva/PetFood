/* eslint-disable react/prop-types */
import './styles.css'
import MakerIcon from '../../assets/marker.png'
import MakerIconSelected from '../../assets/markerSelected.png'
import { useSelector } from 'react-redux'

const Marker = ({petshop}) => {
    const { petshopMapSelected } = useSelector((state) => state.shop)

    return (<div>
        <img src={petshopMapSelected === petshop._id ? MakerIconSelected : MakerIcon} />
        <img src={petshop.logo}
                    className="img-marker"/>
    </div>
    )
}

export default Marker