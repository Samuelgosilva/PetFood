import { configureStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./modules/rootReducer";
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: composeWithDevTools(), // Para habilitar o Redux DevTools

    })

sagaMiddleware.run(rootSaga)

export default store;