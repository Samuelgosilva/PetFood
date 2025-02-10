
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store'
import Rotas from './routes'








createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Rotas/>
  </Provider>,
)
