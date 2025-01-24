import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'
import Petshop from './pages/petshop'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Petshop/>
  </StrictMode>,
)
