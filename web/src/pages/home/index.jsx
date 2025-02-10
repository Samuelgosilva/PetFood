/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {resquestPetshops} from '../../store/modules/shop/actions'

import './styles.css'
import Header from '../../components/header'
import Petshop from '../../components/petshop'
import App from '../../components/map'


const Home = () => {

  const dispatch = useDispatch()
  const {petshops } = useSelector((state) => state.shop)

  useEffect(() => {
    dispatch(resquestPetshops())
  }, [])
  return (
    
    <div className='h-100'>
        <Header />
        <div className="container-fluid petshop-list-container">
          <div className="col-12 px-4 text-center">
            <h5>Mais próximos de você (5)</h5>
          </div>
          <ul className="col-12 petshop-list">
            {petshops.map((p) =>(
            <Petshop petshop={p} />))}
          </ul>
        </div>
        <App petshops={petshops}/>
    </div>
  )
}

export default Home