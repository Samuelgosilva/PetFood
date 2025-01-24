import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'
import Cadastro from './pages/cadastro'
import Checkout from './pages/checkout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Checkout />
  </StrictMode>,
)
