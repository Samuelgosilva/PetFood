import {takeLatest, all, call, put} from 'redux-saga/effects'
import types from './types'
import api from '../../../services/api'
import { setPetshops} from './actions'

export function* resquestPetshops() {
    //api.get('/petshops', {})
    const response = yield call(api.get, '/petshops')
    const res = response.data
    yield put(setPetshops(res.petshops))

}

export default all([ takeLatest(types.REQUEST_PETSHOPS, resquestPetshops)])