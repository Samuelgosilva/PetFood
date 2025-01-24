/* eslint-disable react/prop-types */
import LogoWhite from '../../assets/Group 1.png'
import LogoY from '../../assets/logoY.png'


const Header = ({whiteVersion}) => {
return(
    <div className="col-12">
                <header className='py-4 px-4 text-center'>
                <img src={whiteVersion ? LogoWhite : LogoY} className='img-fluid'/>
                </header>
            </div>
)
}

export default Header;