import starshipsReducers from './starshipsReducers'
import { combineReducers } from 'redux'

export default combineReducers({
  starships: starshipsReducers
})
