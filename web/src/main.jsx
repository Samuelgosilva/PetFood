import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'
import Cadastro from './pages/cadastro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
