/* eslint-disable react/prop-types */
import LogoWhite from '../../assets/Group 1.png'
import LogoY from '../../assets/logoY.png'

import { Link } from 'react-router-dom'

import './styles.css'


const Header = ({ whiteVersion, hideCart }) => {

    const openDrawer = () => {
        const event = new CustomEvent('openCart')
        window.dispatchEvent(event)
    }
    return (
        <div className="col-12">
            <header className='py-4 px-4 text-center'>
                <Link to="/">
                <img src={whiteVersion ? LogoWhite : LogoY} className='img-fluid' />
                </Link>
            </header>
            {!hideCart && (
                <button onClick={() => openDrawer()} className='btn btn-secondary cart-button'>
                <span className='mdi mdi-cart'></span> 2 Ítens
                </button>
            )}
        </div>
    )
}

export default Header;