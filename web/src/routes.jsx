import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './styles/global.css'
import Sidebar from './components/sidebar'
import Cadastro from './pages/cadastro'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'
import Home from './pages/home'

const Rotas = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/petshop/:id' exact element={<Petshop/>}/>
                <Route path='/checkout' exact element={<Checkout/>}/>
                <Route path='/cadastro' exact element={<Cadastro/>}/>
            </Routes>
        </Router>
        <Sidebar/>
        </>
    )
}
export default Rotas