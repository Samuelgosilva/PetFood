import './styles.css'
import MakerIcon from '../../assets/marker.png'
import MakerIconSelected from '../../assets/markerSelected.png'

const Marker = () => {
    return (<div>
        <img src={MakerIconSelected} />
        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/97a2d164724901.Y3JvcCw4NzksNjg3LDI1NCw4MA.jpg"
                    className="img-marker"/>
    </div>
    )
}

export default Marker