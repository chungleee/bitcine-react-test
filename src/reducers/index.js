import starshipsReducers from './starshipsReducers'
import charactersReducers from './charactersReducers'
import { combineReducers } from 'redux'

export default combineReducers({
  starships: starshipsReducers,
  characters: charactersReducers
})
